---
name: financial-analysis-router
description: Use when requests involve equity valuation, financial modeling, comparable companies, or buyout analysis and the right modeling workflow needs to be chosen.
---

# Financial Analysis Router

## Overview

This skill routes valuation and modeling requests to the right finance workflow. Use it first when the user wants "an analysis" but has not yet pinned down whether the job is comps, DCF, LBO, or a full operating model.

## Routing Guide

- Use `comps-analysis` for peer selection, trading multiples, premium or discount analysis, and benchmarking.
- Use `dcf-model` for intrinsic valuation, WACC-based discounting, terminal value work, and per-share value ranges.
- Use `lbo-model` for sponsor returns, leverage sizing, sources and uses, debt paydown, and exit sensitivities.
- Use `three-statement-model` for integrated forecasting across income statement, balance sheet, and cash flow.

## Intake Checklist

Before starting, gather or confirm:

- Company or ticker
- Audience: quick screen, IC memo, board material, or full model
- Time horizon and currency
- Whether output should be prose, tabular analysis, or an `.xlsx` artifact
- Any house view or user-supplied assumptions that must override defaults

## Default Decision Rules

- If the user asks "what is it worth," start with `dcf-model`.
- If the user asks "how does it trade versus peers," start with `comps-analysis`.
- If the user asks "would a sponsor buy this," start with `lbo-model`.
- If the user asks to "build the model" or "forecast the statements," start with `three-statement-model`.
- If the ask mixes multiple valuation methods, run `comps-analysis` first, then use its outputs to inform `dcf-model` or `lbo-model`.

## Output Standard

Every routed workflow should end with:

- A short statement of the question answered
- The core assumptions used
- The main valuation or modeling result
- The largest sensitivities or open risks

## Guardrails

- Treat all figures as draft analytical work unless the user provides trusted source data.
- Flag unsupported assumptions instead of silently inventing precision.
- Prefer transparent ranges and sensitivity tables over single-point conclusions.
