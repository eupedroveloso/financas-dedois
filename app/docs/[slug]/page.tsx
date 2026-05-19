import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { navigation, getNavItem } from "@/lib/navigation";
import { docPages } from "@/lib/docs";
import TableOfContents from "@/components/TableOfContents/TableOfContents";
import PageNav from "@/components/PageNav/PageNav";
import ColorsPage from "@/components/pages/ColorsPage";
import TypographyPage from "@/components/pages/TypographyPage";
import SpacingPage from "@/components/pages/SpacingPage";
import BordersPage from "@/components/pages/BordersPage";
import ShadowsPage from "@/components/pages/ShadowsPage";
import LogoPage from "@/components/pages/LogoPage";
import ComponentPlaceholder from "@/components/pages/ComponentPlaceholder";
import styles from "./page.module.css";

export function generateStaticParams() {
  return navigation.flatMap((section) =>
    section.items.map((item) => ({ slug: item.slug }))
  );
}

export async function generateMetadata(
  props: PageProps<"/docs/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const meta = docPages[slug];
  if (!meta) return {};
  return {
    title: meta.title,
    description: meta.description,
  };
}

export default async function DocPage(props: PageProps<"/docs/[slug]">) {
  const { slug } = await props.params;
  const meta = docPages[slug];

  if (!meta) notFound();

  const navItem = getNavItem(slug);
  const section = navigation.find((s) => s.items.some((i) => i.slug === slug));

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        {/* Breadcrumb */}
        {section && (
          <div className={styles.breadcrumb} aria-label="Navegação estrutural">
            <span className={styles.breadcrumbItem}>Dedois Docs</span>
            <span className={styles.breadcrumbSep} aria-hidden="true">/</span>
            <span className={styles.breadcrumbItem}>{section.title}</span>
          </div>
        )}

        {/* Page header */}
        <header className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>{meta.title}</h1>
          {meta.description && (
            <p className={styles.pageDesc}>{meta.description}</p>
          )}
        </header>

        {/* Page content */}
        <PageContent slug={slug} toc={meta.toc} />

        {/* Page navigation */}
        {navItem && (
          <PageNav prev={navItem.prev} next={navItem.next} />
        )}
      </div>

      {/* Table of Contents */}
      <div className={styles.tocColumn}>
        <TableOfContents items={meta.toc} />
      </div>
    </div>
  );
}

function PageContent({
  slug,
  toc,
}: {
  slug: string;
  toc: Array<{ id: string; title: string; level: 2 | 3 }>;
}) {
  switch (slug) {
    case "o-que-e-o-dedois":
      return <IntroductionPage />;
    case "como-usar":
      return <HowToUsePage />;
    case "cores":
      return <ColorsPage />;
    case "tipografia":
      return <TypographyPage />;
    case "espacamento":
      return <SpacingPage />;
    case "bordas":
      return <BordersPage />;
    case "sombras":
      return <ShadowsPage />;
    case "logo":
      return <LogoPage />;
    default:
      return (
        <ComponentPlaceholder
          componentName={slug.charAt(0).toUpperCase() + slug.slice(1)}
          toc={toc}
        />
      );
  }
}

function IntroductionPage() {
  return (
    <div>
      <section id="visao-geral" style={{ scrollMarginTop: "calc(var(--header-height) + 24px)" }}>
        <InlineH2>Visão geral</InlineH2>
        <InlineP>
          O <strong>Dedois</strong> é [descrição do produto a ser preenchida].
          Esta documentação descreve as fundações do design system que sustenta
          sua interface.
        </InlineP>
        <InlineP>
          O design system do Dedois é construído sobre um conjunto de tokens de
          design — cores, tipografia, espaçamento, bordas e sombras — que
          garantem consistência visual e semântica em toda a aplicação.
        </InlineP>
      </section>

      <section id="design-system" style={{ scrollMarginTop: "calc(var(--header-height) + 24px)", marginTop: "var(--space-10)" }}>
        <InlineH2>Design system</InlineH2>
        <InlineP>
          Um design system é um conjunto de padrões reutilizáveis — componentes,
          guias de estilo e documentação — que permite construir interfaces com
          consistência e eficiência.
        </InlineP>
        <InlineP>
          O Dedois Docs documenta as <strong>fundações</strong> (tokens de
          design) e os <strong>componentes</strong> do sistema. É o ponto de
          referência para decisões de design e implementação.
        </InlineP>
        <InlineCallout>
          Esta documentação está em construção. As seções marcadas como
          placeholder serão preenchidas à medida que o design system evolui.
        </InlineCallout>
      </section>

      <section id="principios" style={{ scrollMarginTop: "calc(var(--header-height) + 24px)", marginTop: "var(--space-10)" }}>
        <InlineH2>Princípios</InlineH2>
        <InlinePrinciples />
      </section>
    </div>
  );
}

