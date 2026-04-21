import { describe, expect, it } from "vitest";
import { buildSessionPrepBrief } from "./session-prep";

describe("buildSessionPrepBrief", () => {
  it("summarizes a client scenario without making the coaching decision", () => {
    const brief = buildSessionPrepBrief({
      clientName: "Thomas",
      currentGoal: "Build lower-body strength with joint-friendly movements.",
      latestReflection: "Knee felt uncomfortable after step-ups yesterday.",
      readinessNote: "Avoid high-impact work and review step height before session.",
      nonScaleWin: "Maintained two weekly sessions for three weeks.",
      trainerReviewQuestion:
        "What would you review or adjust before training Thomas today?",
      supportReasons: [
        "Client reported knee pain. Review before training and decide whether any adjustment or referral consideration is appropriate.",
      ],
    });

    expect(brief).toEqual({
      title: "Session prep for Thomas",
      context: [
        "Goal: Build lower-body strength with joint-friendly movements.",
        "Latest check-in: Knee felt uncomfortable after step-ups yesterday.",
        "Readiness note: Avoid high-impact work and review step height before session.",
        "Non-scale win: Maintained two weekly sessions for three weeks.",
      ],
      reviewPrompts: [
        "Client reported knee pain. Review before training and decide whether any adjustment or referral consideration is appropriate.",
        "What would you review or adjust before training Thomas today?",
      ],
    });

    expect(brief.reviewPrompts.join(" ").toLowerCase()).not.toContain("must");
    expect(brief.reviewPrompts.join(" ").toLowerCase()).not.toContain("should");
  });
});
