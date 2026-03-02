import { useState } from "react";
import type { Activity } from "@/lib/types";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus, X, Clock } from "lucide-react";

interface ActivityChecklistProps {
  activities: Activity[];
  onToggleActivity: (id: string) => void;
  onUpdateActivityHours: (id: string, hours: number) => void;
  onAddCustomActivity: (label: string, hours: number) => void;
  onRemoveActivity: (id: string) => void;
}

export function ActivityChecklist({
  activities,
  onToggleActivity,
  onUpdateActivityHours,
  onAddCustomActivity,
  onRemoveActivity,
}: ActivityChecklistProps) {
  const [isAddingCustom, setIsAddingCustom] = useState(false);
  const [customLabel, setCustomLabel] = useState("");
  const [customHours, setCustomHours] = useState("");

  const handleAddCustom = () => {
    if (customLabel.trim() && customHours) {
      onAddCustomActivity(customLabel.trim(), parseFloat(customHours));
      setCustomLabel("");
      setCustomHours("");
      setIsAddingCustom(false);
    }
  };

  const handleCancelAdd = () => {
    setCustomLabel("");
    setCustomHours("");
    setIsAddingCustom(false);
  };

  return (
    <div className="space-y-4">
      <div className="space-y-3">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className={`group flex items-center gap-3 p-3 rounded-xl border-2 transition-all duration-200 ${
              activity.enabled
                ? "bg-white border-gray-100 hover:border-primary/30 hover:shadow-md"
                : "bg-gray-50 border-gray-100 opacity-60"
            }`}
          >
            <Checkbox
              id={activity.id}
              checked={activity.enabled}
              onCheckedChange={() => onToggleActivity(activity.id)}
              className="h-5 w-5 rounded-md border-2 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
            />
            <Label
              htmlFor={activity.id}
              className={`flex-1 cursor-pointer font-medium transition-all ${
                !activity.enabled ? "text-muted-foreground line-through" : "text-foreground"
              }`}
            >
              {activity.label}
              {activity.custom && (
                <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">
                  custom
                </span>
              )}
            </Label>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-muted-foreground" />
              <Input
                type="number"
                min="0"
                step="0.5"
                className="w-20 h-9 text-center font-semibold"
                value={activity.hours}
                onChange={(e) =>
                  onUpdateActivityHours(
                    activity.id,
                    parseFloat(e.target.value) || 0
                  )
                }
                disabled={!activity.enabled}
              />
              <span className="text-sm font-medium text-muted-foreground w-6">h</span>
              {activity.custom && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onRemoveActivity(activity.id)}
                  className="text-red-500 hover:text-red-700 hover:bg-red-50 h-9 w-9 p-0 rounded-lg"
                >
                  <X className="w-4 h-4" />
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>

      {!isAddingCustom ? (
        <Button
          variant="outline"
          onClick={() => setIsAddingCustom(true)}
          className="w-full h-12 border-2 border-dashed hover:border-primary hover:bg-primary/5 transition-all group"
        >
          <Plus className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
          <span className="font-medium">Adicionar atividade</span>
        </Button>
      ) : (
        <div className="space-y-3 p-4 border-2 border-primary/30 rounded-xl bg-gradient-to-br from-primary/5 to-primary/10">
          <div className="flex gap-2">
            <Input
              placeholder="Nome da atividade"
              value={customLabel}
              onChange={(e) => setCustomLabel(e.target.value)}
              className="flex-1 h-11"
              autoFocus
            />
            <Input
              type="number"
              placeholder="Horas"
              min="0"
              step="0.5"
              value={customHours}
              onChange={(e) => setCustomHours(e.target.value)}
              className="w-28 h-11 text-center"
            />
          </div>
          <div className="flex gap-2">
            <Button
              onClick={handleAddCustom}
              disabled={!customLabel.trim() || !customHours}
              size="sm"
              className="flex-1 h-11 font-semibold"
            >
              <Plus className="w-4 h-4 mr-2" />
              Adicionar
            </Button>
            <Button
              variant="outline"
              onClick={handleCancelAdd}
              size="sm"
              className="h-11"
            >
              <X className="w-4 h-4 mr-2" />
              Cancelar
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
