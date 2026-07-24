---
name: astro-verification-before-completion
description: Verification requirements before marking Astro tasks complete. Enforces running linting, typechecking, and production build commands.
---

# Astro Verification Before Completion

Claiming work is complete without running verification is strictly prohibited. Before claiming a task or plan step is complete, you MUST execute the project verification pipeline and inspect the output.

---

## Required Verification Pipeline

Run the following commands in order from the repository root:

1. **Linting Check**:
   ```bash
   npm run lint
   ```
   Ensures ESLint rules and formatting standards pass.

2. **Astro Type & Component Check**:
   ```bash
   npx astro check
   ```
   Validates TypeScript types and Astro template structures across `.astro` components.

3. **Production Build**:
   ```bash
   npm run build
   ```
   Verifies that the Astro production build compiles successfully without bundling errors or broken imports.

---

## Verification Criteria

- All 3 commands must return an exit code of `0`.
- If any command fails, analyze the full error log, fix the root cause, and re-run the verification pipeline before claiming completion.
