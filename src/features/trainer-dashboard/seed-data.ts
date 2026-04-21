import { generateSupportQueueItems } from "@/domain/support-queue/support-queue";
import { buildSessionPrepBrief } from "@/domain/session-prep/session-prep";

export type TrainerClientSeed = {
  id: string;
  name: string;
  status: "active" | "needs_review";
  currentGoal: string;
  scenario: TrainerScenario;
  latestCheckIn: {
    mood: "positive" | "okay" | "rough";
    energy: number;
    confidence: number;
    workoutCompleted?: boolean;
    pain?: {
      present: boolean;
      location?: string;
      severity?: number;
    };
    reflection: string;
  };
  weeklySignals?: {
    completedPlannedWorkouts: number;
    checkIns: number;
  };
  readinessNote: string;
  nonScaleWin: string;
};

export type TrainerScenario = {
  title: string;
  productQuestion: string;
  trainerReviewQuestion: string;
  validationPrompt: string;
};

export const trainerClients: TrainerClientSeed[] = [
  {
    id: "client-gym-anxiety",
    name: "Maya",
    status: "active",
    currentGoal: "Build confidence with two consistent sessions per week.",
    scenario: {
      title: "Gym anxiety and missed solo session",
      productQuestion:
        "Can the trainer see anxiety and missed-session context without the app deciding the response?",
      trainerReviewQuestion:
        "What context would you review before deciding how to follow up with Maya?",
      validationPrompt:
        "Ask the trainer whether the wording feels supportive and agency-preserving.",
    },
    latestCheckIn: {
      mood: "rough",
      energy: 4,
      confidence: 3,
      workoutCompleted: false,
      reflection:
        "Felt anxious about the gym floor and skipped the planned solo walk.",
    },
    readinessNote: "Prefers quieter training areas and clear session previews.",
    nonScaleWin: "Completed her first full warm-up without stopping last week.",
  },
  {
    id: "client-returning",
    name: "Jonas",
    status: "active",
    currentGoal: "Rebuild strength without comparing to previous performance.",
    scenario: {
      title: "Returning client frustrated by modifications",
      productQuestion:
        "Can the trainer notice frustration and frame progress without assuming the right coaching strategy?",
      trainerReviewQuestion:
        "What would you want to understand before discussing modifications with Jonas?",
      validationPrompt:
        "Ask whether the scenario helps the trainer prepare a more respectful conversation.",
    },
    latestCheckIn: {
      mood: "okay",
      energy: 6,
      confidence: 5,
      workoutCompleted: true,
      reflection:
        "Finished the session but felt frustrated by modified push-ups.",
    },
    readinessNote: "Responds well when modifications are framed as progressions.",
    nonScaleWin: "Added 5 minutes to low-impact cardio duration.",
  },
  {
    id: "client-slow-weight-change",
    name: "Aisha",
    status: "active",
    currentGoal: "Improve energy and consistency while keeping weight secondary.",
    scenario: {
      title: "Slow weight change with functional progress",
      productQuestion:
        "Can the trainer quickly find non-scale progress when weight is not moving much?",
      trainerReviewQuestion:
        "What progress would you choose to highlight with Aisha?",
      validationPrompt:
        "Ask whether the app makes non-scale progress visible enough for a review conversation.",
    },
    latestCheckIn: {
      mood: "okay",
      energy: 7,
      confidence: 6,
      workoutCompleted: true,
      reflection:
        "Scale has not moved much, but stairs feel easier at work.",
    },
    readinessNote: "Wants progress conversations to include functional wins.",
    nonScaleWin: "Reported climbing office stairs with less breathlessness.",
  },
  {
    id: "client-knee-discomfort",
    name: "Thomas",
    status: "needs_review",
    currentGoal: "Build lower-body strength with joint-friendly movements.",
    scenario: {
      title: "Knee discomfort before lower-body training",
      productQuestion:
        "Can the trainer quickly see the pain signal, recent context, and decide what to do next?",
      trainerReviewQuestion:
        "What would you review or adjust before training Thomas today?",
      validationPrompt:
        "Ask the trainer whether this context helps without making the app feel like it is deciding for them.",
    },
    latestCheckIn: {
      mood: "rough",
      energy: 5,
      confidence: 4,
      workoutCompleted: true,
      pain: {
        present: true,
        location: "knee",
        severity: 7,
      },
      reflection: "Knee felt uncomfortable after step-ups yesterday.",
    },
    readinessNote: "Avoid high-impact work and review step height before session.",
    nonScaleWin: "Maintained two weekly sessions for three weeks.",
  },
  {
    id: "client-low-energy",
    name: "Elin",
    status: "active",
    currentGoal: "Keep movement consistent during a stressful work period.",
    scenario: {
      title: "Low energy and high work stress",
      productQuestion:
        "Can the trainer see low-energy context and decide whether the plan needs a lighter touch?",
      trainerReviewQuestion:
        "What would you want to know before deciding how to support Elin?",
      validationPrompt:
        "Ask whether this feels like useful context or too much interpretation.",
    },
    latestCheckIn: {
      mood: "rough",
      energy: 2,
      confidence: 4,
      workoutCompleted: false,
      reflection: "Slept poorly and work stress is high this week.",
    },
    readinessNote: "Needs lower-friction options when stress is high.",
    nonScaleWin: "Still completed two short walks this week.",
  },
  {
    id: "client-positive-streak",
    name: "Nora",
    status: "active",
    currentGoal: "Make strength training feel routine and sustainable.",
    scenario: {
      title: "Positive consistency streak",
      productQuestion:
        "Can the trainer notice and use a non-scale win when it is worth highlighting?",
      trainerReviewQuestion:
        "Would you highlight Nora's consistency, and if so, how would you frame it?",
      validationPrompt:
        "Ask whether celebration prompts feel useful or noisy.",
    },
    latestCheckIn: {
      mood: "positive",
      energy: 8,
      confidence: 8,
      workoutCompleted: true,
      reflection: "Felt strong and less nervous using the cable machine.",
    },
    weeklySignals: {
      completedPlannedWorkouts: 3,
      checkIns: 4,
    },
    readinessNote: "Celebrate consistency and growing comfort with equipment.",
    nonScaleWin: "Four check-ins and three planned workouts completed this week.",
  },
];

export const trainerDashboardSeed = trainerClients.map((client) => ({
  client,
  supportItems: generateSupportQueueItems({
    clientId: client.id,
    workoutCompleted: client.latestCheckIn.workoutCompleted,
    completedPlannedWorkoutsThisWeek:
      client.weeklySignals?.completedPlannedWorkouts,
    checkInsThisWeek: client.weeklySignals?.checkIns,
    confidence: client.latestCheckIn.confidence,
    pain: client.latestCheckIn.pain,
  }),
})).map(({ client, supportItems }) => ({
  client,
  supportItems,
  sessionPrep: buildSessionPrepBrief({
    clientName: client.name,
    currentGoal: client.currentGoal,
    latestReflection: client.latestCheckIn.reflection,
    readinessNote: client.readinessNote,
    nonScaleWin: client.nonScaleWin,
    trainerReviewQuestion: client.scenario.trainerReviewQuestion,
    supportReasons: supportItems.map((item) => item.reason),
  }),
}));

export function getTrainerScenario(clientId: string): TrainerScenario | undefined {
  return trainerClients.find((client) => client.id === clientId)?.scenario;
}
