import Link from "next/link";
import { ArrowRight, Code, Type, Palette, Component, Image, Square } from "lucide-react";

const technologies = [
  {
    name: "Next.js",
    description: "Framework React com App Router e renderização híbrida",
    icon: Code,
    color: "text-black dark:text-white",
    bg: "bg-gray-100 dark:bg-gray-800",
  },
  {
    name: "TypeScript",
    description: "Tipagem estática para código mais seguro e manutenível",
    icon: Type,
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    name: "Tailwind CSS",
    description: "Estilização utilitária com design system consistente",
    icon: Palette,
    color: "text-cyan-600",
    bg: "bg-cyan-50",
  },
  {
    name: "shadcn/ui",
    description: "Componentes acessíveis construídos com Radix UI",
    icon: Component,
    color: "text-violet-600",
    bg: "bg-violet-50",
  },
  {
    name: "html-to-image",
    description: "Exportação do resultado como imagem PNG",
    icon: Image,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    name: "lucide-react",
    description: "Biblioteca de ícones moderna e consistente",
    icon: Square,
    color: "text-orange-600",
    bg: "bg-orange-50",
  },
];

const steps = [
  {
    number: "01",
    title: "Defina a task e atividades",
    description: "Informe o nome da task, selecione a complexidade e marque as atividades envolvidas no desenvolvimento.",
  },
  {
    number: "02",
    title: "Ajuste o buffer de segurança",
    description: "Use o slider para definir a margem de segurança baseada na complexidade e incertezas da task.",
  },
  {
    number: "03",
    title: "Exporte e leve pro planning",
    description: "Visualize o resultado em horas, dias e story points. Exporte como imagem e compartilhe com o time.",
  },
];

export default function TechnologiesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/30">
      {/* Hero */}
      <section className="gradient-bg text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Sprint Points
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Uma calculadora de estimativas para devs frontend que leva a sério cada detalhe da sprint.
          </p>
        </div>
      </section>

      {/* Tecnologias */}
      <section className="py-20 px-4 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Tecnologias
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="group p-6 rounded-2xl border border-border/50 bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-12 h-12 rounded-xl ${tech.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <tech.icon className={`w-6 h-6 ${tech.color}`} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  {tech.name}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {tech.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
            Como funciona
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Três passos simples para estimativas mais precisas
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative"
              >
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary/30 to-transparent -translate-x-1/2 z-0" />
                )}

                <div className="relative z-10">
                  <div className="text-6xl font-black text-primary/10 mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-white dark:bg-gray-950">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Quer contribuir?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            O Sprint Points é open source e contribuições são bem-vindas!
          </p>
          <Link
            href="https://github.com/rniguel/sprint-points"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-colors"
          >
            Ver no GitHub
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Footer spacing */}
      <div className="h-20" />
    </div>
  );
}
