# PT Trainer App

An early product exploration for a personal trainer and client app.

## Vision

Get great results through strengthening the relationship and support between personal trainers and their clients.

The first product direction focuses on helping personal trainers support clients between sessions, with an initial domain lens on trainers working with overweight clients, clients new to exercise, and clients returning to fitness after a long break.

## Product Thesis

Personal training results improve when the client feels seen, supported, and consistently guided between sessions.

The app should help trainers understand:

- Who needs attention today
- Why they need attention
- What context matters before the next session
- What progress should be celebrated beyond weight
- When safety, consent, or referral concerns need attention

## Current Stage

This repository is in early MVP discovery and planning.

We are not trying to build a complete trainer platform yet. We are organizing around small product slices that can be tested with personal trainers and clients.

## Key Documents

- [product-guide.md](product-guide.md): product vision, positioning, users, product principles, MVP scope, risks, and success metrics.
- [product-backlog.md](product-backlog.md): delivery plan, backlog, developer notes, domain entities, support queue rules, and testing focus.
- [mvp-plan.md](mvp-plan.md): testable MVP slices, validation loops, test scripts, and seed data requirements.
- [architecture.md](architecture.md): local Postgres, thin API, testing strategy, and initial application architecture.
- [deployment.md](deployment.md): test server notes and first deployment checklist.
- [AGENTS.md](AGENTS.md): collaboration, product, engineering, safety, and validation rules for work in this repository.
- [domain/personal-trainer-overweight-clients](domain/personal-trainer-overweight-clients): domain research on trainers working with overweight clients.

## MVP Slices

The first MVP is organized around five product slices:

1. Trainer support dashboard
2. Client check-in
3. Client profile
4. Session prep
5. Non-scale progress view

The first build should start with a clickable trainer-facing skeleton using realistic seed data:

- Trainer dashboard
- Support queue
- Client list
- Client profile
- Session prep view

## Working Principles

- Think MVP first.
- Use red/green TDD for production behavior.
- Use well-known, respected standards, libraries, and conventions.
- Ask when uncertainty could create rework, safety risk, or product drift.
- Prefer seed data before backend complexity.
- Keep API routes thin and domain logic tested outside the UI.
- Validate with trainers and clients early.
- Respect trainer expertise by presenting context and review prompts rather than automatic coaching decisions.
- Keep suggestions optional so trainer agency is never reduced.
- Keep weight optional and visually secondary.
- Avoid shame-based language and unsafe certainty.
- Keep nutrition and medical topics within appropriate scope.

## Local Postgres

This project uses local Postgres for development.

Start Postgres with Podman:

```sh
podman compose up -d postgres
```

Stop Postgres:

```sh
podman compose down
```

Copy `.env.example` to `.env` when the application scaffold is added.

## Product Safety

This app is not a medical product and should not provide diagnosis, treatment advice, or medical nutrition therapy.

The product should support trainers by making safety, consent, limitations, and referral concerns visible, while keeping the trainer-client relationship human and respectful.
