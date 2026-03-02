"use client";

import { useSprintCalculator } from "@/hooks/useSprintCalculator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TaskHeader } from "@/components/TaskHeader";
import { ActivityChecklist } from "@/components/ActivityChecklist";
import { RiskSlider } from "@/components/RiskSlider";
import { ResultCard } from "@/components/ResultCard";
import type { Complexity } from "@/components/TaskHeader";
import { Zap, Target, ListChecks, Gauge } from "lucide-react";

export default function Home() {
  const {
    taskName,
    baseHours,
    activities,
    riskFactor,
    complexity,
    result,
    setTaskName,
    setBaseHours,
    setComplexity,
    toggleActivity,
    updateActivityHours,
    addCustomActivity,
    removeActivity,
    setRiskFactor,
  } = useSprintCalculator();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/30">
      {/* Header com gradiente */}
      <div className="gradient-bg text-white py-12 px-4 shadow-lg">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Zap className="w-10 h-10" />
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Sprint Points
            </h1>
          </div>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Calcule story points de forma precisa e eficiente para suas tasks
          </p>
        </div>
      </div>

      {/* Conteúdo principal */}
      <div className="max-w-6xl mx-auto py-8 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Coluna Esquerda: Formulário */}
          <div className="space-y-6">
            {/* Nome da Task e Complexidade */}
            <Card className="card-shadow card-shadow-hover border-0">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" />
                  <CardTitle className="text-xl">Informações da Task</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <TaskHeader
                  taskName={taskName}
                  baseHours={baseHours}
                  complexity={complexity}
                  onTaskNameChange={setTaskName}
                  onComplexityChange={setComplexity}
                  onBaseHoursChange={setBaseHours}
                />
              </CardContent>
            </Card>

            {/* Fator de Risco */}
            <Card className="card-shadow card-shadow-hover border-0">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-2">
                  <Gauge className="w-5 h-5 text-primary" />
                  <CardTitle className="text-xl">Fator de Risco</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <RiskSlider
                  riskFactor={riskFactor}
                  onRiskFactorChange={setRiskFactor}
                />
              </CardContent>
            </Card>

            {/* Atividades */}
            <Card className="card-shadow card-shadow-hover border-0">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-2">
                  <ListChecks className="w-5 h-5 text-primary" />
                  <CardTitle className="text-xl">Atividades</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ActivityChecklist
                  activities={activities}
                  onToggleActivity={toggleActivity}
                  onUpdateActivityHours={updateActivityHours}
                  onAddCustomActivity={addCustomActivity}
                  onRemoveActivity={removeActivity}
                />
              </CardContent>
            </Card>
          </div>

          {/* Coluna Direita: Resultado */}
          <div className="lg:sticky lg:top-8 h-fit">
            <ResultCard
              taskName={taskName}
              baseHours={baseHours}
              activities={activities}
              riskFactor={riskFactor}
              result={result}
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 text-center text-muted-foreground text-sm">
        <p>Feito com 💜 para agilizar suas sprints</p>
      </footer>
    </div>
  );
}
