import { describe, expect, it } from "vitest";
import { getTrainerScenario } from "./seed-data";

describe("trainer dashboard scenarios", () => {
  it("connects the knee discomfort scenario to a trainer-controlled review question", () => {
    const scenario = getTrainerScenario("client-knee-discomfort");

    expect(scenario).toEqual({
      title: "Knee discomfort before lower-body training",
      productQuestion:
        "Can the trainer quickly see the pain signal, recent context, and decide what to do next?",
      trainerReviewQuestion:
        "What would you review or adjust before training Thomas today?",
      validationPrompt:
        "Ask the trainer whether this context helps without making the app feel like it is deciding for them.",
    });
  });
});
