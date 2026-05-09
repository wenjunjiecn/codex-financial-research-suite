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

## Install As A Local Plugin

Clone this repository somewhere on your machine, then point Codex to the repo-local marketplace:

1. Ensure the repo exists locally.
2. Use the marketplace file at `.agents/plugins/marketplace.json`.
3. The plugin entry points to `./plugins/financial-research-suite`.

If you prefer a home-local install, you can also copy or sync `plugins/financial-research-suite` into `~/plugins/financial-research-suite` and register it in `~/.agents/plugins/marketplace.json`.

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
