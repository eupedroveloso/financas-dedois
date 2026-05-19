export type ColorToken = {
  token: string;
  hex: string;
  usage: string;
};

export type ColorGroup = {
  id: string;
  title: string;
  description?: string;
  colors: ColorToken[];
};

export const colorGroups: ColorGroup[] = [
  {
    id: "brand",
    title: "Brand",
    description: "Cores primárias da identidade visual do Dedois, extraídas do Figma.",
    colors: [
      {
        token: "--dedois-brand-primary",
        hex: "#8EE533",
        usage: "Cor primária da marca — lime green, usada no logo e elementos de destaque",
      },
      {
        token: "--dedois-brand-primary-hover",
        hex: "#79CC2D",
        usage: "Estado hover da cor primária",
      },
      {
        token: "--dedois-brand-primary-subtle",
        hex: "#F6FEE8",
        usage: "Background de elementos com destaque suave",
      },
      {
        token: "--dedois-brand-secondary",
        hex: "#0F6839",
        usage: "Cor secundária da marca — dark green, texto e elementos de ação",
      },
      {
        token: "--dedois-brand-secondary-hover",
        hex: "#0A5A30",
        usage: "Estado hover da cor secundária",
      },
    ],
  },
  {
    id: "neutros",
    title: "Neutros",
    description: "Escala de cinzas para backgrounds, textos e borders.",
    colors: [
      {
        token: "--dedois-neutral-0",
        hex: "#FFFFFF",
        usage: "Background principal (light mode)",
      },
      {
        token: "--dedois-neutral-50",
        hex: "#FAFAFA",
        usage: "Background sutil, sidebar",
      },
      {
        token: "--dedois-neutral-100",
        hex: "#F4F4F5",
        usage: "Background de cards, inputs desabilitados",
      },
      {
        token: "--dedois-neutral-200",
        hex: "#E4E4E7",
        usage: "Borders padrão",
      },
      {
        token: "--dedois-neutral-300",
        hex: "#D4D4D8",
        usage: "Borders de elementos interativos",
      },
      {
        token: "--dedois-neutral-400",
        hex: "#A1A1AA",
        usage: "Placeholders, ícones inativos",
      },
      {
        token: "--dedois-neutral-500",
        hex: "#71717A",
        usage: "Texto muted, labels secundários",
      },
      {
        token: "--dedois-neutral-600",
        hex: "#52525B",
        usage: "Texto secundário",
      },
      {
        token: "--dedois-neutral-700",
        hex: "#3F3F46",
        usage: "Texto de corpo em dark mode",
      },
      {
        token: "--dedois-neutral-800",
        hex: "#27272A",
        usage: "Borders em dark mode",
      },
      {
        token: "--dedois-neutral-900",
        hex: "#18181B",
        usage: "Texto principal (light mode)",
      },
      {
        token: "--dedois-neutral-950",
        hex: "#09090B",
        usage: "Background principal (dark mode)",
      },
    ],
  },
  {
    id: "status",
    title: "Status",
    description: "Cores semânticas para feedback e estados do sistema.",
    colors: [
      {
        token: "--dedois-success",
        hex: "#16A34A",
        usage: "Confirmações, ações bem-sucedidas",
      },
      {
        token: "--dedois-success-subtle",
        hex: "#F0FDF4",
        usage: "Background de alertas de sucesso",
      },
      {
        token: "--dedois-success-border",
        hex: "#BBF7D0",
        usage: "Border de alertas de sucesso",
      },
      {
        token: "--dedois-warning",
        hex: "#D97706",
        usage: "Avisos, atenção necessária",
      },
      {
        token: "--dedois-warning-subtle",
        hex: "#FFFBEB",
        usage: "Background de alertas de aviso",
      },
      {
        token: "--dedois-warning-border",
        hex: "#FDE68A",
        usage: "Border de alertas de aviso",
      },
      {
        token: "--dedois-error",
        hex: "#DC2626",
        usage: "Erros, ações destrutivas",
      },
      {
        token: "--dedois-error-subtle",
        hex: "#FEF2F2",
        usage: "Background de alertas de erro",
      },
      {
        token: "--dedois-error-border",
        hex: "#FECACA",
        usage: "Border de alertas de erro",
      },
      {
        token: "--dedois-info",
        hex: "#0284C7",
        usage: "Informações, contexto neutro",
      },
      {
        token: "--dedois-info-subtle",
        hex: "#F0F9FF",
        usage: "Background de alertas informativos",
      },
      {
        token: "--dedois-info-border",
        hex: "#BAE6FD",
        usage: "Border de alertas informativos",
      },
    ],
  },
  {
    id: "suporte",
    title: "Suporte",
    description:
      "Cores de apoio para categorização, tags e elementos visuais complementares.",
    colors: [
      {
        token: "--dedois-support-purple",
        hex: "#7C3AED",
        usage: "Categorias, tags de grupo A",
      },
      {
        token: "--dedois-support-purple-subtle",
        hex: "#F5F3FF",
        usage: "Background de tags roxas",
      },
      {
        token: "--dedois-support-teal",
        hex: "#0D9488",
        usage: "Categorias, tags de grupo B",
      },
      {
        token: "--dedois-support-teal-subtle",
        hex: "#F0FDFA",
        usage: "Background de tags teal",
      },
      {
        token: "--dedois-support-orange",
        hex: "#EA580C",
        usage: "Destaques, badges especiais",
      },
      {
        token: "--dedois-support-orange-subtle",
        hex: "#FFF7ED",
        usage: "Background de badges especiais",
      },
    ],
  },
];

