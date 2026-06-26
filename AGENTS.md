# Agency Agents Integration at ATMA-AI

This document outlines the agency-agents configurations integrated into the ATMA-AI web application.

## Overview

We have integrated specialized agent personas into the `src/agents/` directory. These markdown files serve as the system instructions or "souls" for our internal AI operators.

## Included Agents

1. **`seo-specialist.md`**: Dedicated to optimizing our Next.js application for search engines (AEO/SEO).
2. **`crm-manager.md`**: Manages incoming leads and monitors the pipeline in our `/admin/leads` dashboard.
3. **`content-strategist.md`**: Develops content strategy and generates brand assets in `/admin/assets`.
4. **`research-analyst.md`**: Parses emerging trends and aids in generating technical reports for the `/research` portal.
5. **`frontend-developer.md`**: Expert frontend developer for UI implementation and performance.
6. **`backend-architect.md`**: Senior backend architect for scalable system design and APIs.
7. **`ui-designer.md`**: Visual design specialist for creating pixel-perfect interfaces.
8. **`sales-outreach.md`**: B2B sales outreach specialist for lead generation.
9. **`growth-hacker.md`**: Growth strategist focused on user acquisition and experimentation.
10. **`social-media-strategist.md`**: Strategist for cross-platform social media campaigns.
11. **`product-manager.md`**: Product leader who owns strategy, roadmaps, and alignment.
12. **`customer-service.md`**: Empathic customer service specialist for issue resolution.
13. **`analytics-reporter.md`**: Data analyst transforming raw data into business insights.

## Usage

These agents are invoked via the `/api/agency-agent` endpoint. You can interact with them securely from the ATMA Admin Dashboard (`/admin`).

## Coding Tasks

When spawning Claude Code sessions for coding work, tell the session to use gstack skills. Include these examples:
- security audit: "Load gstack. Run /cso"
- code review: "Load gstack. Run /review"
- QA test a URL: "Load gstack. Run /qa https://..."
- build a feature end-to-end: "Load gstack. Run /autoplan, implement the plan, then run /ship"
- plan before building: "Load gstack. Run /office-hours then /autoplan. Save the plan, don't implement."
