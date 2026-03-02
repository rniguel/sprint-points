import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/30 py-20 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Botão Voltar */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para a calculadora
          </Link>
        </div>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Termos de Uso
          </h1>
          <p className="text-lg text-muted-foreground">
            Última atualização: {new Date().toLocaleDateString("pt-BR", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </div>

        {/* Conteúdo */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <section className="mb-8">
            <p className="text-foreground leading-relaxed">
              Bem-vindo ao Sprint Points! Ao usar esta ferramenta, você concorda com os seguintes termos. Leia com atenção.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">
              1. Licença de Uso
            </h2>
            <p className="text-foreground leading-relaxed">
              O Sprint Points é uma ferramenta <strong className="text-foreground">gratuita e open source</strong>. Você pode usá-la livremente para:
            </p>
            <ul className="list-disc list-inside text-foreground mt-2 space-y-1">
              <li>Projetos pessoais</li>
              <li>Projetos profissionais</li>
              <li>Estudos e aprendizado</li>
              <li>Contribuir com melhorias</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">
              2. Sem Garantias
            </h2>
            <p className="text-foreground leading-relaxed">
              O Sprint Points é fornecido <strong className="text-foreground">"como está"</strong>, sem garantias de qualquer tipo. Isso significa que:
            </p>
            <ul className="list-disc list-inside text-foreground mt-2 space-y-1">
              <li>Não garantimos precisão nas estimativas geradas</li>
              <li>A ferramenta é um auxílio, não uma verdade absoluta</li>
              <li>Estimativas podem variar conforme contexto e equipe</li>
              <li>Não nos responsabilizamos por decisões baseadas nos resultados</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">
              3. Responsabilidade do Usuário
            </h2>
            <p className="text-foreground leading-relaxed">
              <strong className="text-foreground">Você é o único responsável</strong> pelas estimativas que levar ao seu time. Use o Sprint Points como:
            </p>
            <ul className="list-disc list-inside text-foreground mt-2 space-y-1">
              <li>Um ponto de partida para discussões</li>
              <li>Uma ferramenta de apoio ao planejamento</li>
              <li>Um guia, não uma regra</li>
            </ul>
            <p className="text-foreground leading-relaxed mt-4">
              Ajuste as estimativas conforme a realidade do seu time, projeto e contexto.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">
              4. Uso Comercial
            </h2>
            <p className="text-foreground leading-relaxed">
              Você pode usar o Sprint Points em ambientes comerciais sem restrições. Não cobramos taxas, licenças ou royalties.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">
              5. Contribuições
            </h2>
            <p className="text-foreground leading-relaxed">
              Contribuições são bem-vindas! Se você quiser melhorar o Sprint Points:
            </p>
            <ul className="list-disc list-inside text-foreground mt-2 space-y-1">
              <li>Abra issues no <Link href="https://github.com/rniguel/sprint-points" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">GitHub</Link></li>
              <li>Envie pull requests com melhorias</li>
              <li>Reporte bugs ou sugira funcionalidades</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">
              6. Modificações nos Termos
            </h2>
            <p className="text-foreground leading-relaxed">
              Podemos atualizar estes termos ocasionalmente. Qualquer mudança será publicada nesta página com a data de atualização no topo.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">
              7. Contato
            </h2>
            <p className="text-foreground leading-relaxed">
              Para dúvidas, sugestões ou problemas, abra uma issue no <Link href="https://github.com/rniguel/sprint-points" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">repositório do projeto no GitHub</Link>.
            </p>
          </section>

          {/* CTA Final */}
          <div className="mt-12 p-6 bg-primary/5 rounded-2xl border border-primary/20">
            <p className="text-foreground text-center leading-relaxed">
              Ao usar o Sprint Points, você concorda com estes termos.
              <br />
              <span className="text-muted-foreground">Se não concordar, por favor não utilize a ferramenta.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
