"use client";

import { toPng } from "html-to-image";
import type { Activity, CalculationResult } from "@/lib/types";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, TrendingUp, Calculator, Download, ListChecks, Calendar } from "lucide-react";
import { useRef } from "react";

interface ResultCardProps {
  taskName: string;
  baseHours: number;
  activities: Activity[];
  riskFactor: number;
  result: CalculationResult;
}

export function ResultCard({ taskName, baseHours, activities, riskFactor, result }: ResultCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const activitiesHours = result.subtotal - baseHours;

  const enabledActivities = activities.filter((a) => a.enabled);
  const activitiesList = enabledActivities.map((a) => a.label).join(", ");

  // Estimativa de dias baseada em jornada de 5-7h por dia
  const minDays = Math.ceil(result.total / 7); // Jornada de 7h
  const maxDays = Math.ceil(result.total / 5); // Jornada de 5h

  const handleExportImage = async () => {
    if (!cardRef.current) return;

    try {
      const dataUrl = await toPng(cardRef.current, {
        quality: 1.0,
        pixelRatio: 2,
      });
      const link = document.createElement("a");
      link.href = dataUrl;
      const filename = taskName.trim()
        ? `sprint-points-${taskName.trim().toLowerCase().replace(/\s+/g, "-")}.png`
        : "sprint-points.png";
      link.download = filename;
      link.click();
    } catch (error) {
      console.error("Erro ao exportar imagem:", error);
    }
  };

  return (
    <Card className="border-0 card-shadow-lg overflow-hidden bg-white !py-0" ref={cardRef}>
      {/* Header com gradiente - cantos arredondados no topo */}
      <div className="gradient-bg text-white rounded-t-2xl p-6">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Calculator className="w-6 h-6" />
          <h2 className="text-center text-xl font-bold">Resultado</h2>
        </div>
        {taskName && (
          <p className="text-center text-white/80 text-sm mt-1">{taskName}</p>
        )}
      </div>

      <CardContent className="p-6 space-y-5">
        {/* Detalhamento */}
        <div className="space-y-3">
          <div className="flex justify-between items-center py-2 border-b border-dashed">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span className="text-sm">Horas Base</span>
            </div>
            <span className="font-semibold text-foreground">{baseHours.toFixed(1)}h</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-dashed">
            <div className="flex items-center gap-2 text-muted-foreground">
              <TrendingUp className="w-4 h-4" />
              <span className="text-sm">Atividades</span>
            </div>
            <span className="font-semibold text-foreground">{activitiesHours.toFixed(1)}h</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-dashed">
            <div className="flex items-center gap-2 text-muted-foreground">
              <span className="text-sm">Subtotal</span>
            </div>
            <span className="font-semibold text-foreground">{result.subtotal.toFixed(1)}h</span>
          </div>
          <div className="flex justify-between items-center py-2">
            <div className="flex items-center gap-2 text-muted-foreground">
              <span className="text-sm">
                + {(riskFactor * 100).toFixed(0)}% de margem
              </span>
            </div>
            <span className="font-semibold text-amber-600">+{result.riskAmount.toFixed(1)}h</span>
          </div>
        </div>

        {/* Lista de atividades */}
        {enabledActivities.length > 0 && (
          <div className="p-4 rounded-xl bg-muted/50 border border-dashed">
            <div className="flex items-start gap-2">
              <ListChecks className="w-4 h-4 text-muted-foreground mt-0.5" />
              <div>
                <p className="text-xs font-medium text-muted-foreground mb-1">Atividades incluídas</p>
                <p className="text-sm text-foreground leading-relaxed">{activitiesList}</p>
              </div>
            </div>
          </div>
        )}

        {/* Total em Horas */}
        <div className="gradient-bg rounded-2xl p-5 -mx-2">
          <div className="flex justify-between items-center">
            <span className="text-white/90 font-medium">Total em Horas</span>
            <span className="text-4xl font-bold text-white">
              {result.total.toFixed(1)}h
            </span>
          </div>
        </div>

        {/* Estimativa em Dias */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500/10 via-blue-500/5 to-blue-500/10 border-2 border-blue-500/30 p-5">
          <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-16 h-16 bg-blue-500/10 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-blue-500" />
              <span className="text-lg font-bold text-foreground">Estimativa em Dias</span>
            </div>
            <span className="text-4xl font-black text-blue-600 text-right">
              {minDays}–{maxDays} {maxDays === 1 ? "dia" : "dias"}
            </span>
          </div>
          <p className="relative text-xs text-muted-foreground mt-2 text-center">
            Considerando 5-7h de trabalho por dia
          </p>
        </div>

        {/* Story Points - Apenas referência */}
        <div className="p-4 rounded-xl bg-muted/30">
          <div className="flex justify-between items-center text-sm">
            <span className="text-muted-foreground">Story Points (ref.)</span>
            <span className="font-semibold text-muted-foreground">{result.storyPoints} SP</span>
          </div>
          <p className="text-xs text-muted-foreground mt-1 text-center">
            1 SP ≈ 6 horas (use apenas como referência)
          </p>
        </div>

        {/* Botão de Exportar */}
        <Button
          onClick={handleExportImage}
          variant="outline"
          className="w-full h-12 border-2 font-semibold hover:bg-primary hover:text-white hover:border-primary transition-all group"
        >
          <Download className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
          Exportar como imagem
        </Button>
      </CardContent>
    </Card>
  );
}
