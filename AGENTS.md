# Agency Agents Integration at ATMA-AI

This document outlines the agency-agents configurations integrated into the ATMA-AI web application.

## Overview

We have integrated specialized agent personas into the `src/agents/` directory. These markdown files serve as the system instructions or "souls" for our internal AI operators.

## Included Agents

1. **`seo-specialist.md`**: Dedicated to optimizing our Next.js application for search engines (AEO/SEO).
2. **`crm-manager.md`**: Manages incoming leads and monitors the pipeline in our `/admin/leads` dashboard.
3. **`content-strategist.md`**: Develops content strategy and generates brand assets in `/admin/assets`.
4. **`research-analyst.md`**: Parses emerging trends and aids in generating technical reports for the `/research` portal.

## Usage

These agents are invoked via the `/api/agency-agent` endpoint. You can interact with them securely from the ATMA Admin Dashboard (`/admin`).
