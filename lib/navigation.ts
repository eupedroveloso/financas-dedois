export type NavItem = {
  title: string;
  slug: string;
};

export type NavSection = {
  title: string;
  items: NavItem[];
};

export const navigation: NavSection[] = [
  {
    title: "Introdução",
    items: [
      { title: "O que é o Dedois", slug: "o-que-e-o-dedois" },
      { title: "Como usar esta documentação", slug: "como-usar" },
    ],
  },
  {
    title: "Fundações",
    items: [
      { title: "Cores", slug: "cores" },
      { title: "Tipografia", slug: "tipografia" },
      { title: "Espaçamento", slug: "espacamento" },
      { title: "Bordas", slug: "bordas" },
      { title: "Sombras", slug: "sombras" },
    ],
  },
  {
    title: "Brand",
    items: [{ title: "Logo", slug: "logo" }],
  },
  {
    title: "Componentes",
    items: [
      { title: "Button", slug: "button" },
      { title: "Input", slug: "input" },
      { title: "Badge", slug: "badge" },
      { title: "Card", slug: "card" },
    ],
  },
];

export type FlatNavItem = NavItem & { prev: NavItem | null; next: NavItem | null };

export function getFlatNav(): FlatNavItem[] {
  const flat = navigation.flatMap((s) => s.items);
  return flat.map((item, i) => ({
    ...item,
    prev: flat[i - 1] ?? null,
    next: flat[i + 1] ?? null,
  }));
}

export function getNavItem(slug: string): FlatNavItem | undefined {
  return getFlatNav().find((item) => item.slug === slug);
}
