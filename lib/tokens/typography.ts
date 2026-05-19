export type TypeScale = {
  name: string;
  size: string;
  lineHeight: string;
  weight: string;
  usage: string;
};

export type FontFamily = {
  name: string;
  variable: string;
  cssVar: string;
  role: string;
  weights: string;
  source: string;
};

export const fontFamilies: FontFamily[] = [
  {
    name: "Alan Sans",
    variable: "--font-alan-sans",
    cssVar: "--font-sans",
    role: "Heading",
    weights: "300, 400, 500, 600, 700, 800",
    source: "Figma — fonte principal para títulos e headings",
  },
  {
    name: "Albert Sans",
    variable: "--font-albert-sans",
    cssVar: "--font-body",
    role: "Body",
    weights: "300, 400, 500, 600, 700, 800",
    source: "Figma — fonte para corpo de texto, labels e UI",
  },
  {
    name: "Geist Mono",
    variable: "--font-geist-mono",
    cssVar: "--font-mono",
    role: "Code",
    weights: "400, 500",
    source: "Vercel — fonte monoespaçada para código",
  },
];

export const headingScale: TypeScale[] = [
  {
    name: "Heading 1",
    size: "72px (Figma) / 36px (web)",
    lineHeight: "1.11",
    weight: "300–800",
    usage: "Títulos de página, hero sections",
  },
  {
    name: "Heading 2",
    size: "56px (Figma) / 30px (web)",
    lineHeight: "1.14",
    weight: "300–800",
    usage: "Seções principais de conteúdo",
  },
  {
    name: "Heading 3",
    size: "40px (Figma) / 24px (web)",
    lineHeight: "1.20",
    weight: "300–800",
    usage: "Subseções, títulos de cards",
  },
  {
    name: "Heading 4",
    size: "32px (Figma) / 20px (web)",
    lineHeight: "1.25",
    weight: "300–800",
    usage: "Títulos de grupos, labels de seção",
  },
  {
    name: "Heading 5",
    size: "24px (Figma) / 17px (web)",
    lineHeight: "1.33",
    weight: "300–800",
    usage: "Subtítulos, títulos de componentes",
  },
  {
    name: "Heading 6",
    size: "20px (Figma) / 15px (web)",
    lineHeight: "1.40",
    weight: "300–800",
    usage: "Labels destacados, cabeçalhos de tabela",
  },
];

export const bodyScale: TypeScale[] = [
  {
    name: "Body Large",
    size: "18px (Figma) / 17px (web)",
    lineHeight: "1.56",
    weight: "300–800",
    usage: "Textos de destaque, lead paragraphs",
  },
  {
    name: "Body",
    size: "16px (Figma) / 15px (web)",
    lineHeight: "1.50",
    weight: "300–800",
    usage: "Texto de corpo padrão",
  },
  {
    name: "Body Small",
    size: "14px (Figma) / 13px (web)",
    lineHeight: "1.43",
    weight: "300–800",
    usage: "Notas de rodapé, metadados, captions",
  },
  {
    name: "Caption",
    size: "12px",
    lineHeight: "1.33",
    weight: "300–800",
    usage: "Labels de formulários, badges",
  },
  {
    name: "Caption Small",
    size: "10px",
    lineHeight: "1.60",
    weight: "300–800",
    usage: "Tooltips, anotações finas",
  },
];

export type FontSizeToken = {
  token: string;
  variable: string;
  value: string;
  usage: string;
};

export const fontSizeTokens: FontSizeToken[] = [
  { token: "xs", variable: "--text-xs", value: "11px", usage: "Labels muito pequenos, tooltips" },
  { token: "sm", variable: "--text-sm", value: "13px", usage: "Captions, notas, metadados" },
  { token: "base", variable: "--text-base", value: "15px", usage: "Corpo de texto padrão" },
  { token: "lg", variable: "--text-lg", value: "17px", usage: "Texto de destaque, lead" },
  { token: "xl", variable: "--text-xl", value: "20px", usage: "Heading 4 / subtítulos" },
  { token: "2xl", variable: "--text-2xl", value: "24px", usage: "Heading 3" },
  { token: "3xl", variable: "--text-3xl", value: "30px", usage: "Heading 2" },
  { token: "4xl", variable: "--text-4xl", value: "36px", usage: "Heading 1" },
];
