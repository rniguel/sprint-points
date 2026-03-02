"use client";

import { useEffect, useState } from "react";
import { X, Cookie } from "lucide-react";
import Link from "next/link";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const hasAccepted = localStorage.getItem("sprint-points-cookie-accepted");
    
    // Delay para não ser intrusivo
    const timer = setTimeout(() => {
      if (!hasAccepted) {
        setIsVisible(true);
        setIsAnimating(true);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleAccept = () => {
    setIsAnimating(false);
    setTimeout(() => {
      localStorage.setItem("sprint-points-cookie-accepted", "true");
      setIsVisible(false);
    }, 300);
  };

  if (!isVisible) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 transition-all duration-300 ${
        isAnimating ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      }`}
      role="alert"
      aria-live="polite"
    >
      <div className="bg-card border-t border-border shadow-lg">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            {/* Conteúdo */}
            <div className="flex items-start gap-3 flex-1">
              <Cookie className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="text-foreground font-medium mb-1">
                  Transparência total 🎯
                </p>
                <p className="text-muted-foreground">
                  Este site usa apenas <strong>localStorage</strong> para salvar suas preferências localmente. 
                  Nenhum dado é coletado ou enviado para servidores externos.
                  {" "}
                  <Link 
                    href="/privacy" 
                    className="text-primary hover:underline font-medium"
                  >
                    Saiba mais na Política de Privacidade
                  </Link>
                </p>
              </div>
            </div>

            {/* Botões */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <button
                onClick={handleAccept}
                className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium text-sm hover:bg-primary/90 transition-colors whitespace-nowrap"
                aria-label="Aceitar e fechar"
              >
                Entendi
              </button>
              <button
                onClick={handleAccept}
                className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Fechar"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
