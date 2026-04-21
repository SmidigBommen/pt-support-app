import { describe, expect, it } from "vitest";
import { buildClientProfileSummary } from "./client-profile";

describe("buildClientProfileSummary", () => {
  it("summarizes profile context for trainer review without deciding the action", () => {
    const summary = buildClientProfileSummary({
      clientName: "Thomas",
      currentGoal: "Build lower-body strength with joint-friendly movements.",
      readinessNote: "Avoid high-impact work and review step height before session.",
      trainerNote:
        "Thomas prefers clear options and wants to understand why movements are changed.",
      timelineEvents: [
        "Reported knee discomfort after step-ups.",
        "Maintained two weekly sessions for three weeks.",
      ],
      trainerReviewQuestion:
        "What would you review or adjust before training Thomas today?",
    });

    expect(summary).toEqual({
      title: "Thomas profile context",
      currentGoal: "Build lower-body strength with joint-friendly movements.",
      readinessNote: "Avoid high-impact work and review step height before session.",
      trainerNote:
        "Thomas prefers clear options and wants to understand why movements are changed.",
      timelineEvents: [
        "Reported knee discomfort after step-ups.",
        "Maintained two weekly sessions for three weeks.",
      ],
      reviewQuestion:
        "What would you review or adjust before training Thomas today?",
    });

    expect(summary.reviewQuestion.toLowerCase()).not.toContain("must");
    expect(summary.reviewQuestion.toLowerCase()).not.toContain("should");
  });
});
