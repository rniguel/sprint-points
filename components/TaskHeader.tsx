import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export type Complexity = "small" | "medium" | "large" | "custom";

interface TaskHeaderProps {
  taskName: string;
  baseHours: number;
  complexity: Complexity;
  onTaskNameChange: (name: string) => void;
  onComplexityChange: (complexity: Complexity) => void;
  onBaseHoursChange: (hours: number) => void;
}

const COMPLEXITY_OPTIONS: { value: Complexity; label: string; hours: number; color: string }[] = [
  { value: "small", label: "Pequena", hours: 4, color: "from-emerald-500 to-teal-600" },
  { value: "medium", label: "Média", hours: 8, color: "from-blue-500 to-indigo-600" },
  { value: "large", label: "Grande", hours: 16, color: "from-orange-500 to-red-600" },
  { value: "custom", label: "Custom", hours: 0, color: "from-purple-500 to-violet-600" },
];

export function TaskHeader({
  taskName,
  baseHours,
  complexity,
  onTaskNameChange,
  onComplexityChange,
  onBaseHoursChange,
}: TaskHeaderProps) {
  return (
    <div className="space-y-5">
      <div className="space-y-2">
        <Label htmlFor="taskName" className="text-sm font-semibold">
          Nome da Task
        </Label>
        <Input
          id="taskName"
          placeholder="Ex: Criar componente de Header"
          value={taskName}
          onChange={(e) => onTaskNameChange(e.target.value)}
          className="border-2 focus:border-primary transition-colors"
        />
      </div>

      <div className="space-y-3">
        <Label className="text-sm font-semibold">Complexidade</Label>
        <div className="grid grid-cols-2 gap-3">
          {COMPLEXITY_OPTIONS.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => {
                onComplexityChange(option.value);
                if (option.value !== "custom") {
                  onBaseHoursChange(option.hours);
                }
              }}
              className={`relative px-4 py-3 text-sm font-medium rounded-xl border-2 transition-all duration-200 overflow-hidden group ${
                complexity === option.value
                  ? `bg-gradient-to-r ${option.color} text-white border-transparent shadow-lg scale-[1.02]`
                  : "bg-white text-gray-700 border-gray-200 hover:border-gray-300 hover:shadow-md hover:scale-[1.01]"
              }`}
            >
              <span className="relative z-10">
                {option.label}
                {option.hours > 0 && (
                  <span className={`ml-1 ${complexity === option.value ? "text-white/80" : "text-gray-400"}`}>
                    ({option.hours}h)
                  </span>
                )}
              </span>
              {complexity === option.value && (
                <div className="absolute inset-0 bg-white/10 animate-pulse" />
              )}
            </button>
          ))}
        </div>
      </div>

      {complexity === "custom" && (
        <div className="space-y-2">
          <Label htmlFor="baseHours" className="text-sm font-semibold">
            Horas Base: <span className="text-primary">{baseHours}h</span>
          </Label>
          <Input
            id="baseHours"
            type="number"
            min="0"
            step="0.5"
            value={baseHours}
            onChange={(e) => onBaseHoursChange(parseFloat(e.target.value) || 0)}
            className="border-2 focus:border-primary transition-colors"
          />
        </div>
      )}
    </div>
  );
}
