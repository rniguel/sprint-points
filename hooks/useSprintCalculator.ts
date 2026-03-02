import { useReducer, useMemo, useEffect, useRef } from "react";
import type { Activity, Task, CalculationResult } from "@/lib/types";
import { calculate } from "@/lib/calculator";
import { DEFAULT_ACTIVITIES } from "@/lib/constants";
import type { Complexity } from "@/components/TaskHeader";

interface SprintCalculatorState {
  taskName: string;
  baseHours: number;
  activities: Activity[];
  riskFactor: number;
  complexity: Complexity;
}

type Action =
  | { type: "SET_TASK_NAME"; payload: string }
  | { type: "SET_BASE_HOURS"; payload: number }
  | { type: "SET_COMPLEXITY"; payload: Complexity }
  | { type: "TOGGLE_ACTIVITY"; payload: string }
  | { type: "UPDATE_ACTIVITY_HOURS"; payload: { id: string; hours: number } }
  | { type: "ADD_CUSTOM_ACTIVITY"; payload: { label: string; hours: number } }
  | { type: "REMOVE_ACTIVITY"; payload: string }
  | { type: "SET_RISK_FACTOR"; payload: number }
  | { type: "LOAD_SAVED_DATA"; payload: { customActivities: Activity[]; defaultRiskFactor: number } };

function reducer(
  state: SprintCalculatorState,
  action: Action
): SprintCalculatorState {
  switch (action.type) {
    case "SET_TASK_NAME":
      return { ...state, taskName: action.payload };

    case "SET_BASE_HOURS":
      return { ...state, baseHours: action.payload };

    case "SET_COMPLEXITY":
      return { ...state, complexity: action.payload };

    case "TOGGLE_ACTIVITY":
      return {
        ...state,
        activities: state.activities.map((activity) =>
          activity.id === action.payload
            ? { ...activity, enabled: !activity.enabled }
            : activity
        ),
      };

    case "UPDATE_ACTIVITY_HOURS":
      return {
        ...state,
        activities: state.activities.map((activity) =>
          activity.id === action.payload.id
            ? { ...activity, hours: action.payload.hours }
            : activity
        ),
      };

    case "ADD_CUSTOM_ACTIVITY":
      return {
        ...state,
        activities: [
          ...state.activities,
          {
            id: `custom-${Date.now()}`,
            label: action.payload.label,
            hours: action.payload.hours,
            enabled: true,
            custom: true,
          },
        ],
      };

    case "REMOVE_ACTIVITY":
      return {
        ...state,
        activities: state.activities.filter(
          (activity) => activity.id !== action.payload
        ),
      };

    case "SET_RISK_FACTOR":
      return { ...state, riskFactor: action.payload };

    case "LOAD_SAVED_DATA":
      return {
        ...state,
        activities: [
          ...DEFAULT_ACTIVITIES.map((a) => ({ ...a })),
          ...action.payload.customActivities,
        ],
        riskFactor: action.payload.defaultRiskFactor,
      };

    default:
      return state;
  }
}

const STORAGE_KEY_CUSTOM_ACTIVITIES = "sprint-points-custom-activities";
const STORAGE_KEY_DEFAULT_RISK = "sprint-points-default-risk";

export function useSprintCalculator() {
  const [state, dispatch] = useReducer(reducer, {
    taskName: "",
    baseHours: 8,
    activities: DEFAULT_ACTIVITIES.map((a) => ({ ...a })),
    riskFactor: 0.1,
    complexity: "medium" as Complexity,
  });

  const isInitialized = useRef(false);

  // Carregar dados salvos no mount
  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      const savedCustomActivities = localStorage.getItem(STORAGE_KEY_CUSTOM_ACTIVITIES);
      const savedDefaultRisk = localStorage.getItem(STORAGE_KEY_DEFAULT_RISK);

      const customActivities: Activity[] = savedCustomActivities
        ? JSON.parse(savedCustomActivities)
        : [];

      const defaultRiskFactor: number = savedDefaultRisk
        ? JSON.parse(savedDefaultRisk)
        : 0.1;

      dispatch({
        type: "LOAD_SAVED_DATA",
        payload: { customActivities, defaultRiskFactor },
      });
    } catch (error) {
      console.error("Erro ao carregar dados salvos:", error);
    }

    isInitialized.current = true;
  }, []);

  // Salvar dados no localStorage com debounce
  useEffect(() => {
    if (!isInitialized.current || typeof window === "undefined") return;

    const timeoutId = setTimeout(() => {
      try {
        const customActivities = state.activities.filter((a) => a.custom);
        localStorage.setItem(STORAGE_KEY_CUSTOM_ACTIVITIES, JSON.stringify(customActivities));
        localStorage.setItem(STORAGE_KEY_DEFAULT_RISK, JSON.stringify(state.riskFactor));
      } catch (error) {
        console.error("Erro ao salvar dados:", error);
      }
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [state.activities, state.riskFactor]);

  const result = useMemo<CalculationResult>(() => {
    const task: Task = {
      name: state.taskName,
      baseHours: state.baseHours,
      activities: state.activities,
      riskFactor: state.riskFactor,
    };
    return calculate(task);
  }, [state.taskName, state.baseHours, state.activities, state.riskFactor]);

  return {
    taskName: state.taskName,
    baseHours: state.baseHours,
    activities: state.activities,
    riskFactor: state.riskFactor,
    complexity: state.complexity,
    result,
    setTaskName: (name: string) =>
      dispatch({ type: "SET_TASK_NAME", payload: name }),
    setBaseHours: (hours: number) =>
      dispatch({ type: "SET_BASE_HOURS", payload: hours }),
    setComplexity: (complexity: Complexity) =>
      dispatch({ type: "SET_COMPLEXITY", payload: complexity }),
    toggleActivity: (id: string) =>
      dispatch({ type: "TOGGLE_ACTIVITY", payload: id }),
    updateActivityHours: (id: string, hours: number) =>
      dispatch({ type: "UPDATE_ACTIVITY_HOURS", payload: { id, hours } }),
    addCustomActivity: (label: string, hours: number) =>
      dispatch({ type: "ADD_CUSTOM_ACTIVITY", payload: { label, hours } }),
    removeActivity: (id: string) =>
      dispatch({ type: "REMOVE_ACTIVITY", payload: id }),
    setRiskFactor: (factor: number) =>
      dispatch({ type: "SET_RISK_FACTOR", payload: factor }),
  };
}
