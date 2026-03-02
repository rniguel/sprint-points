export interface Activity {
  id: string;
  label: string;
  hours: number;
  enabled: boolean;
  custom?: boolean;
}

export interface Task {
  name: string;
  baseHours: number;
  activities: Activity[];
  riskFactor: number;
}

export interface CalculationResult {
  subtotal: number;
  riskAmount: number;
  total: number;
  storyPoints: number;
}
