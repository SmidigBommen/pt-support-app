export type SessionPrepInput = {
  clientName: string;
  currentGoal: string;
  latestReflection: string;
  readinessNote: string;
  nonScaleWin: string;
  trainerReviewQuestion: string;
  supportReasons: string[];
};

export type SessionPrepBrief = {
  title: string;
  context: string[];
  reviewPrompts: string[];
};

export function buildSessionPrepBrief(
  input: SessionPrepInput,
): SessionPrepBrief {
  return {
    title: `Session prep for ${input.clientName}`,
    context: [
      `Goal: ${input.currentGoal}`,
      `Latest check-in: ${input.latestReflection}`,
      `Readiness note: ${input.readinessNote}`,
      `Non-scale win: ${input.nonScaleWin}`,
    ],
    reviewPrompts: [...input.supportReasons, input.trainerReviewQuestion],
  };
}
