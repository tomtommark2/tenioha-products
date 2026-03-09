# AGENTS.md

This file is the repository-level index for Codex and other coding agents.

## Principles
- Treat this file as a map, not a full handbook.
- Put stable, repo-wide rules here.
- Put detailed guidance in `docs/agent/`.
- Put repeatable workflows in Skills.
- Extend existing principles before proposing new ones.

## Working Rules
- Read this file before making changes.
- Check nearby `AGENTS.md` files if working in subdirectories.
- Prefer the smallest change that satisfies the task.
- Verify the result with the lightest meaningful check.
- Do not rewrite established repo conventions unless the task requires it.

## Documentation Layout
- `AGENTS.md`: repo-wide operating rules and pointers.
- `docs/agent/`: detailed playbooks, review checklists, architecture notes, prompting guidance.
- `skills/` or shared Codex skills: reusable workflows that should not live in this file.

## Proposal Rules
- Do not re-propose documented principles as if they are new.
- When suggesting improvements, start from the current operating model.
- If a principle already exists, propose a refinement, exception, or implementation path.

## Change Policy
- Keep edits scoped to the user's request.
- Preserve unrelated user changes.
- Flag assumptions when local context is incomplete.
- Prefer updating docs when a repeated pattern or decision becomes stable.

## Recommended Next Files
- `docs/agent/playbook.md`: day-to-day working conventions.
- `docs/agent/review-checklist.md`: bug-risk and regression review points.
- `docs/agent/workflows.md`: recurring task patterns worth turning into Skills.

## Maintenance
- Keep this file short.
- Review it when the team notices repeated agent mistakes or repeated prompt boilerplate.
