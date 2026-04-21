# Architecture

This document captures the initial technical direction for the MVP.

## Architecture Decision

Use a local Postgres database with a thin API layer.

This gives us:

- Clear ownership of product behavior.
- A straightforward red/green TDD workflow.
- A local-first development setup.
- A clean path to hosted Postgres later.
- Less dependency on backend-as-a-service behavior during early product discovery.

## Recommended Stack

- App framework: Next.js with React and TypeScript.
- API layer: thin HTTP API using Next.js route handlers.
- Database: local Postgres for development.
- ORM/query layer: Prisma.
- Validation: Zod.
- Unit and domain tests: Vitest.
- End-to-end tests: Playwright.
- Styling: Tailwind CSS.
- UI primitives: Radix UI or shadcn/ui.

## System Shape

```txt
Browser
  |
  v
Next.js App
  |
  |-- Trainer UI
  |-- Client UI
  |
  |-- Thin API routes
        |
        |-- Request validation
        |-- Auth/role checks
        |-- Calls into application services
              |
              |-- Domain logic
              |-- Repository/database access
                    |
                    v
                Postgres
```

## Thin API Principle

API routes should stay thin.

They are responsible for:

- Parsing request input.
- Validating request shape.
- Checking authentication and authorization.
- Calling application services.
- Returning HTTP responses.

They should not contain:

- Support queue rules.
- Session prep logic.
- Consent visibility rules.
- Progress interpretation.
- Complex database orchestration.

Those behaviors belong in tested application and domain modules.

## Domain Logic

Core product behavior should live outside UI components and API handlers.

Important domain modules:

- `check-ins`: check-in shape, validation, and interpretation.
- `support-queue`: rules that generate trainer attention items.
- `consent`: visibility and access rules for sensitive data.
- `progress`: non-scale progress interpretation.
- `session-prep`: brief generation from recent client context.
- `readiness`: intake, limitations, medical-clearance state, and referral flags.

These modules should be testable without running the web app.

## Initial Project Structure

```txt
src/
  app/
    trainer/
    client/
    api/
  components/
  features/
    check-ins/
    clients/
    progress/
    readiness/
    session-prep/
    support-queue/
  server/
    services/
    repositories/
  domain/
    check-ins/
    consent/
    progress/
    readiness/
    session-prep/
    support-queue/
  lib/
    db/
    validation/
  test/

prisma/
  schema.prisma
  migrations/
  seed.ts
```

## Initial Data Model

Start with these tables:

- `users`
- `trainers`
- `clients`
- `trainer_clients`
- `goals`
- `check_ins`
- `support_queue_items`
- `timeline_events`
- `trainer_notes`
- `readiness_profiles`
- `consent_records`
- `progress_metrics`
- `referrals`

Defer these until after the first validation loops:

- Payments
- Scheduling
- Full workout builder
- Nutrition logging
- Wearable integrations
- Full chat
- Progress photos and file storage

## Testing Strategy

Use red/green TDD for production behavior.

### Domain Tests

Use Vitest for fast tests around product rules:

- Check-in answers generate expected support queue items.
- Pain and red-flag symptoms create visible trainer review items.
- Consent state controls sensitive metric visibility.
- Session prep includes recent signals, current goal, notes, and risks.
- Non-scale progress is prioritized over weight-focused metrics.
- Referral items avoid diagnostic language.

### API Tests

Test API boundaries for:

- Request validation.
- Authorization.
- Error responses.
- Service integration.
- Database writes for core flows.

### End-to-End Tests

Use Playwright for core user flows:

- Trainer opens support dashboard.
- Client submits check-in.
- Trainer reviews check-in on client profile.
- Trainer opens session prep.
- Trainer resolves a support queue item.

## Local Development

Use Podman Compose for local Postgres.

Local services:

- Postgres database.
- Optional database admin UI later, such as pgAdmin or Adminer.

The app should use environment variables for database connection details.

Example:

```txt
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/pt_support_app
```

Start Postgres:

```sh
podman compose up -d postgres
```

Stop Postgres:

```sh
podman compose down
```

## MVP Implementation Order

1. Scaffold Next.js, TypeScript, Tailwind, Vitest, Playwright, Prisma.
2. Add local Postgres setup.
3. Define initial Prisma schema.
4. Add seed data matching `mvp-plan.md`.
5. Write domain tests for support queue rules.
6. Implement support queue domain logic.
7. Build trainer-facing skeleton.
8. Add client check-in flow.
9. Add persistence-backed API routes.

## Architectural Guardrails

- Keep API routes thin.
- Keep domain logic framework-independent.
- Keep UI components focused on rendering and interaction.
- Prefer explicit states over boolean piles.
- Keep sensitive data private by default.
- Do not add auth complexity until the prototype needs trainer/client separation.
- Do not add external services until a validation loop proves the need.
- Keep every production rule covered by a test.
