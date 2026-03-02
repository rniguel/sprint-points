import type { Activity } from "./types";

export const DEFAULT_ACTIVITIES: Activity[] = [
  { id: "docs", label: "Leitura de documentação", hours: 0.5, enabled: true },
  { id: "figma", label: "Revisão do Figma", hours: 0.5, enabled: true },
  { id: "a11y", label: "Acessibilidade", hours: 2, enabled: true },
  { id: "responsive", label: "Responsividade", hours: 2, enabled: true },
  { id: "api", label: "Integração com API", hours: 2, enabled: true },
  { id: "validation", label: "Validação de formulário", hours: 1, enabled: true },
  { id: "review", label: "Code review", hours: 1, enabled: true },
  { id: "adjustments", label: "Ajustes pós-review", hours: 1, enabled: true },
  { id: "testing", label: "Testes manuais", hours: 1, enabled: true },
];
