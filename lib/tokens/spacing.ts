export type SpacingToken = {
  token: string;
  variable: string;
  px: string;
  rem: string;
  usage: string;
};

export const spacingScale: SpacingToken[] = [
  { token: "1", variable: "--space-1", px: "4px", rem: "0.25rem", usage: "Gaps mínimos, padding inline de badges" },
  { token: "2", variable: "--space-2", px: "8px", rem: "0.5rem", usage: "Padding de chips, gaps entre ícones e texto" },
  { token: "3", variable: "--space-3", px: "12px", rem: "0.75rem", usage: "Padding de botões pequenos, gaps em listas compactas" },
  { token: "4", variable: "--space-4", px: "16px", rem: "1rem", usage: "Padding de botões, gaps padrão entre elementos" },
  { token: "5", variable: "--space-5", px: "20px", rem: "1.25rem", usage: "Padding de cards pequenos, gaps em formulários" },
  { token: "6", variable: "--space-6", px: "24px", rem: "1.5rem", usage: "Padding padrão de cards e painéis" },
  { token: "7", variable: "--space-7", px: "28px", rem: "1.75rem", usage: "Padding de seções compactas" },
  { token: "8", variable: "--space-8", px: "32px", rem: "2rem", usage: "Gaps entre grupos de elementos" },
  { token: "10", variable: "--space-10", px: "40px", rem: "2.5rem", usage: "Espaçamento entre seções de conteúdo" },
  { token: "12", variable: "--space-12", px: "48px", rem: "3rem", usage: "Padding de seções de página" },
  { token: "14", variable: "--space-14", px: "56px", rem: "3.5rem", usage: "Altura de elementos fixos (header)" },
  { token: "16", variable: "--space-16", px: "64px", rem: "4rem", usage: "Espaçamento entre blocos maiores" },
  { token: "20", variable: "--space-20", px: "80px", rem: "5rem", usage: "Padding de seções hero" },
  { token: "24", variable: "--space-24", px: "96px", rem: "6rem", usage: "Espaçamento de seções de página completas" },
];
