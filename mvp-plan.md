# MVP Plan

This plan organizes the first build around testable product slices. Each slice should produce something a personal trainer or client can react to directly.

The goal is not to build a complete platform first. The goal is to learn whether relationship-driven support, safety awareness, and progress beyond the scale create enough value to justify a deeper product.

## MVP Strategy

Build thin, realistic slices in this order:

1. Trainer support dashboard
2. Client check-in
3. Client profile
4. Session prep
5. Non-scale progress view

Start with a clickable product skeleton using seed data. Add persistence, authentication, invitations, and production concerns only after the core workflows test well with trainers and clients.

## Validation Loops

### Loop 1: Trainer-Facing Skeleton

Goal: test whether trainers understand and value the relationship-support workflow.

Build:

- Trainer dashboard
- Support queue
- Client list
- Client profile
- Session prep view
- Realistic seed data

Test with:

- 2 to 3 personal trainers who work with overweight clients or clients new to exercise.

Success signals:

- Trainers can quickly identify who needs attention.
- Trainers understand why each support item exists.
- Trainers can explain what they would do next for a client.
- Trainers say the profile or session prep would improve their coaching.

### Loop 2: Client Check-In Prototype

Goal: test whether clients will share useful signals without feeling judged.

Build:

- Client home
- Check-in flow
- Submitted state
- Trainer view of submitted check-in

Test with:

- 3 to 5 clients or client-like users.

Success signals:

- Clients complete the check-in without confusion.
- Clients say the tone feels respectful.
- Clients would answer honestly.
- Trainers say the submitted check-in is actionable.

### Loop 3: Functional Pilot MVP

Goal: run a small real-world pilot with trainer-client pairs.

Build:

- Basic authentication or invite links
- Persisted clients
- Persisted check-ins
- Persisted notes
- Support queue rules
- Basic messaging or trainer follow-up notes
- Readiness and consent basics

Test with:

- 1 to 2 personal trainers
- 5 to 10 clients

Success signals:

- Clients complete check-ins at least 3 times per week.
- Trainers use the support queue at least 3 times per week.
- Trainers report better session preparedness.
- Clients report feeling more supported between sessions.
- Trainers identify at least one risk or support need earlier than they otherwise would have.

## Slice 1: Trainer Support Dashboard

### Product Question

Can a personal trainer quickly see who needs attention and why?

### Primary User

Personal trainer.

### User Story

As a trainer, I want a prioritized view of clients who need support so I can focus my attention where it matters most.

### MVP Scope

- Client list
- Support queue
- Priority labels
- Support reason
- Client snapshot
- Resolve action
- Snooze action
- Seeded realistic client states

### Not In This Slice

- Authentication
- Real notifications
- Full messaging
- Scheduling
- Payments
- Workout builder

### Data Needed

- Clients
- Check-ins
- Goals
- Support queue items
- Timeline events
- Readiness flags

### Test Script

Ask the trainer to review the dashboard and talk through:

- Which client would you contact first?
- Why that client?
- What would you say or do?
- Is anything missing from the support reason?
- Does this feel like useful support or extra admin?

### Success Criteria

- Trainer identifies a priority client in under 30 seconds.
- Trainer understands the reason for each support item.
- Trainer says at least one support item is useful.
- Trainer can describe a clear next action for a client.

## Slice 2: Client Check-In

### Product Question

Will clients share useful emotional, physical, and behavioral signals without feeling judged?

### Primary User

Client.

### User Story

As a client, I want to quickly tell my trainer how I am doing so they can support me between sessions.

### MVP Scope

- Mood
- Energy
- Sleep
- Stress
- Soreness
- Pain or discomfort
- Pain location, if relevant
- Workout completion
- Confidence
- Barrier or reflection prompt
- Optional skip for sensitive prompts
- Submitted state

### Not In This Slice

- Nutrition logging
- Calorie tracking
- Wearable integrations
- Medical advice
- Full chat

### Data Needed

- Client
- Check-in template
- Check-in response
- Derived support queue items

### Test Script

Ask the client to complete the check-in, then ask:

- What felt easy?
- What felt uncomfortable?
- Would you answer this honestly?
- Did any wording feel judgmental?
- What would make this feel more supportive?

Ask the trainer to review the submitted check-in, then ask:

- What did you learn?
- Would this change how you support the client?
- What would you do next?

### Success Criteria

- Client completes the check-in in under 90 seconds.
- Client understands every prompt.
- Client says the tone feels respectful.
- Client says they would answer honestly.
- Trainer says the result is actionable.

## Slice 3: Client Profile

### Product Question

Does the client profile help the trainer remember context and provide more personal support?

### Primary User

Personal trainer.

### User Story

As a trainer, I want one place to understand a client's recent signals, goals, notes, and important context so I can coach them more personally.

