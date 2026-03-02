import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/30 py-20 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Política de Privacidade
          </h1>
          <p className="text-lg text-muted-foreground">
            Última atualização: {new Date().toLocaleDateString("pt-BR", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </div>

        {/* Conteúdo */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <section className="mb-8">
            <p className="text-foreground leading-relaxed">
              O Sprint Points leva sua privacidade a sério. Esta página explica de forma transparente como (não) coletamos e usamos seus dados.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">
              1. Coleta de Dados
            </h2>
            <p className="text-foreground leading-relaxed">
              <strong className="text-foreground">Não coletamos nenhum dado pessoal.</strong> Isso significa que não pedimos seu nome, e-mail, CPF, ou qualquer outra informação que possa identificar você.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">
              2. Armazenamento Local
            </h2>
            <p className="text-foreground leading-relaxed">
              Todas as informações que você insere no Sprint Points (nome da task, atividades customizadas, fator de risco) são salvas <strong className="text-foreground">apenas no seu navegador</strong>, usando a tecnologia <code className="bg-muted px-2 py-0.5 rounded text-sm">localStorage</code>.
            </p>
            <p className="text-foreground leading-relaxed mt-4">
              Isso significa que:
            </p>
            <ul className="list-disc list-inside text-foreground mt-2 space-y-1">
              <li>Seus dados nunca saem do seu dispositivo</li>
              <li>Você pode limpar os dados a qualquer momento limpando o cache do navegador</li>
              <li>Seus dados não são compartilhados com terceiros</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">
              3. Servidores Externos
            </h2>
            <p className="text-foreground leading-relaxed">
              <strong className="text-foreground">Nenhum dado é enviado para servidores externos.</strong> O Sprint Points roda inteiramente no seu navegador. A única conexão externa é para carregar a página inicial e os assets estáticos (fontes, ícones).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">
              4. Uso da Ferramenta
            </h2>
            <p className="text-foreground leading-relaxed">
              O uso do Sprint Points é <strong className="text-foreground">totalmente opcional e não requer cadastro</strong>. Você pode usar a ferramenta quantas vezes quiser, sem necessidade de criar conta ou fornecer qualquer informação pessoal.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">
              5. Cookies e Rastreamento
            </h2>
            <p className="text-foreground leading-relaxed">
              Não usamos cookies de rastreamento, pixels de analytics, ou qualquer tecnologia de monitoramento de comportamento. O único armazenamento local é o <code className="bg-muted px-2 py-0.5 rounded text-sm">localStorage</code> mencionado acima, que serve apenas para salvar suas preferências e dados temporariamente.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">
              6. Alterações nesta Política
            </h2>
            <p className="text-foreground leading-relaxed">
              Podemos atualizar esta política de tempos em tempos. Qualquer mudança será publicada nesta página com a data de atualização no topo.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">
              7. Contato
            </h2>
            <p className="text-foreground leading-relaxed">
              Se você tiver dúvidas sobre esta política de privacidade, pode abrir uma issue no <Link href="https://github.com/rniguel/sprint-points" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">repositório do projeto no GitHub</Link>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
