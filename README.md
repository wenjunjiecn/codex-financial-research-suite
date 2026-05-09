# Codex Financial Research Suite

A local Codex plugin and skill bundle for financial analysis and equity research.

This repository packages a Codex plugin named `financial-research-suite` with 15 reusable skills covering valuation, earnings workflows, sector research, and idea generation.

## Repository Layout

```text
.agents/plugins/marketplace.json
plugins/financial-research-suite/
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

### Standard home-local install

Clone the repository and run the installer:

```bash
git clone https://github.com/wenjunjiecn/codex-financial-research-suite.git
cd codex-financial-research-suite
bash scripts/install-home-local.sh
```

This does three things:

- links `plugins/financial-research-suite` into `~/plugins/financial-research-suite`
- creates or updates `~/.agents/plugins/marketplace.json`
- registers the plugin as `financial-research-suite@codex-financial-research-suite`

### Repo-local install

If you want to keep the plugin repo-scoped instead of home-scoped, use the marketplace file already included in this repository:

```text
.agents/plugins/marketplace.json
```

The repo-local marketplace name is `codex-financial-research-suite` and the plugin entry points to:

```text
./plugins/financial-research-suite
```

### What to install in Codex

After the local marketplace is available, install:

```text
financial-research-suite@codex-financial-research-suite
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
