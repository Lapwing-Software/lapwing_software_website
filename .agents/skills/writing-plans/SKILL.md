---
name: writing-plans
description: Use when design is approved and you need a concrete, step-by-step implementation plan for Astro work, including verification commands.
---

# Writing Plans

## Overview

Convert an approved design into an execution-ready plan that is scoped, testable, and safe to run in one session.

Announce at start:
"I'm using the writing-plans skill to produce an implementation plan."

## Product Context

When a plan translates product scope into implementation work, consult product documentation and preserve the product intent, user experience, and feature boundaries defined there.

## Inputs Required

- Approved design notes or spec
- Current codebase context (relevant files, Astro pages vs layouts vs components, rendering patterns)
- Constraints (performance, dependencies, Tailwind v4 styles)

If any input is missing, ask focused questions before planning.

## Plan Output Format

Write the plan to:
`.agents/plans/YYYY-MM-DD-<topic>-plan.md` or as an implementation plan artifact.

Create `.agents/plans/` first if it does not exist.

Include these sections:

1. Goal and scope

- What will change
- What will not change (non-goals)

2. Implementation tasks

- Ordered, bite-sized tasks
- For each task include:
  - Files/components expected to change (noting Astro client directives if applicable)
  - Exact expected outcome
  - Verification command(s)

3. Risks and mitigations

- Main technical risks (e.g., hydration mismatches, build-time vs run-time errors)
- Security & performance risks
- Rollback or fallback strategy

4. Verification strategy

- Required baseline commands:
  - `npm run lint` (ESLint linting check)
  - `npx astro check` (strict Astro & TypeScript validation)
  - `npm run build` (verify SSG/SSR production build)
- Additional targeted checks based on scope

5. Handoff

- Explicit instruction to invoke executing-plans with this plan file

## Quality Bar

A good plan is:

- Executable without guessing
- Small enough that each task can be verified
- Explicit about acceptance criteria
- Aligned with Astro 6 architecture patterns (Islands boundaries, static-first rendering, component conventions)

## Stop Conditions

Do not create an implementation plan if the design is not approved.
If design has contradictions or unresolved decisions, return to brainstorming first.