export type SemanticColor = {
  variable: string;
  value: string;
  usage: string;
};

export type SemanticColorGroup = {
  id: string;
  title: string;
  description?: string;
  colors: SemanticColor[];
};

export const semanticColorGroups: SemanticColorGroup[] = [
  {
    id: "sem-backgrounds",
    title: "Backgrounds",
    colors: [
      { variable: "--color-bg", value: "#ffffff", usage: "Background principal" },
      { variable: "--color-bg-subtle", value: "#f9f9f9", usage: "Fundo sutil, seções alternadas" },
      { variable: "--color-bg-muted", value: "#f4f4f5", usage: "Cards, inputs desabilitados" },
      { variable: "--color-bg-sidebar", value: "#fafafa", usage: "Background da sidebar" },
      { variable: "--color-bg-overlay", value: "rgba(0,0,0,0.4)", usage: "Overlay de modais" },
    ],
  },
  {
    id: "sem-text",
    title: "Texto",
    colors: [
      { variable: "--color-text", value: "#18181b", usage: "Texto principal" },
      { variable: "--color-text-secondary", value: "#52525b", usage: "Texto secundário, labels" },
      { variable: "--color-text-muted", value: "#71717a", usage: "Notas, metadados, hints" },
      { variable: "--color-text-placeholder", value: "#a1a1aa", usage: "Placeholders de inputs" },
      { variable: "--color-text-inverted", value: "#ffffff", usage: "Texto sobre fundos escuros" },
    ],
  },
  {
    id: "sem-border",
    title: "Bordas",
    colors: [
      { variable: "--color-border", value: "#e4e4e7", usage: "Border padrão de elementos" },
      { variable: "--color-border-subtle", value: "#f0f0f2", usage: "Border muito sutil, divisores internos" },
    ],
  },
  {
    id: "sem-accent",
    title: "Accent / Brand",
    colors: [
      { variable: "--color-brand-primary", value: "#8ee533", usage: "Cor primária da marca — lime green" },
      { variable: "--color-accent", value: "#0f6839", usage: "Cor de ênfase, links e CTAs" },
      { variable: "--color-accent-hover", value: "#0a5a30", usage: "Estado hover do accent" },
      { variable: "--color-accent-subtle", value: "#f0fdf4", usage: "Background com toque de accent" },
      { variable: "--color-accent-text", value: "#0f6839", usage: "Texto sobre fundos accent subtle" },
      { variable: "--color-nav-active-bg", value: "#f0fdf4", usage: "Background de item ativo na nav" },
      { variable: "--color-nav-active-text", value: "#0f6839", usage: "Texto de item ativo na nav" },
      { variable: "--color-nav-hover-bg", value: "#f4f4f5", usage: "Background hover na nav" },
    ],
  },
  {
    id: "sem-status",
    title: "Status",
    colors: [
      { variable: "--color-success", value: "#16a34a", usage: "Sucesso, confirmação" },
      { variable: "--color-success-subtle", value: "#f0fdf4", usage: "Background de sucesso" },
      { variable: "--color-success-border", value: "#bbf7d0", usage: "Border de sucesso" },
      { variable: "--color-warning", value: "#d97706", usage: "Aviso, atenção necessária" },
      { variable: "--color-warning-subtle", value: "#fffbeb", usage: "Background de aviso" },
      { variable: "--color-warning-border", value: "#fde68a", usage: "Border de aviso" },
      { variable: "--color-error", value: "#dc2626", usage: "Erro, ação destrutiva" },
      { variable: "--color-error-subtle", value: "#fef2f2", usage: "Background de erro" },
      { variable: "--color-error-border", value: "#fecaca", usage: "Border de erro" },
      { variable: "--color-info", value: "#0284c7", usage: "Informação, contexto neutro" },
      { variable: "--color-info-subtle", value: "#f0f9ff", usage: "Background de informação" },
      { variable: "--color-info-border", value: "#bae6fd", usage: "Border de informação" },
    ],
  },
  {
    id: "sem-code",
    title: "Code",
    colors: [
      { variable: "--color-code-bg", value: "#f4f4f5", usage: "Background de blocos de código" },
      { variable: "--color-code-text", value: "#18181b", usage: "Texto dentro de blocos de código" },
      { variable: "--color-code-border", value: "#e4e4e7", usage: "Border de blocos de código" },
    ],
  },
];
