import type { Task, CalculationResult } from "./types";

export function calculate(task: Task): CalculationResult {
  const activeActivitiesHours = task.activities
    .filter((activity) => activity.enabled)
    .reduce((sum, activity) => sum + activity.hours, 0);

  const subtotal = task.baseHours + activeActivitiesHours;
  const riskAmount = subtotal * task.riskFactor;
  const total = subtotal * (1 + task.riskFactor);
  const storyPoints = Math.ceil(total / 6);

  return {
    subtotal,
    riskAmount,
    total,
    storyPoints,
  };
}
