import { describe, expect, it } from "vitest";
import {
  generateSupportQueueItems,
  orderSupportQueueItems,
} from "./support-queue";

describe("generateSupportQueueItems", () => {
  it("creates a high-priority trainer review item when a client reports knee pain without diagnostic language", () => {
    const items = generateSupportQueueItems({
      clientId: "client-1",
      pain: {
        present: true,
        location: "knee",
        severity: 7,
      },
    });

    expect(items).toContainEqual({
      clientId: "client-1",
      type: "trainer_review",
      priority: "high",
      reason:
        "Client reported knee pain. Review before training and decide whether any adjustment or referral consideration is appropriate.",
    });

    expect(items[0]?.reason.toLowerCase()).not.toContain("diagnose");
    expect(items[0]?.reason.toLowerCase()).not.toContain("because of");
    expect(items[0]?.reason.toLowerCase()).not.toContain("must");
    expect(items[0]?.reason.toLowerCase()).not.toContain("should");
  });

  it("creates a medium-priority follow-up item when a client misses a planned workout", () => {
    const items = generateSupportQueueItems({
      clientId: "client-2",
      workoutCompleted: false,
    });

    expect(items).toContainEqual({
      clientId: "client-2",
      type: "trainer_follow_up",
      priority: "medium",
      reason:
        "Client missed a planned workout. Review context and decide whether a supportive follow-up is useful.",
    });
  });

  it("creates a low-confidence review item without prescribing the trainer response", () => {
    const items = generateSupportQueueItems({
      clientId: "client-3",
      confidence: 2,
    });

    expect(items).toContainEqual({
      clientId: "client-3",
      type: "trainer_review",
      priority: "medium",
      reason:
        "Client reported low confidence. Review context and decide whether this is worth exploring in the next interaction.",
    });

    expect(items[0]?.reason.toLowerCase()).not.toContain("must");
    expect(items[0]?.reason.toLowerCase()).not.toContain("should");
  });

  it("creates an optional celebration prompt for a positive consistency streak", () => {
    const items = generateSupportQueueItems({
      clientId: "client-4",
      completedPlannedWorkoutsThisWeek: 3,
      checkInsThisWeek: 4,
    });

    expect(items).toContainEqual({
      clientId: "client-4",
      type: "celebration_prompt",
      priority: "low",
      reason:
        "Client has a positive consistency streak. Consider whether to highlight this non-scale win.",
    });

    expect(items[0]?.reason.toLowerCase()).not.toContain("must");
    expect(items[0]?.reason.toLowerCase()).not.toContain("should");
  });
});

describe("orderSupportQueueItems", () => {
  it("orders high-priority review prompts before medium follow-ups and low celebration prompts", () => {
    const ordered = orderSupportQueueItems([
      {
        clientId: "client-1",
        type: "celebration_prompt",
        priority: "low",
        reason: "Low priority",
      },
      {
        clientId: "client-2",
        type: "trainer_follow_up",
        priority: "medium",
        reason: "Medium priority",
      },
      {
        clientId: "client-3",
        type: "trainer_review",
        priority: "high",
        reason: "High priority",
      },
    ]);

    expect(ordered.map((item) => item.clientId)).toEqual([
      "client-3",
      "client-2",
      "client-1",
    ]);
  });
});
