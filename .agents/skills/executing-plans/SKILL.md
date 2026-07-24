---
name: executing-plans
description: Use when you have an approved implementation plan and need to execute it task-by-task for an Astro project. This is the absolute source of truth for the execution and verification loop.
---

# Executing Plans

## Overview

Load the approved plan, challenge unclear steps early, execute tasks in order, and verify continuously.

**This skill dictates the master workflow loop.** You must follow the per-task execution loop exactly as written below.

Announce at start:
"I'm using the executing-plans skill to implement this plan."

## Product Context

When plan steps are ambiguous or conflict with product intent, consult product documentation before coding and stop for clarification if the plan and product intent cannot be reconciled.

## Step 1: Load and Review Plan

1. Read the plan file fully from `.agents/plans/` or the approved implementation plan artifact.
2. Identify blockers, missing dependencies, unclear acceptance criteria, or risky sequencing.
3. If blockers exist, stop and ask the user before coding.
4. If clear, create or update task tracking and start execution.

## Step 2: Execute Task Loop (The Master Loop)

For **EACH INDIVIDUAL TASK** in the plan, execute this exact sequence in order:

1. **Mark as in_progress:** Acknowledge the task starting.
2. **Implement:** Write only that task's scoped changes.
3. **Verify (via `astro-verification-before-completion`):** Execute the required commands (`npm run lint`, `npx astro check`, `npm run build`) to gather hard evidence. Do not proceed until verification passes.
4. **Maintain (via `post-task-skill-maintenance`):** Evaluate if the current task revealed any need to update agent skills.
5. **Record Outcome:** You MUST output one of these exact lines in your response to close the task:
   - `SKILL-UPDATES-APPLIED: [List the specific skill files updated here]`
   - `SKILL-UPDATES-NOT-REQUIRED: [Provide a one-line reason why no updates were needed]`
6. **Complete:** Mark the task as completed ONLY after verification has passed and Step 5 is recorded.

_Do not batch tasks. Do not skip verification. Do not skip maintenance._

## Stop Conditions

Stop immediately and ask for help when:

- A blocker prevents progress (missing dependency, unclear instruction, tooling issue).
- Plan instructions conflict with codebase reality.
- Verification fails repeatedly without a clear fix.
- You are asked to implement on main/master without explicit user confirmation.
