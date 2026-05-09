#!/usr/bin/env bash

set -euo pipefail

PLUGIN_NAME="financial-research-suite"
MARKETPLACE_NAME="codex-financial-research-suite"
REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SOURCE_PLUGIN_DIR="$REPO_ROOT/plugins/$PLUGIN_NAME"
TARGET_PLUGIN_DIR="$HOME/plugins/$PLUGIN_NAME"
TARGET_MARKETPLACE="$HOME/.agents/plugins/marketplace.json"

mkdir -p "$HOME/plugins"
mkdir -p "$(dirname "$TARGET_MARKETPLACE")"

ln -sfn "$SOURCE_PLUGIN_DIR" "$TARGET_PLUGIN_DIR"

python3 - "$TARGET_MARKETPLACE" "$PLUGIN_NAME" "$MARKETPLACE_NAME" <<'PY'
import json
import sys
from pathlib import Path

marketplace_path = Path(sys.argv[1]).expanduser()
plugin_name = sys.argv[2]
marketplace_name = sys.argv[3]

entry = {
    "name": plugin_name,
    "source": {
        "source": "local",
        "path": f"./plugins/{plugin_name}",
    },
    "policy": {
        "installation": "AVAILABLE",
        "authentication": "ON_INSTALL",
    },
    "category": "Finance",
}

if marketplace_path.exists():
    payload = json.loads(marketplace_path.read_text())
else:
    payload = {
        "name": marketplace_name,
        "interface": {
            "displayName": "Local Plugins",
        },
        "plugins": [],
    }

plugins = payload.setdefault("plugins", [])
for i, existing in enumerate(plugins):
    if isinstance(existing, dict) and existing.get("name") == plugin_name:
        plugins[i] = entry
        break
else:
    plugins.append(entry)

marketplace_path.write_text(json.dumps(payload, indent=2) + "\n")
PY

echo "Installed $PLUGIN_NAME to $TARGET_PLUGIN_DIR"
echo "Updated marketplace: $TARGET_MARKETPLACE"
echo "Plugin install target: $PLUGIN_NAME@$MARKETPLACE_NAME"
