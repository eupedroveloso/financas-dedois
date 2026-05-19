export type TocItem = {
  id: string;
  title: string;
  level: 2 | 3;
};

export type DocMeta = {
  title: string;
  description: string;
  toc: TocItem[];
};

export const docPages: Record<string, DocMeta> = {
  "o-que-e-o-dedois": {
    title: "O que é o Dedois",
    description: "Visão geral do Dedois e do seu design system.",
    toc: [
      { id: "visao-geral", title: "Visão geral", level: 2 },
      { id: "design-system", title: "Design system", level: 2 },
      { id: "principios", title: "Princípios", level: 2 },
    ],
  },
  "como-usar": {
    title: "Como usar esta documentação",
    description: "Guia de uso da documentação do Dedois Docs.",
    toc: [
      { id: "estrutura", title: "Estrutura", level: 2 },
      { id: "tokens", title: "Tokens de design", level: 2 },
      { id: "contribuindo", title: "Contribuindo", level: 2 },
    ],
  },
  cores: {
    title: "Cores",
    description:
      "Paleta completa de cores do Dedois: brand, neutros, status e suporte.",
    toc: [
      { id: "brand", title: "Brand", level: 2 },
      { id: "neutros", title: "Neutros", level: 2 },
      { id: "status", title: "Status", level: 2 },
      { id: "suporte", title: "Suporte", level: 2 },
      { id: "css-variables", title: "Variáveis CSS", level: 2 },
    ],
  },
  tipografia: {
    title: "Tipografia",
    description:
      "Escala tipográfica, pesos e hierarquia visual do Dedois.",
    toc: [
      { id: "familias", title: "Famílias tipográficas", level: 2 },
      { id: "headings", title: "Headings", level: 2 },
      { id: "body", title: "Body", level: 2 },
      { id: "tabela", title: "Variáveis CSS — tamanhos", level: 2 },
    ],
  },
  espacamento: {
    title: "Espaçamento",
    description: "Escala de spacing tokens do Dedois.",
    toc: [
      { id: "escala", title: "Escala", level: 2 },
      { id: "uso", title: "Como usar", level: 2 },
    ],
  },
  bordas: {
    title: "Bordas",
    description: "Border radius e border width do Dedois.",
    toc: [
      { id: "border-radius", title: "Border radius", level: 2 },
      { id: "border-width", title: "Border width", level: 2 },
    ],
  },
  sombras: {
    title: "Sombras",
    description: "Escala de elevation e box shadows do Dedois.",
    toc: [
      { id: "elevation", title: "Elevation scale", level: 2 },
      { id: "inner", title: "Inner shadow", level: 2 },
    ],
  },
  logo: {
    title: "Logo",
    description: "Variações do logo do Dedois e guia de uso.",
    toc: [
      { id: "variacoes", title: "Variações", level: 2 },
      { id: "uso-correto", title: "Uso correto", level: 2 },
      { id: "uso-incorreto", title: "Uso incorreto", level: 2 },
    ],
  },
  button: {
    title: "Button",
    description: "Componente de botão do design system Dedois.",
    toc: [
      { id: "variantes", title: "Variantes", level: 2 },
      { id: "tamanhos", title: "Tamanhos", level: 2 },
      { id: "estados", title: "Estados", level: 2 },
      { id: "api", title: "API", level: 2 },
    ],
  },
  input: {
    title: "Input",
    description: "Componente de campo de texto do design system Dedois.",
    toc: [
      { id: "variantes", title: "Variantes", level: 2 },
      { id: "estados", title: "Estados", level: 2 },
      { id: "api", title: "API", level: 2 },
    ],
  },
  badge: {
    title: "Badge",
    description: "Componente de badge e tag do design system Dedois.",
    toc: [
      { id: "variantes", title: "Variantes", level: 2 },
      { id: "tamanhos", title: "Tamanhos", level: 2 },
      { id: "api", title: "API", level: 2 },
    ],
  },
  card: {
    title: "Card",
    description: "Componente de card do design system Dedois.",
    toc: [
      { id: "variantes", title: "Variantes", level: 2 },
      { id: "composicao", title: "Composição", level: 2 },
      { id: "api", title: "API", level: 2 },
    ],
  },
};
