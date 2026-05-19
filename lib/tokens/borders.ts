export type RadiusToken = {
  token: string;
  variable: string;
  value: string;
  usage: string;
};

export type BorderWidthToken = {
  token: string;
  variable: string;
  value: string;
  usage: string;
};

export const radiusScale: RadiusToken[] = [
  { token: "sm", variable: "--radius-sm", value: "4px", usage: "Badges, chips, inputs pequenos" },
  { token: "md", variable: "--radius-md", value: "6px", usage: "Botões, inputs padrão, dropdowns" },
  { token: "lg", variable: "--radius-lg", value: "8px", usage: "Cards, painéis, modais pequenos" },
  { token: "xl", variable: "--radius-xl", value: "12px", usage: "Cards maiores, painéis de destaque" },
  { token: "2xl", variable: "--radius-2xl", value: "16px", usage: "Modais, sheets, overlays" },
  { token: "full", variable: "--radius-full", value: "9999px", usage: "Pílulas, avatares, toggles" },
];

export const borderWidthScale: BorderWidthToken[] = [
  { token: "1", variable: "--border-1", value: "1px", usage: "Border padrão de todos os elementos" },
  { token: "2", variable: "--border-2", value: "2px", usage: "Border de foco, elementos selecionados" },
];
