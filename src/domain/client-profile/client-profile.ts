export type ClientProfileSummaryInput = {
  clientName: string;
  currentGoal: string;
  readinessNote: string;
  trainerNote: string;
  timelineEvents: string[];
  trainerReviewQuestion: string;
};

export type ClientProfileSummary = {
  title: string;
  currentGoal: string;
  readinessNote: string;
  trainerNote: string;
  timelineEvents: string[];
  reviewQuestion: string;
};

export function buildClientProfileSummary(
  input: ClientProfileSummaryInput,
): ClientProfileSummary {
  return {
    title: `${input.clientName} profile context`,
    currentGoal: input.currentGoal,
    readinessNote: input.readinessNote,
    trainerNote: input.trainerNote,
    timelineEvents: input.timelineEvents,
    reviewQuestion: input.trainerReviewQuestion,
  };
}
