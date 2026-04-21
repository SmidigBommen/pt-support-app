import { generateSupportQueueItems } from "@/domain/support-queue/support-queue";

export type TrainerClientSeed = {
  id: string;
  name: string;
  status: "active" | "needs_review";
  currentGoal: string;
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
  readinessNote: string;
  nonScaleWin: string;
};

export const trainerClients: TrainerClientSeed[] = [
  {
    id: "client-gym-anxiety",
    name: "Maya",
    status: "active",
    currentGoal: "Build confidence with two consistent sessions per week.",
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
    latestCheckIn: {
      mood: "positive",
      energy: 8,
      confidence: 8,
      workoutCompleted: true,
      reflection: "Felt strong and less nervous using the cable machine.",
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
    confidence: client.latestCheckIn.confidence,
    pain: client.latestCheckIn.pain,
  }),
}));
