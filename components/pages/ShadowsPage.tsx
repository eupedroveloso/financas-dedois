import { shadowScale } from "@/lib/tokens/shadows";
import styles from "./TokenTablePage.module.css";

export default function ShadowsPage() {
  const dropShadows = shadowScale.filter((s) => s.token !== "inner");
  const innerShadow = shadowScale.find((s) => s.token === "inner");

  return (
    <div className={styles.page}>
      <section id="elevation" className={styles.section}>
        <h2 className={styles.sectionTitle}>Elevation scale</h2>
        <p className={styles.sectionDesc}>
          Sombras extraídas do Figma, organizadas por nível de elevação. Elevações maiores indicam
          elementos mais próximos do usuário na hierarquia visual.
        </p>

        <div className={styles.shadowGrid}>
          {dropShadows.map((row) => (
            <div key={row.token} className={styles.shadowCard}>
              <div
                className={styles.shadowBox}
                style={{ boxShadow: row.value }}
              />
              <div className={styles.shadowInfo}>
                <code className={styles.code}>shadow-{row.token}</code>
                <span className={styles.elevation}>Elevation {row.elevation}</span>
                <span className={styles.usageInline}>{row.usage}</span>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.tableWrap} style={{ marginTop: "var(--space-8)" }}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Token</th>
                <th>Variável CSS</th>
                <th>Valor (Figma)</th>
                <th>Elevação</th>
                <th>Uso</th>
              </tr>
            </thead>
            <tbody>
              {shadowScale.map((row) => (
                <tr key={row.token}>
                  <td>
                    <code className={styles.code}>shadow-{row.token}</code>
                  </td>
                  <td>
                    <code className={styles.code}>{row.variable}</code>
                  </td>
                  <td>
                    <code className={styles.code}>{row.value}</code>
                  </td>
                  <td className={styles.dim}>{row.elevation}</td>
                  <td className={styles.usageCell}>{row.usage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {innerShadow && (
        <section id="inner" className={styles.section}>
          <h2 className={styles.sectionTitle}>Inner shadow</h2>
          <p className={styles.sectionDesc}>
            Sombra interna para inputs, wells e campos deprimidos.
          </p>

          <div className={styles.shadowGrid} style={{ maxWidth: 240 }}>
            <div className={styles.shadowCard}>
              <div
                className={styles.shadowBox}
                style={{ boxShadow: innerShadow.value }}
              />
              <div className={styles.shadowInfo}>
                <code className={styles.code}>shadow-inner</code>
                <span className={styles.usageInline}>{innerShadow.usage}</span>
              </div>
            </div>
          </div>

          <div className={styles.codeBlock} style={{ marginTop: "var(--space-5)" }}>
            <pre>{`box-shadow: var(--shadow-inner);`}</pre>
          </div>
        </section>
      )}
    </div>
  );
}
