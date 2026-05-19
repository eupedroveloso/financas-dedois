import styles from "./ComponentPlaceholder.module.css";

type Props = {
  componentName: string;
  toc: Array<{ id: string; title: string }>;
};

export default function ComponentPlaceholder({ componentName, toc }: Props) {
  return (
    <div className={styles.page}>
      <div className={styles.wip}>
        <span className={styles.wipIcon}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5" />
            <line x1="10" y1="6" x2="10" y2="11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="10" cy="14" r="0.75" fill="currentColor" />
          </svg>
        </span>
        <div>
          <strong className={styles.wipTitle}>Documentação em desenvolvimento</strong>
          <p className={styles.wipDesc}>
            O componente <strong>{componentName}</strong> ainda não foi
            documentado. Esta página será atualizada quando o componente estiver
            definido no design system do Dedois.
          </p>
        </div>
      </div>

      {toc.map((section) => (
        <section key={section.id} id={section.id} className={styles.section}>
          <h2 className={styles.sectionTitle}>{section.title}</h2>
          <div className={styles.placeholder}>
            <span className={styles.placeholderLabel}>Conteúdo a ser preenchido</span>
          </div>
        </section>
      ))}
    </div>
  );
}
