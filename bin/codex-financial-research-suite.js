#!/usr/bin/env node

const fs = require("fs");
const os = require("os");
const path = require("path");

const PACKAGE_ROOT = path.resolve(__dirname, "..");
const PLUGIN_NAME = "financial-research-suite";
const MARKETPLACE_NAME = "codex-financial-research-suite";
const SOURCE_PLUGIN_DIR = path.join(PACKAGE_ROOT, "plugins", PLUGIN_NAME);
const TARGET_PLUGIN_DIR = path.join(os.homedir(), "plugins", PLUGIN_NAME);
const TARGET_MARKETPLACE = path.join(
  os.homedir(),
  ".agents",
  "plugins",
  "marketplace.json",
);

function printUsage() {
  console.log(`Usage:
  codex-financial-research-suite install
  codex-financial-research-suite uninstall
  codex-financial-research-suite doctor
`);
}

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function readMarketplace() {
  if (!fs.existsSync(TARGET_MARKETPLACE)) {
    return {
      name: MARKETPLACE_NAME,
      interface: {
        displayName: "Local Plugins",
      },
      plugins: [],
    };
  }

  return JSON.parse(fs.readFileSync(TARGET_MARKETPLACE, "utf8"));
}

function writeMarketplace(payload) {
  ensureDir(path.dirname(TARGET_MARKETPLACE));
  fs.writeFileSync(TARGET_MARKETPLACE, JSON.stringify(payload, null, 2) + "\n");
}

function buildEntry() {
  return {
    name: PLUGIN_NAME,
    source: {
      source: "local",
      path: `./plugins/${PLUGIN_NAME}`,
    },
    policy: {
      installation: "AVAILABLE",
      authentication: "ON_INSTALL",
    },
    category: "Finance",
  };
}

function install() {
  ensureDir(path.dirname(TARGET_PLUGIN_DIR));
  fs.rmSync(TARGET_PLUGIN_DIR, { recursive: true, force: true });
  fs.cpSync(SOURCE_PLUGIN_DIR, TARGET_PLUGIN_DIR, { recursive: true });

  const payload = readMarketplace();
  const plugins = Array.isArray(payload.plugins) ? payload.plugins : [];
  const entry = buildEntry();
  const existingIndex = plugins.findIndex(
    (plugin) => plugin && plugin.name === PLUGIN_NAME,
  );

  if (existingIndex >= 0) {
    plugins[existingIndex] = entry;
  } else {
    plugins.push(entry);
  }

  payload.plugins = plugins;
  if (!payload.name) {
    payload.name = MARKETPLACE_NAME;
  }
  if (!payload.interface || typeof payload.interface !== "object") {
    payload.interface = { displayName: "Local Plugins" };
  }

  writeMarketplace(payload);

  console.log(`Installed plugin to ${TARGET_PLUGIN_DIR}`);
  console.log(`Updated marketplace: ${TARGET_MARKETPLACE}`);
  console.log(
    `Install target in Codex: ${PLUGIN_NAME}@${payload.name || MARKETPLACE_NAME}`,
  );
}

function uninstall() {
  fs.rmSync(TARGET_PLUGIN_DIR, { recursive: true, force: true });

  if (fs.existsSync(TARGET_MARKETPLACE)) {
    const payload = readMarketplace();
    const plugins = Array.isArray(payload.plugins) ? payload.plugins : [];
    payload.plugins = plugins.filter(
      (plugin) => !(plugin && plugin.name === PLUGIN_NAME),
    );
    writeMarketplace(payload);
  }

  console.log(`Removed plugin from ${TARGET_PLUGIN_DIR}`);
  console.log(`Updated marketplace: ${TARGET_MARKETPLACE}`);
}

function doctor() {
  const checks = [
    ["package plugin source exists", fs.existsSync(SOURCE_PLUGIN_DIR)],
    ["installed plugin exists", fs.existsSync(TARGET_PLUGIN_DIR)],
    ["home marketplace exists", fs.existsSync(TARGET_MARKETPLACE)],
  ];

  for (const [label, ok] of checks) {
    console.log(`${ok ? "OK" : "MISSING"}: ${label}`);
  }

  if (fs.existsSync(TARGET_MARKETPLACE)) {
    const payload = readMarketplace();
    const plugins = Array.isArray(payload.plugins) ? payload.plugins : [];
    const entry = plugins.find((plugin) => plugin && plugin.name === PLUGIN_NAME);
    console.log(
      entry
        ? `OK: marketplace entry -> ${entry.name}@${payload.name || MARKETPLACE_NAME}`
        : "MISSING: marketplace entry",
    );
  }
}

const command = process.argv[2];

if (!command || command === "--help" || command === "-h") {
  printUsage();
  process.exit(command ? 0 : 1);
}

if (command === "install") {
  install();
} else if (command === "uninstall") {
  uninstall();
} else if (command === "doctor") {
  doctor();
} else {
  console.error(`Unknown command: ${command}`);
  printUsage();
  process.exit(1);
}
