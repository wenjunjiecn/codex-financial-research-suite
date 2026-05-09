---
name: comps-analysis
description: Use when users need peer benchmarking, trading multiples, valuation comps, or a comparable company set for a public company.
---

# Comparable Company Analysis

## Overview

Build a clean comparable-company view for valuation and benchmarking. The goal is to produce a defendable peer set, consistent operating metrics, and clear valuation ranges rather than a loose list of "similar names."

## Workflow

1. Define the purpose.
   Decide whether the comps are for valuation, growth benchmarking, margin benchmarking, or a quick market snapshot.
2. Build the peer set.
   Favor 4 to 8 public companies with comparable business model, end market, geography, and scale.
3. Normalize the data.
   Keep periods consistent across the set: all LTM, all FY1, or another single basis.
4. Calculate key metrics.
   Include revenue, growth, margin, market cap, enterprise value, EV/revenue, EV/EBITDA, and P/E when relevant.
5. Summarize the range.
   Show max, 75th percentile, median, 25th percentile, and min for headline valuation metrics.
6. Explain the takeaways.
   Call out who trades at a premium or discount and why.

## Minimum Deliverable

- Peer list with rationale
- Operating statistics table
- Valuation multiples table
- Median and interquartile range for headline multiples
- Short commentary on what drives premium and discount names

## Industry Extensions

- SaaS: ARR, NDR, Rule of 40
- Financials: ROE, ROA, efficiency ratio
- Retail: same-store sales, inventory turns
- Industrials: asset turnover, capex intensity

## Quality Checks

- Exclude obviously non-comparable outliers or explain why they stay in
- Keep definitions consistent across peers
- Distinguish current trading multiples from forward multiples
- Sanity-check whether the implied range matches the business quality narrative

## Handoff

When the user also wants an intrinsic value, pass the peer median growth and trading multiples into `dcf-model` as market-based cross-checks.
