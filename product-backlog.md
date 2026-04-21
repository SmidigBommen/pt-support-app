# Product Backlog

This document translates the product guide into delivery phases, developer-near backlog items, and early implementation notes.

For the product vision, positioning, users, and MVP boundaries, see [product-guide.md](product-guide.md).

Domain research lives in [domain/personal-trainer-overweight-clients](domain/personal-trainer-overweight-clients). The first build should use that research as a specialization lens, especially around safety, sensitivity, non-scale progress, and behavior change.

## Delivery Plan

### Phase 1: Product Foundation

Goal: make the product direction concrete enough to build.

Deliverables:

- Product guide
- User roles and key workflows
- Initial domain model
- MVP feature boundaries
- Prototype information architecture
- Backlog for first build
- Domain assumptions for trainers working with overweight clients
- Safety and scope-of-practice boundaries

### Phase 2: Clickable Product Skeleton

Goal: create a usable prototype that shows the core experience without needing full backend complexity.

Deliverables:

- Trainer dashboard
- Client list
- Client profile
- Check-in submission flow
- Support queue mock logic
- Session prep screen
- Seed data for realistic trainer-client scenarios
- Client readiness profile
- Non-scale progress view

### Phase 3: Functional MVP

Goal: make the relationship workflow functional for real test users.

Deliverables:

- Authentication
- Trainer-client data model
- Persisted check-ins
- Persisted notes
- Support queue rules
- Basic messages
- Client-facing home and check-in
- Trainer-facing client detail and session prep
- Intake and readiness records
- Safety and referral flags
- Non-scale progress records

### Phase 4: Pilot Readiness

Goal: prepare the app for a small pilot with real trainers and clients.

Deliverables:

- Onboarding flow
- Client invitation flow
- Notification basics
- Privacy and consent copy
- Error states and empty states
- Basic usage analytics
- Feedback capture
- Consent handling for measurements and progress photos
- Referral tracking for out-of-scope concerns

## Backlog

### Product Discovery

- Define target trainer segment for the first pilot.
- Interview 5 to 10 personal trainers about client follow-up habits.
- Interview 5 to 10 clients about support between sessions.
- Identify the strongest early use case: accountability, session prep, retention, or motivation.
- Define success metrics for the pilot.
- Write assumptions and risks.
- Validate the overweight-client segment with trainers who have direct experience.
- Validate whether trainers want population-specific safety prompts or find them too intrusive.
- Interview clients about what makes check-ins feel supportive versus judgmental.
- Test language for weight, progress, limitations, and modifications.

### Information Architecture

- Define trainer dashboard structure.
- Define client profile sections.
- Define client home structure.
- Define check-in fields.
- Define timeline event types.
- Define support queue item types.
- Define session prep summary format.
- Define readiness profile fields.
- Define consent states for weight, measurements, and photos.
- Define non-scale progress categories.
- Define referral and medical-clearance states.

### Domain Model

- Model trainer.
- Model client.
- Model trainer-client relationship.
- Model goal.
- Model check-in.
- Model timeline event.
- Model private trainer note.
- Model message.
- Model support queue item.
- Model session prep summary.
- Model readiness profile.
- Model health flag.
- Model consent record.
- Model progress metric.
- Model referral.

### Trainer Experience

- Build trainer dashboard.
- Build prioritized support queue.
- Build client list.
- Build client profile.
- Build relationship timeline.
- Build private notes.
- Build goal view.
- Build session prep view.
- Add ability to mark support items as handled.
- Build readiness profile view.
- Build non-scale progress view.
- Build safety and referral flag display.
- Build consent-aware display for sensitive measurements.

### Client Experience

- Build client home screen.
- Build check-in flow.
- Build current goal display.
- Build recent progress display.
- Build trainer message display.
- Build simple reflection prompt.
- Build supportive progress summary.
- Build client-facing explanations for current focus and modifications.
- Build check-in language that normalizes honest answers.

### Check-Ins

- Create check-in template.
- Let client submit check-in.
- Store check-in history.
- Show check-in trends on client profile.
- Flag low energy.
- Flag missed workout.
- Flag pain or discomfort.
- Flag low confidence.
- Flag positive streaks.
- Capture emotional state and confidence without shame-based wording.
- Capture barriers since last session.
- Capture pain location and severity separately from normal soreness.
- Let client choose not to answer sensitive prompts.

### Support Queue

- Create initial rule set.
- Generate support items from check-ins.
- Prioritize support items.
- Show reason for each support item.
- Let trainer resolve or snooze support item.
- Create timeline event when support is handled.
- Create safety-related support items from pain, dizziness, unusual breathlessness, or health changes.
- Create encouragement items for non-scale victories.
- Create referral consideration items when concerns appear out of trainer scope.
- Create expectation-management items when progress frustration appears.

### Session Prep

- Create session prep summary.
- Include recent check-ins.
- Include current goal.
- Include last notes.
- Include flagged risks.
- Include suggested conversation points.
- Include known limitations, preferences, and comfort concerns.
- Include consent state for measurements or photos.
- Include exercises or movements to avoid.
- Include non-scale wins since the last session.

