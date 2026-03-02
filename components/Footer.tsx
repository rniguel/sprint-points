import Link from "next/link";
import { Bug, GitFork, ExternalLink } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-muted/30 mt-auto">
      <div className="max-w-6xl mx-auto py-8 px-4">
        {/* Links de navegação */}
        <nav className="flex items-center justify-center gap-6 mb-6" aria-label="Navegação do rodapé">
          <Link
            href="/technologies"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Tecnologias
          </Link>
          <Link
            href="/privacy"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Política de Privacidade
          </Link>
          <Link
            href="/terms"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Termos de Uso
          </Link>
        </nav>

        {/* Botões de ação */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <a
            href="https://github.com/rniguel/sprint-points/issues/new"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <Bug className="w-4 h-4" />
            <span>Reportar problema</span>
            <ExternalLink className="w-3 h-3 opacity-60" />
          </a>

          <span className="text-muted-foreground/30">•</span>

          <a
            href="https://github.com/rniguel/sprint-points"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <GitFork className="w-4 h-4" />
            <span>Contribuir</span>
            <ExternalLink className="w-3 h-3 opacity-60" />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-center text-xs text-muted-foreground">
          © {currentYear} Sprint Points. Feito com 💜 para agilizar suas sprints.
        </p>
      </div>
    </footer>
  );
}
