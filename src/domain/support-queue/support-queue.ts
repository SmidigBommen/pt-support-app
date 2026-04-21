export type CheckInSignal = {
  clientId: string;
  workoutCompleted?: boolean;
  pain?: {
    present: boolean;
    location?: string;
    severity?: number;
  };
};

export type SupportQueueItem = {
  clientId: string;
  type: "trainer_review" | "trainer_follow_up";
  priority: "high" | "medium" | "low";
  reason: string;
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
      reason: `Client reported ${painDescription}. Review before training and consider referral if pain persists or symptoms are concerning.`,
    });
  }

  if (checkIn.workoutCompleted === false) {
    items.push({
      clientId: checkIn.clientId,
      type: "trainer_follow_up",
      priority: "medium",
      reason:
        "Client missed a planned workout. Check in supportively and help identify any barrier.",
    });
  }

  return items;
}