function HowToUsePage() {
  return (
    <div>
      <section id="estrutura" style={{ scrollMarginTop: "calc(var(--header-height) + 24px)" }}>
        <InlineH2>Estrutura</InlineH2>
        <InlineP>
          A documentação está organizada em quatro seções principais:
        </InlineP>
        <ul style={{ paddingLeft: "var(--space-5)", lineHeight: "var(--leading-loose)", color: "var(--color-text-secondary)", fontSize: "var(--text-base)" }}>
          <li><strong>Introdução</strong> — Contexto e guia de uso</li>
          <li><strong>Fundações</strong> — Tokens de design: cores, tipografia, espaçamento, bordas e sombras</li>
          <li><strong>Brand</strong> — Logo e identidade visual</li>
          <li><strong>Componentes</strong> — UI components do Dedois</li>
        </ul>
      </section>

      <section id="tokens" style={{ scrollMarginTop: "calc(var(--header-height) + 24px)", marginTop: "var(--space-10)" }}>
        <InlineH2>Tokens de design</InlineH2>
        <InlineP>
          Os tokens de design são variáveis CSS definidas em{" "}
          <InlineCode>:root</InlineCode> no arquivo{" "}
          <InlineCode>app/globals.css</InlineCode>. Use-os diretamente nos seus
          CSS Modules:
        </InlineP>
        <InlineCodeBlock>{`.meuComponente {
  color: var(--color-text);
  background: var(--color-bg-subtle);
  padding: var(--space-4) var(--space-6);
  border-radius: var(--radius-lg);
  border: var(--border-1) solid var(--color-border);
}`}</InlineCodeBlock>
      </section>

      <section id="contribuindo" style={{ scrollMarginTop: "calc(var(--header-height) + 24px)", marginTop: "var(--space-10)" }}>
        <InlineH2>Contribuindo</InlineH2>
        <InlineP>
          Para adicionar ou atualizar conteúdo desta documentação, edite os
          arquivos em <InlineCode>lib/tokens/</InlineCode> para tokens e{" "}
          <InlineCode>components/pages/</InlineCode> para os componentes de
          página.
        </InlineP>
      </section>
    </div>
  );
}

/* Inline content helpers — avoids creating separate files for simple text pages */

function InlineH2({ children }: { children: React.ReactNode }) {
  return (
    <h2 style={{
      margin: "0 0 var(--space-3)",
      fontSize: "var(--text-xl)",
      fontWeight: 600,
      color: "var(--color-text)",
      letterSpacing: "-0.01em",
      lineHeight: "var(--leading-tight)",
    }}>
      {children}
    </h2>
  );
}

function InlineP({ children }: { children: React.ReactNode }) {
  return (
    <p style={{
      margin: "0 0 var(--space-4)",
      fontSize: "var(--text-base)",
      color: "var(--color-text-secondary)",
      lineHeight: "var(--leading-relaxed)",
    }}>
      {children}
    </p>
  );
}

function InlineCode({ children }: { children: React.ReactNode }) {
  return (
    <code style={{
      fontFamily: "var(--font-mono)",
      fontSize: "0.875em",
      background: "var(--color-code-bg)",
      color: "var(--color-text-secondary)",
      padding: "1px 5px",
      borderRadius: "var(--radius-sm)",
    }}>
      {children}
    </code>
  );
}

function InlineCodeBlock({ children }: { children: React.ReactNode }) {
  return (
    <pre style={{
      margin: "var(--space-4) 0",
      padding: "var(--space-5) var(--space-6)",
      background: "var(--color-code-bg)",
      border: "var(--border-1) solid var(--color-code-border)",
      borderRadius: "var(--radius-lg)",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-sm)",
      color: "var(--color-code-text)",
      lineHeight: "var(--leading-relaxed)",
      overflowX: "auto",
    }}>
      <code>{children}</code>
    </pre>
  );
}

function InlineCallout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      padding: "var(--space-4) var(--space-5)",
      background: "var(--color-info-subtle)",
      border: "var(--border-1) solid var(--color-info-border)",
      borderRadius: "var(--radius-lg)",
      fontSize: "var(--text-sm)",
      color: "var(--color-text-secondary)",
      lineHeight: "var(--leading-relaxed)",
    }}>
      {children}
    </div>
  );
}

const principles = [
  {
    title: "Consistência",
    desc: "Use sempre os tokens do sistema. Evite valores arbitrários.",
  },
  {
    title: "Clareza",
    desc: "Interfaces claras e previsíveis reduzem carga cognitiva.",
  },
  {
    title: "Acessibilidade",
    desc: "Todos os componentes devem atender aos critérios WCAG 2.1 AA.",
  },
  {
    title: "Escalabilidade",
    desc: "Componentes devem ser compostos, não monolíticos.",
  },
];

function InlinePrinciples() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "var(--space-4)" }}>
      {principles.map((p) => (
        <div
          key={p.title}
          style={{
            padding: "var(--space-5)",
            border: "var(--border-1) solid var(--color-border)",
            borderRadius: "var(--radius-lg)",
            background: "var(--color-bg-subtle)",
          }}
        >
          <strong style={{ display: "block", fontSize: "var(--text-sm)", fontWeight: 600, color: "var(--color-text)", marginBottom: "var(--space-1)" }}>
            {p.title}
          </strong>
          <p style={{ margin: 0, fontSize: "var(--text-sm)", color: "var(--color-text-muted)", lineHeight: "var(--leading-snug)" }}>
            {p.desc}
          </p>
        </div>
      ))}
    </div>
  );
}
