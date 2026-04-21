export type CheckInSignal = {
  clientId: string;
  pain?: {
    present: boolean;
    location?: string;
    severity?: number;
  };
};

export type SupportQueueItem = {
  clientId: string;
  type: "trainer_review";
  priority: "high" | "medium" | "low";
  reason: string;
};

export function generateSupportQueueItems(
  checkIn: CheckInSignal,
): SupportQueueItem[] {
  if (!checkIn.pain?.present) {
    return [];
  }

  const location = checkIn.pain.location?.trim();
  const painDescription = location ? `${location} pain` : "pain";

  return [
    {
      clientId: checkIn.clientId,
      type: "trainer_review",
      priority: "high",
      reason: `Client reported ${painDescription}. Review before training and consider referral if pain persists or symptoms are concerning.`,
    },
  ];
}
