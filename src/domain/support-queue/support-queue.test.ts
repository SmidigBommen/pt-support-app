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
        "Client reported knee pain. Review before training and consider referral if pain persists or symptoms are concerning.",
    });

    expect(items[0]?.reason.toLowerCase()).not.toContain("diagnose");
    expect(items[0]?.reason.toLowerCase()).not.toContain("because of");
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
        "Client missed a planned workout. Check in supportively and help identify any barrier.",
    });
  });
});
