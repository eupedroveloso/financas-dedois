export type ShadowToken = {
  token: string;
  variable: string;
  value: string;
  elevation: string;
  usage: string;
};

export const shadowScale: ShadowToken[] = [
  {
    token: "xs",
    variable: "--shadow-xs",
    value: "0 1px 2px 0 rgb(0 0 0 / 0.06)",
    elevation: "1",
    usage: "Hover de elementos inline, separação sutil",
  },
  {
    token: "sm",
    variable: "--shadow-sm",
    value: "0 2px 4px 0 rgb(0 0 0 / 0.08)",
    elevation: "2",
    usage: "Cards padrão, inputs em foco",
  },
  {
    token: "md",
    variable: "--shadow-md",
    value: "0 4px 8px 0 rgb(0 0 0 / 0.10)",
    elevation: "3",
    usage: "Dropdowns, tooltips, popovers",
  },
  {
    token: "lg",
    variable: "--shadow-lg",
    value: "0 8px 16px -4px rgb(0 0 0 / 0.14)",
    elevation: "4",
    usage: "Modais, sheets, painéis flutuantes",
  },
  {
    token: "xl",
    variable: "--shadow-xl",
    value: "0 16px 24px -4px rgb(0 0 0 / 0.18)",
    elevation: "5",
    usage: "Overlays de contexto, command palette",
  },
  {
    token: "2xl",
    variable: "--shadow-2xl",
    value: "0 24px 48px -8px rgb(0 0 0 / 0.24)",
    elevation: "6",
    usage: "Elementos de máxima elevação, full-screen overlays",
  },
  {
    token: "inner",
    variable: "--shadow-inner",
    value: "inset 0 2px 4px 0 rgb(0 0 0 / 0.08)",
    elevation: "—",
    usage: "Inputs, wells, campos deprimidos",
  },
];
