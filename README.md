# Codex Finance

A local Codex plugin and skill bundle for financial analysis and equity research.

This repository packages a Codex plugin named `codex-finance` with 15 reusable skills covering valuation, earnings workflows, sector research, and idea generation.

## Repository Layout

```text
.agents/plugins/marketplace.json
plugins/codex-finance/
  .codex-plugin/plugin.json
  skills/
```

## Included Skills

### Financial analysis

- `financial-analysis-router`
- `comps-analysis`
- `dcf-model`
- `lbo-model`
- `three-statement-model`

### Equity research

- `equity-research-router`
- `earnings-analysis`
- `earnings-preview`
- `model-update`
- `morning-note`
- `sector-overview`
- `idea-generation`
- `catalyst-calendar`
- `thesis-tracker`
- `initiating-coverage`

## Quick Install

### NPM installer

Use `npx` to install the plugin into your home-local Codex plugin directory:

```bash
npx codex-finance install
```

Useful companion commands:

```bash
npx codex-finance doctor
npx codex-finance uninstall
```

The npm installer:

- copies the plugin into `~/plugins/codex-finance`
- creates or updates `~/.agents/plugins/marketplace.json`
- registers the plugin in your home-local marketplace

If `~/.agents/plugins/marketplace.json` does not already exist, the installer creates a marketplace named `codex-finance`, so the install target becomes:

```text
codex-finance@codex-finance
```

If you already have a home-local marketplace, the plugin keeps that existing marketplace name and the installer prints the exact install target after setup.

## Publish To npm With GitHub Actions

This repository includes a GitHub Actions workflow at `.github/workflows/publish-npm.yml` that publishes the npm package when a GitHub Release is published.

### One-time npm setup

Before the workflow can publish, configure npm trusted publishing for this package:

1. Open npm package settings for `codex-finance`
2. Go to the trusted publisher section
3. Add GitHub Actions as the publisher
4. Use:
   - GitHub owner: `wenjunjiecn`
   - Repository: `codex-finance`

This repo uses npm trusted publishing with GitHub OIDC, so you do not need to store an `NPM_TOKEN` secret in GitHub.

### Release flow

1. Update `package.json` version
2. Push to `main`
3. Create a GitHub Release
4. The workflow publishes the package to npm automatically

You can also trigger the workflow manually from the GitHub Actions tab with `workflow_dispatch`.

### Standard home-local install

Clone the repository and run the installer:

```bash
git clone https://github.com/wenjunjiecn/codex-finance.git
cd codex-finance
bash scripts/install-home-local.sh
```

This does three things:

- links `plugins/codex-finance` into `~/plugins/codex-finance`
- creates or updates `~/.agents/plugins/marketplace.json`
- registers the plugin in your home-local marketplace

### Repo-local install

If you want to keep the plugin repo-scoped instead of home-scoped, use the marketplace file already included in this repository:

```text
.agents/plugins/marketplace.json
```

The repo-local marketplace name is `codex-finance` and the plugin entry points to:

```text
./plugins/codex-finance
```

### What to install in Codex

After the local marketplace is available, install the plugin using the marketplace name printed by the installer. On a clean setup, that target is:

```text
codex-finance@codex-finance
```

## What The Plugin Covers

- Public market valuation workflows
- Earnings preview and post-print analysis
- Model refresh and target-price revision support
- Sector landscape work and stock idea sourcing
- Thesis maintenance and catalyst tracking
- Staged initiation-of-coverage support

## Notes

- These skills are designed as research and analysis aids, not automated investment advice.
- The skills are intentionally lightweight so Codex can trigger them without loading oversized workflow docs.
