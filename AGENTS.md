# AGENTS.md

This file defines how we work in this repository.

## Core Working Rules

- Always think MVP first.
- Always use red/green TDD for production behavior.
- Use well-known, respected standards, libraries, and conventions.
- If uncertain, always ask.
- Respect trainer expertise; the product should surface context and options, not override professional judgment.
- Suggestions are acceptable, but never remove agency from the personal trainer.

## Product Rules

- Build testable product slices, not broad platform layers.
- Prefer the smallest feature that can validate a real trainer or client need.
- Keep the product centered on relationship, support, safety, and progress beyond the scale.
- Avoid features that drift into generic workout-builder territory unless they directly support the MVP learning goal.
- Treat the trainer-client relationship as the core product surface.
- Use realistic seed data before adding backend complexity.
- Avoid assuming the correct coaching action when a qualified trainer should decide.
- Prefer decision support over decision automation.
- Make suggested next steps optional and trainer-controlled.

## Domain Safety Rules

- Do not generate medical diagnosis, treatment advice, or medical nutrition therapy.
- Keep nutrition guidance general, habit-based, and within personal-trainer scope.
- Make consent explicit for sensitive data such as weight, measurements, photos, health history, and private notes.
- Use respectful, person-first, non-shaming language.
- Keep weight optional and visually secondary.
- Surface safety and referral concerns clearly, but avoid diagnostic language.
- Phrase safety prompts as review cues, not instructions or conclusions.
- Avoid UI language that implies the app has made a coaching decision on behalf of the trainer.

## Engineering Rules

- Prefer simple, boring technology that is easy to test and maintain.
- Keep changes small, focused, and reversible.
- Follow existing project conventions once they exist.
- Add abstractions only when they remove real complexity or match an established pattern.
- Write tests for core behavior before or alongside implementation.
- Make failing tests meaningful before making them pass.
- Do not hide important product behavior in untested UI-only logic.
- Prefer typed domain models and explicit states over loose strings and implicit flags.

## Collaboration Rules

- State assumptions before acting when they affect product or technical direction.
- Ask when uncertainty could create rework, safety risk, or product drift.
- Do not ask when a reasonable, low-risk MVP assumption can move the work forward.
- Ask when a product decision would encode a coaching judgment that should belong to the trainer.
- Keep documentation close to decisions.
- Update the relevant plan or backlog when the product direction changes.
- Separate product guide, MVP plan, backlog, and implementation details.

## Validation Rules

- Every MVP slice should have a product question, success criteria, and test script.
- Validate trainer-facing workflows with trainers as early as possible.
- Validate client-facing language and check-ins with clients or client-like users before deep implementation.
- Prefer observed behavior over stated preference.
- Capture learning after each validation round and adjust the backlog.

## Quality Bar

- The app should feel calm, respectful, and useful.
- Empty states, loading states, and error states are part of the feature.
- Accessibility and responsive layout are baseline requirements, not polish.
- Sensitive information should be private by default.
- Copy should avoid shame, guilt, exaggerated promises, or unsafe certainty.