### Messaging

- Build basic trainer-to-client message.
- Build client-to-trainer reply.
- Show latest message on client home.
- Link message events to timeline.
- Keep messaging lightweight for MVP.

### Pilot Readiness

- Build trainer onboarding.
- Build client invitation.
- Add privacy and consent language.
- Add empty states.
- Add loading states.
- Add basic error handling.
- Add usage tracking for check-ins and trainer follow-ups.
- Add feedback form.
- Add consent copy for measurements and progress photos.
- Add scope-of-practice copy for nutrition and medical concerns.
- Add medical-clearance reminder states.
- Add referral tracking states.

### Technical Foundation

- Choose application stack.
- Set up project structure.
- Set up linting and formatting.
- Set up local development environment.
- Set up database.
- Set up authentication.
- Set up seed data.
- Set up deployment target.
- Add basic automated tests for core flows.

### Client Intake and Readiness

- Capture basic contact and emergency contact details.
- Capture health history, injuries, medications, and known limitations.
- Capture training fears, preferences, and motivation style.
- Capture exercise history and previous attempts.
- Capture goals without assuming weight loss.
- Add PAR-Q+ readiness screening or a placeholder for it.
- Flag responses that require trainer review.
- Flag responses that may require medical clearance.
- Store consent for weight, measurements, progress photos, and sensitive notes.

### Non-Scale Progress

- Track strength improvements.
- Track walking or cardio duration.
- Track RPE trends.
- Track consistency streaks.
- Track energy, mood, sleep, stress, and confidence.
- Track functional milestones.
- Track client-reported wins.
- Keep weight optional and visually secondary.

### Safety and Scope

- Show pain and red-flag symptoms prominently.
- Distinguish normal soreness from pain.
- Remind trainers to refer out for persistent pain, medical symptoms, disordered eating concerns, or medical nutrition needs.
- Avoid diagnostic language in product copy.
- Avoid prescriptive nutrition plans in the MVP.
- Make referral records visible in the client timeline.

## Developer Notes

### Suggested First Build Slice

Start with a clickable product skeleton using seed data. This reduces backend overhead while testing the product's core claim: trainers need a better way to know who needs support and why.

Build order:

1. Trainer dashboard with support queue.
2. Client profile with pulse, goals, timeline, and notes.
3. Client check-in flow.
4. Session prep view.
5. Client home screen.

### Initial Domain Entities

#### Trainer

- id
- name
- email
- role

#### Client

- id
- trainerId
- name
- email
- status
- joinedAt

#### Goal

- id
- clientId
- title
- description
- status
- targetDate

#### CheckIn

- id
- clientId
- createdAt
- mood
- energy
- sleep
- stress
- soreness
- pain
- painLocation
- painSeverity
- workoutCompleted
- confidence
- anxiety
- barriers
- reflection

#### ReadinessProfile

- id
- clientId
- healthHistory
- injuries
- medications
- knownLimitations
- comfortPreferences
- exerciseHistory
- motivationPreference
- medicalClearanceStatus
- reviewedAt

#### ConsentRecord

- id
- clientId
- type
- granted
- grantedAt
- revokedAt

#### ProgressMetric

- id
- clientId
- type
- value
- unit
- recordedAt
- visibility

#### Referral

- id
- clientId
- providerType
- reason
- status
- createdAt
- resolvedAt

#### TimelineEvent

- id
- clientId
- type
- title
- body
- createdAt
- sourceId

#### TrainerNote

- id
- clientId
- trainerId
- body
- createdAt

#### Message

- id
- trainerId
- clientId
- senderType
- body
- createdAt
- readAt

#### SupportQueueItem

- id
- clientId
- type
- priority
- reason
- status
- createdAt
- resolvedAt

#### SessionPrepSummary

- id
- clientId
- generatedAt
- recentSignals
- risks
- goalContext
- suggestedConversationPoints

### Initial Support Queue Rules

- Missed workout: create an item when `workoutCompleted` is false.
- Low energy: create an item when energy is low for multiple recent check-ins.
- Pain signal: create a high-priority item when pain is reported.
- Low confidence: create an item when confidence drops.
- Positive streak: create a celebration item after repeated workout completion or check-in consistency.
- Possible referral: create an item when reported concerns may be outside trainer scope.
- Progress frustration: create an item when reflection or confidence suggests discouragement despite objective progress.
- Medical clearance: create an item when readiness profile indicates clearance is missing or pending.

### Testing Focus

- Check-in submission creates expected records.
- Support queue rules create expected items.
- Resolving a support item updates status and creates a timeline event.
- Client profile shows latest check-in, notes, and timeline events.
- Session prep summary includes recent check-ins, current goal, notes, and flagged risks.
- Sensitive measurements respect consent state.
- Red-flag check-in answers generate visible trainer review items.
- Non-scale progress appears before weight-focused metrics.
- Referral items avoid diagnostic language.
