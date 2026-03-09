# Agent Playbook

This file holds the default day-to-day operating guidance for Codex and similar coding agents in this repository.

## Purpose
- Turn repeated prompting into documented operating practice.
- Keep `AGENTS.md` short by storing detailed guidance here.
- Reduce repeated explanations across threads.

## Default Way Of Working
- Start by reading `AGENTS.md` and then this file when the task is non-trivial.
- Inspect the local codebase before proposing structural changes.
- Prefer implementation over abstract advice when the task is actionable.
- Keep changes narrow unless the user asks for broader cleanup.
- Validate changes with the lightest check that gives confidence.

## Communication
- Treat documented repo principles as existing decisions, not new proposals.
- If a known principle applies, continue from it instead of reintroducing it.
- State assumptions briefly when context is missing.
- Summaries should focus on decisions, changes made, verification, and remaining risk.

## Documentation Rules
- Add to docs only when a rule or workflow has become repeatable.
- Put repo-wide principles in `AGENTS.md`.
- Put detailed operating guidance in `docs/agent/`.
- Put reusable procedures into Skills when they are broadly repeatable.

## Proposal Heuristics
- Prefer refining the current operating model over replacing it.
- If proposing a new practice, explain why current docs are insufficient.
- If the same guidance appears in multiple threads, promote it into docs or a Skill.

## Update Triggers
- A principle is repeated across several tasks.
- The same misunderstanding happens in multiple threads.
- A review standard or workflow becomes stable.
- A prompt pattern is clearly reusable.

## Out Of Scope
- Project architecture details that belong in technical docs.
- Long command references.
- One-off task notes that will not be reused.
