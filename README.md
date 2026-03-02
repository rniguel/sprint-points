# 🚀 Sprint Points

> **Calcule story points e estimativas de tempo de forma precisa e eficiente para suas tasks de desenvolvimento.**

Uma ferramenta moderna e intuitiva para ajudar times de desenvolvimento a estimar esforços de forma mais assertiva, considerando múltiplas atividades e fatores de risco.

![Sprint Points](https://img.shields.io/badge/Next.js-16.1.6-black?logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-19.2.3-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.x-38B2AC?logo=tailwind-css&logoColor=white)

---

## ✨ Funcionalidades

### 📋 Planejamento de Tasks
- **Nome da task**: Identifique claramente o que está sendo estimado
- **Complexidade pré-definida**: Selecione entre Pequena (4h), Média (8h), Grande (16h) ou Custom
- **Horas personalizadas**: Modo custom permite inserir qualquer valor de horas base

### ✅ Checklist de Atividades
Atividades comuns que impactam no tempo total da task:
- 📖 Leitura de documentação
- 🎨 Revisão do Figma
- ♿ Acessibilidade
- 📱 Responsividade
- 🔌 Integração com API
- ✅ Validação de formulário
- 🔍 Code review
- 🔧 Ajustes pós-review
- 🧪 Testes manuais
- ➕ **Atividades customizadas**: Adicione atividades específicas da sua task

### ⚠️ Fator de Risco
Slider interativo de 0% a 40% com indicação visual de temperatura:
- 🟢 **0–10%**: Task fácil, bem entendida, sem dúvidas
- 🟡 **11–25%**: Precisa analisar melhor o Figma, documentação ou detalhes de backend
- 🔴 **26–40%**: Feature densa, exige análise de documentação, alinhamento com backend e revisão do Figma

### 📊 Resultados Detalhados
- **Horas Base**: Tempo inicial da task
- **Atividades**: Soma das horas das atividades selecionadas
- **Subtotal**: Total antes da margem de segurança
- **Margem de Segurança**: Buffer para imprevistos
- **Total em Horas**: Tempo total estimado
- **Estimativa em Dias**: Intervalo baseado em jornada de 5-7h por dia
- **Story Points**: Referência (1 SP = ~6 horas)
- **Lista de Atividades**: Visualize todas as atividades incluídas

### 💾 Persistência de Dados
- Atividades customizadas são salvas no localStorage
- Último fator de risco utilizado é memorizado
- Dados persistem entre sessões do navegador

### 📷 Exportação
- Exporte o card de resultados como imagem PNG
- Ideal para compartilhar estimativas com o time
- Nome do arquivo baseado no nome da task

---

## 🛠️ Tecnologias

| Tecnologia | Versão | Descrição |
|------------|--------|-----------|
| **Next.js** | 16.1.6 | Framework React com App Router |
| **React** | 19.2.3 | Biblioteca UI |
| **TypeScript** | 5.x | Tipagem estática |
| **Tailwind CSS** | 4.x | Estilização utilitária |
| **shadcn/ui** | 3.8.5 | Componentes UI |
| **Radix UI** | 1.4.3 | Primitivos acessíveis |
| **Lucide React** | 0.576.0 | Ícones |
| **html-to-image** | 1.11.13 | Exportação como imagem |

---

## 🚀 Começando

### Pré-requisitos
- Node.js 18+ 
- npm, yarn, pnpm ou bun

### Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/sprint-points.git

# Entre no diretório
cd sprint-points

# Instale as dependências
npm install
```

### Desenvolvimento

```bash
# Rode o servidor de desenvolvimento
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

### Produção

```bash
# Build de produção
npm run build

# Inicie o servidor de produção
npm start
```

### Lint

```bash
npm run lint
```

---

## 📖 Como Usar

### 1. Informe a Task
Digite o nome da task no campo "Nome da Task" (ex: "Criar componente de Header")

### 2. Selecione a Complexidade
- **Pequena (4h)**: Tasks simples e rápidas
- **Média (8h)**: Tasks de complexidade moderada
- **Grande (16h)**: Tasks complexas que exigem mais tempo
- **Custom**: Insira um valor personalizado de horas

### 3. Ajuste o Fator de Risco
Use o slider para definir a margem de segurança baseada na incerteza da task:
- Mova para a **esquerda** para tasks bem compreendidas
- Mova para a **direita** para tasks com muitas incertezas

### 4. Selecione as Atividades
- ✅ Marque/desmarque atividades padrão
- ⏱️ Ajuste as horas de cada atividade se necessário
- ➕ Adicione atividades customizadas específicas da task
- 🗑️ Remova atividades customizadas que não são mais necessárias

### 5. Visualize os Resultados
O card de resultados mostra:
- Detalhamento completo das horas
- Estimativa em dias (intervalo)
- Story points de referência
- Lista de todas as atividades incluídas

### 6. Exporte (Opcional)
Clique em "Exportar como imagem" para baixar o resultado em PNG

---

## 🏗️ Estrutura do Projeto

```
sprint-points/
├── app/
│   ├── globals.css          # Estilos globais e temas
│   ├── layout.tsx           # Layout principal
│   └── page.tsx             # Página principal
├── components/
│   ├── ui/                  # Componentes shadcn/ui
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── checkbox.tsx
│   │   ├── input.tsx
│   │   ├── label.tsx
│   │   ├── slider.tsx
│   │   └── tooltip.tsx
│   ├── ActivityChecklist.tsx # Lista de atividades
│   ├── ResultCard.tsx        # Card de resultados
│   ├── RiskSlider.tsx        # Slider de risco
│   └── TaskHeader.tsx        # Header da task
├── hooks/
│   └── useSprintCalculator.ts # Lógica de estado e cálculos
├── lib/
│   ├── calculator.ts         # Função de cálculo
│   ├── constants.ts          # Constantes do app
│   ├── types.ts              # Tipos TypeScript
│   └── utils.ts              # Utilitários
└── public/                   # Assets estáticos
```

---

## 🧮 Fórmula de Cálculo

```
subtotal = horasBase + Σ(atividadesSelecionadas)
margem = subtotal × fatorRisco
total = subtotal + margem
storyPoints = ceil(total / 6)

estimativaDias = [ceil(total / 7), ceil(total / 5)]
```

### Exemplo Prático

| Item | Valor |
|------|-------|
| **Horas Base** (Complexidade Média) | 8h |
| **Atividades** (6 atividades selecionadas) | 7.5h |
| **Subtotal** | 15.5h |
| **Margem de Segurança** (15%) | 2.3h |
| **Total** | **17.8h** |
| **Estimativa em Dias** | 3–4 dias |
| **Story Points** | 3 SP |

---

## 🎨 Personalização

### Cores do Tema
O projeto usa um tema roxo personalizado definido em `app/globals.css`:

```css
:root {
  --brand: oklch(0.65 0.25 270);
  --brand-light: oklch(0.8 0.15 270);
  --brand-dark: oklch(0.45 0.2 270);
}
```

### Dark Mode
O tema escuro está configurado e pode ser ativado adicionando a classe `dark` ao elemento `<html>`.

---

## 📝 Scripts Disponíveis

| Script | Descrição |
|--------|-----------|
| `npm run dev` | Inicia servidor de desenvolvimento |
| `npm run build` | Gera build de produção |
| `npm start` | Inicia servidor de produção |
| `npm run lint` | Executa ESLint |

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Siga os passos:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👨‍💻 Autor

Feito com 💜 para agilizar suas sprints

---

## 🙏 Agradecimentos

- [Next.js](https://nextjs.org/) - Framework React
- [shadcn/ui](https://ui.shadcn.com/) - Componentes UI
- [Tailwind CSS](https://tailwindcss.com/) - Estilização
- [Lucide Icons](https://lucide.dev/) - Ícones

---

<div align="center">

**⭐ Se você gosta dessa ferramenta, deixe uma estrela no repositório! ⭐**

</div>
