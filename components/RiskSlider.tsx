"use client";

import { Slider } from "@/components/ui/slider";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Info } from "lucide-react";

interface RiskSliderProps {
  riskFactor: number;
  onRiskFactorChange: (factor: number) => void;
}

export function RiskSlider({ riskFactor, onRiskFactorChange }: RiskSliderProps) {
  const getRiskLevel = (factor: number) => {
    if (factor < 0.1) return { label: "Baixo", color: "text-emerald-600", bg: "bg-emerald-500" };
    if (factor < 0.25) return { label: "Médio", color: "text-amber-600", bg: "bg-amber-500" };
    return { label: "Alto", color: "text-red-600", bg: "bg-red-500" };
  };

  const getRiskBlock = (factor: number) => {
    if (factor < 0.1) {
      return {
        icon: "🟢",
        text: "Risco baixo — Task bem entendida, estimativa confiável",
        bg: "bg-green-50",
        border: "border-l-green-500",
      };
    }
    if (factor < 0.25) {
      return {
        icon: "🟡",
        text: "Risco médio — Pode ter detalhes de Figma, documentação ou backend a verificar",
        bg: "bg-yellow-50",
        border: "border-l-yellow-500",
      };
    }
    return {
      icon: "🔴",
      text: "Risco alto — Feature densa, exige análise de documentação, alinhamento com backend e revisão do Figma",
      bg: "bg-red-50",
      border: "border-l-red-500",
    };
  };

  const getBarColor = (factor: number) => {
    if (factor < 0.1) return "from-emerald-400 to-emerald-600";
    if (factor < 0.25) return "from-amber-400 to-amber-600";
    return "from-red-400 to-red-600";
  };

  const riskLevel = getRiskLevel(riskFactor);
  const riskBlock = getRiskBlock(riskFactor);
  const barColor = getBarColor(riskFactor);

  return (
    <TooltipProvider>
      <div className="space-y-5">
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Baixo</span>
          <div className="flex items-center gap-2">
            <span className={`text-2xl font-bold ${riskLevel.color}`}>
              {(riskFactor * 100).toFixed(0)}%
            </span>
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${riskLevel.bg} text-white`}>
              {riskLevel.label}
            </span>
          </div>
          <span className="text-sm text-muted-foreground">Alto</span>
        </div>

        {/* Barra única com cor dinâmica */}
        <div className="relative h-3 bg-gray-200 rounded-full overflow-hidden">
          <div
            className={`absolute inset-y-0 left-0 bg-gradient-to-r ${barColor} rounded-full transition-all duration-300`}
            style={{ width: `${(riskFactor / 0.4) * 100}%` }}
          />
        </div>

        <div className="relative h-12 -mt-10 flex items-center">
          <Slider
            value={[riskFactor]}
            min={0}
            max={0.4}
            step={0.05}
            onValueChange={([value]) => onRiskFactorChange(value)}
            className="[&_[role=slider]]:h-6 [&_[role=slider]]:w-6 [&_[role=slider]]:border-4 [&_[role=slider]]:border-primary [&_[role=slider]]:shadow-lg [&_[role=slider]]:bg-white"
          />
        </div>

        {/* Margem de segurança com Tooltip */}
        <div className="flex items-center gap-2 pt-2">
          <span className="text-sm font-medium text-muted-foreground">Margem de segurança</span>
          <Tooltip>
            <TooltipTrigger asChild>
              <Info className="w-4 h-4 text-muted-foreground cursor-help" />
            </TooltipTrigger>
            <TooltipContent className="max-w-sm">
              <p className="font-medium mb-2">A margem cobre imprevistos e incertezas da task.</p>
              <div className="space-y-1 text-xs">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-emerald-600">0–10%:</span>
                  <span>Task fácil, bem entendida, sem dúvidas</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-medium text-amber-600">11–25%:</span>
                  <span>Precisa analisar melhor o Figma, ler documentação ou pode ter algum detalhe de backend</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-medium text-red-600">26–40%:</span>
                  <span>Feature densa, exige análise de documentação, alinhamento com backend e revisão do Figma</span>
                </div>
              </div>
            </TooltipContent>
          </Tooltip>
        </div>

        {/* Bloco de nível de risco dinâmico */}
        <div className={`flex items-center gap-3 p-4 rounded-xl border-l-4 ${riskBlock.border} ${riskBlock.bg}`}>
          <span className="text-2xl">{riskBlock.icon}</span>
          <p className="text-sm font-medium text-foreground flex-1">{riskBlock.text}</p>
        </div>
      </div>
    </TooltipProvider>
  );
}