### MVP Scope

- Client summary
- Current goal
- Latest pulse
- Recent check-ins
- Relationship timeline
- Trainer private notes
- Readiness flags
- Consent state for sensitive measurements
- Safety or referral flags
- Non-scale wins

### Not In This Slice

- Full medical record
- Complex assessment engine
- Provider collaboration
- Long-form document storage

### Data Needed

- Client
- Goal
- Check-ins
- Timeline events
- Trainer notes
- Readiness profile
- Consent records
- Progress metrics

### Test Script

Ask the trainer to open a client profile before a fictional session and talk through:

- What do you know about this client now?
- What would you ask them today?
- What would you avoid or modify?
- What progress would you highlight?
- What information is missing?

### Success Criteria

- Trainer can summarize the client's state in under 60 seconds.
- Trainer identifies at least one personal follow-up.
- Trainer identifies any relevant safety or comfort concern.
- Trainer says the profile would reduce memory burden.

## Slice 4: Session Prep

### Product Question

Does a short session brief improve the trainer's preparedness before seeing a client?

### Primary User

Personal trainer.

### User Story

As a trainer, I want a short pre-session brief so I can show up prepared, personal, and aware of recent changes.

### MVP Scope

- Recent check-in summary
- Current goal
- Last session note
- Recent emotional state
- Pain or soreness signals
- Known limitations and preferences
- Safety flags
- Suggested conversation points
- Non-scale wins since last session

### Not In This Slice

- Automated workout generation
- Medical recommendations
- AI-only coaching decisions
- Calendar integration

### Data Needed

- Client
- Goal
- Check-ins
- Timeline events
- Trainer notes
- Readiness profile
- Support queue items
- Progress metrics

### Test Script

Ask the trainer to read the session prep and answer:

- What would you ask first?
- What would you adjust today?
- What would you celebrate?
- What, if anything, feels too obvious or generic?
- Would you look at this before real sessions?

### Success Criteria

- Trainer understands the brief in under 60 seconds.
- Trainer identifies at least one useful conversation point.
- Trainer identifies at least one possible session adjustment.
- Trainer says the brief would be worth checking before sessions.

## Slice 5: Non-Scale Progress View

### Product Question

Does showing progress beyond weight help clients and trainers see momentum more clearly?

### Primary Users

Client and personal trainer.

### User Story

As a client, I want to see progress that reflects how my life and confidence are improving, not only what the scale says.

As a trainer, I want to highlight meaningful progress so the client stays motivated when body weight changes slowly.

### MVP Scope

- Strength improvements
- Workout consistency
- Check-in consistency
- Energy trend
- Confidence trend
- Sleep or stress trend
- Functional milestones
- Client-reported wins
- Weight shown only if enabled and consented

### Not In This Slice

- Advanced analytics
- Body composition integrations
- Wearable integrations
- Public sharing
- Before-and-after photo automation

### Data Needed

- Progress metrics
- Check-ins
- Goals
- Timeline events
- Consent records

### Test Script

Ask the client to review the progress view and answer:

- What progress do you notice?
- Does this feel motivating?
- Does anything feel uncomfortable or too personal?
- Is weight handled in a way that feels okay?
- What would you want your trainer to notice?

Ask the trainer:

- What would you highlight in a progress conversation?
- Does this help you avoid making weight the whole story?
- What is missing for a 4-week review?

### Success Criteria

- Client identifies at least one meaningful win.
- Client says the view feels respectful.
- Trainer identifies progress they would discuss.
- Weight does not dominate the experience.

## First Build Recommendation

Build Slice 1, Slice 3, and Slice 4 together as the first clickable trainer-facing skeleton. These slices share the same seed data and can be tested in one trainer interview.

Then build Slice 2 as a client-facing check-in prototype.

Slice 5 should follow once there is enough check-in and progress data to make the progress view feel real.

## Seed Data Requirements

Create realistic sample clients:

- A new client with gym anxiety, low confidence, and no recent exercise history.
- A returning-to-fitness client who is frustrated by current limitations.
- A client with strong consistency but slow weight change.
- A client reporting knee discomfort.
- A client with low energy and high stress.
- A client with a positive streak worth celebrating.

Each sample client should include:

- Current goal
- Recent check-ins
- One or more timeline events
- One private trainer note
- Support queue state
- Readiness or comfort consideration
- At least one non-scale progress signal

## Working Rules for MVP Decisions

- Prefer learning over completeness.
- Prefer seed data before backend complexity.
- Prefer realistic language over polished marketing copy.
- Prefer trainer and client interviews over internal debate.
- Keep weight optional and visually secondary.
- Keep nutrition general and habit-based.
- Do not generate medical or diagnostic advice.
- Treat sensitive data as consented, private, and easy to hide.
