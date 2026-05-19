import { spacingScale } from "@/lib/tokens/spacing";
import styles from "./TokenTablePage.module.css";

export default function SpacingPage() {
  return (
    <div className={styles.page}>
      <section id="escala" className={styles.section}>
        <h2 className={styles.sectionTitle}>Escala</h2>
        <p className={styles.sectionDesc}>
          Tokens de espaçamento baseados em múltiplos de 4px. Utilize as
          variáveis CSS na implementação dos componentes.
        </p>

        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Token</th>
                <th>Variável CSS</th>
                <th>px</th>
                <th>rem</th>
                <th>Prévia</th>
                <th>Uso</th>
              </tr>
            </thead>
            <tbody>
              {spacingScale.map((row) => (
                <tr key={row.token}>
                  <td>
                    <code className={styles.code}>space-{row.token}</code>
                  </td>
                  <td>
                    <code className={styles.code}>{row.variable}</code>
                  </td>
                  <td>
                    <code className={styles.code}>{row.px}</code>
                  </td>
                  <td className={styles.dim}>{row.rem}</td>
                  <td>
                    <div
                      className={styles.spacingBar}
                      style={{ width: row.px }}
                      title={row.px}
                    />
                  </td>
                  <td className={styles.usageCell}>{row.usage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section id="uso" className={styles.section}>
        <h2 className={styles.sectionTitle}>Como usar</h2>
        <div className={styles.codeBlock}>
          <pre>{`.element {
  padding: var(--space-4) var(--space-6);
  gap: var(--space-3);
  margin-bottom: var(--space-8);
}`}</pre>
        </div>
        <p className={styles.note}>
          Evite usar valores de px arbitrários. Prefira sempre os tokens da
          escala para manter consistência visual entre componentes.
        </p>
      </section>
    </div>
  );
}
