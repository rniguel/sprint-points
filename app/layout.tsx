import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://sprintpoints.miguelito.dev";
const ogImage = "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#7c3aed" },
    { media: "(prefers-color-scheme: dark)", color: "#8b5cf6" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  // Metadata básica
  title: {
    default: "Sprint Points - Estimativa de Tempo para Tasks de Desenvolvimento",
    template: "%s | Sprint Points",
  },
  description:
    "Converta e calcule tempo de tasks em diferentes métricas: horas, dias úteis e story points. Ferramenta gratuita para times ágeis que usam Scrum e Kanban.",
  
  // URLs e canonical
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  
  // Keywords para SEO
  keywords: [
    "estimativa de tempo",
    "story points",
    "sprint planning",
    "scrum",
    "agile",
    "kanban",
    "planning poker",
    "desenvolvimento de software",
    "gestão de projetos",
    "productivity",
    "time tracking",
    "task estimation",
    "horas para dias",
    "conversão de tempo",
    "desenvolvimento ágil",
    "metodologias ágeis",
  ],
  
  // Autor e organização
  authors: [
    { name: "Miguelito", url: "https://miguelito.dev" },
  ],
  
  // Open Graph / Facebook / LinkedIn
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "Sprint Points",
    title: "Sprint Points - Estimativa de Tempo para Tasks de Desenvolvimento",
    description:
      "Converta e calcule tempo de tasks em diferentes métricas: horas, dias úteis e story points. Ferramenta gratuita para times ágeis.",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Sprint Points - Estimativa de Tempo para Tasks",
        type: "image/jpeg",
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Sprint Points - Estimativa de Tempo para Tasks",
    description:
      "Converta tempo de tasks em diferentes métricas: horas, dias e story points.",
    images: [ogImage],
    creator: "@miguelito",
  },
  
  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  
  // Verificações de propriedade
  verification: {
    google: "your-google-verification-code",
  },
  
  // Ícones (adicionar arquivos na pasta public)
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  
  // Manifest para PWA
  manifest: "/manifest.json",
  
  // Apple Web App
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Sprint Points",
  },
  
  // Format Detection
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  
  // Category
  category: "productivity",
};

// JSON-LD Structured Data
export const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Sprint Points",
  "description": "Conversor de tempo de tasks em múltiplas métricas: horas, dias úteis e story points",
  "url": siteUrl,
  "applicationCategory": "ProductivityApplication",
  "operatingSystem": "Web Browser",
  "browserRequirements": "Requires JavaScript",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
  },
  "author": {
    "@type": "Person",
    "name": "Miguelito",
    "url": "https://miguelito.dev",
  },
  "featureList": [
    "Estimativa de horas por task",
    "Conversão para dias úteis (5-7h/dia)",
    "Cálculo de Story Points como referência",
    "Fator de risco ajustável",
    "Checklist de atividades",
    "Exportação como imagem",
    "Persistência local de dados",
  ],
  "screenshot": ogImage,
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "150",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
