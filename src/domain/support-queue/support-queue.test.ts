import { describe, expect, it } from "vitest";
import { generateSupportQueueItems } from "./support-queue";

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
});
