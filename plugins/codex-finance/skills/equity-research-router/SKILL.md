---
name: equity-research-router
description: Use when requests involve earnings notes, model refreshes, sector research, stock idea generation, or daily research workflow triage and the right equity research path needs to be chosen.
---

# Equity Research Router

## Overview

Route research requests to the right equity workflow. Use this when the user asks for "a note," "a preview," "research on a sector," or "some ideas" without specifying the exact research product.

## Routing Guide

- Use `earnings-analysis` after a company has reported and the task is to explain the print, guidance, and thesis impact.
- Use `earnings-preview` before a company reports and the task is to frame what matters, what consensus expects, and what could move the stock.
- Use `model-update` when new company data or assumptions need to flow into a model or valuation.
- Use `morning-note` for concise overnight summaries, quick takes, and actionable morning meeting prep.
- Use `sector-overview` for thematic, subsector, or industry landscape work.
- Use `idea-generation` for long or short screens, thematic sourcing, and first-pass stock selection.
- Use `catalyst-calendar` to track and rank upcoming events across a universe.
- Use `thesis-tracker` to maintain or review the logic behind an active name.
- Use `initiating-coverage` for first-time coverage or large staged initiation work.

## Intake Checklist

Before routing, confirm:

- Company, sector, or universe
- Timing: pre-event, post-event, or evergreen
- Audience: PM, analyst, IC, sales, or internal prep
- Desired output: short note, full write-up, table, or model handoff
- Whether the user already has a house view, target price, or numbers to preserve

## Decision Rules

- If the user asks "what happened in the quarter," use `earnings-analysis`.
- If the user asks "what should we watch ahead of earnings," use `earnings-preview`.
- If the user asks to refresh assumptions or valuation, use `model-update`.
- If the user asks for a quick morning roundup or trader-facing note, use `morning-note`.
- If the user asks "how does this industry look," use `sector-overview`.
- If the user asks "find me ideas," use `idea-generation`.
- If the user asks "what is coming up," use `catalyst-calendar`.
- If the user asks whether a position thesis still holds, use `thesis-tracker`.
- If the user asks for a first-time coverage note, use `initiating-coverage`.

## Guardrails

- Separate facts, estimates, and opinion clearly.
- Time-sensitive research should prefer current data and dated source references.
- Keep the product proportional to the ask; not every prompt needs a full report.
