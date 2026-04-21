export type CheckInSignal = {
  clientId: string;
  workoutCompleted?: boolean;
  completedPlannedWorkoutsThisWeek?: number;
  checkInsThisWeek?: number;
  confidence?: number;
  pain?: {
    present: boolean;
    location?: string;
    severity?: number;
  };
};

export type SupportQueueItem = {
  clientId: string;
  type: "trainer_review" | "trainer_follow_up" | "celebration_prompt";
  priority: "high" | "medium" | "low";
  reason: string;
};

const priorityRank: Record<SupportQueueItem["priority"], number> = {
  high: 0,
  medium: 1,
  low: 2,
};

export function generateSupportQueueItems(
  checkIn: CheckInSignal,
): SupportQueueItem[] {
  const items: SupportQueueItem[] = [];

  if (checkIn.pain?.present) {
    const location = checkIn.pain.location?.trim();
    const painDescription = location ? `${location} pain` : "pain";

    items.push({
      clientId: checkIn.clientId,
      type: "trainer_review",
      priority: "high",
      reason: `Client reported ${painDescription}. Review before training and decide whether any adjustment or referral consideration is appropriate.`,
    });
  }

  if (checkIn.workoutCompleted === false) {
    items.push({
      clientId: checkIn.clientId,
      type: "trainer_follow_up",
      priority: "medium",
      reason:
        "Client missed a planned workout. Review context and decide whether a supportive follow-up is useful.",
    });
  }

  if (checkIn.confidence !== undefined && checkIn.confidence <= 3) {
    items.push({
      clientId: checkIn.clientId,
      type: "trainer_review",
      priority: "medium",
      reason:
        "Client reported low confidence. Review context and decide whether this is worth exploring in the next interaction.",
    });
  }

  const hasPositiveConsistencyStreak =
    (checkIn.completedPlannedWorkoutsThisWeek ?? 0) >= 3 ||
    (checkIn.checkInsThisWeek ?? 0) >= 4;

  if (hasPositiveConsistencyStreak) {
    items.push({
      clientId: checkIn.clientId,
      type: "celebration_prompt",
      priority: "low",
      reason:
        "Client has a positive consistency streak. Consider whether to highlight this non-scale win.",
    });
  }

  return items;
}

export function orderSupportQueueItems<T extends SupportQueueItem>(
  items: T[],
): T[] {
  return [...items].sort(
    (left, right) => priorityRank[left.priority] - priorityRank[right.priority],
  );
}
