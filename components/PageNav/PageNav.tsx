import Link from "next/link";
import type { NavItem } from "@/lib/navigation";
import styles from "./PageNav.module.css";

type Props = {
  prev: NavItem | null;
  next: NavItem | null;
};

export default function PageNav({ prev, next }: Props) {
  if (!prev && !next) return null;

  return (
    <nav className={styles.nav} aria-label="Navegação entre páginas">
      <div className={styles.inner}>
        {prev ? (
          <Link href={`/docs/${prev.slug}`} className={`${styles.link} ${styles.prev}`}>
            <span className={styles.label}>
              <ArrowLeft />
              Anterior
            </span>
            <span className={styles.title}>{prev.title}</span>
          </Link>
        ) : (
          <div />
        )}

        {next ? (
          <Link href={`/docs/${next.slug}`} className={`${styles.link} ${styles.next}`}>
            <span className={styles.label}>
              Próximo
              <ArrowRight />
            </span>
            <span className={styles.title}>{next.title}</span>
          </Link>
        ) : (
          <div />
        )}
      </div>
    </nav>
  );
}

function ArrowLeft() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
