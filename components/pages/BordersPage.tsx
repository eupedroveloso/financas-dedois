import { radiusScale, borderWidthScale } from "@/lib/tokens/borders";
import styles from "./TokenTablePage.module.css";

export default function BordersPage() {
  return (
    <div className={styles.page}>
      <section id="border-radius" className={styles.section}>
        <h2 className={styles.sectionTitle}>Border Radius</h2>
        <p className={styles.sectionDesc}>
          Escala de arredondamento para cantos de elementos.
        </p>

        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Token</th>
                <th>Variável CSS</th>
                <th>Valor</th>
                <th>Prévia</th>
                <th>Uso</th>
              </tr>
            </thead>
            <tbody>
              {radiusScale.map((row) => (
                <tr key={row.token}>
                  <td>
                    <code className={styles.code}>radius-{row.token}</code>
                  </td>
                  <td>
                    <code className={styles.code}>{row.variable}</code>
                  </td>
                  <td>
                    <code className={styles.code}>{row.value}</code>
                  </td>
                  <td>
                    <div
                      className={styles.radiusBox}
                      style={{ borderRadius: row.value }}
                    />
                  </td>
                  <td className={styles.usageCell}>{row.usage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section id="border-width" className={styles.section}>
        <h2 className={styles.sectionTitle}>Border Width</h2>
        <p className={styles.sectionDesc}>
          Espessura de bordas disponíveis no sistema.
        </p>

        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Token</th>
                <th>Variável CSS</th>
                <th>Valor</th>
                <th>Prévia</th>
                <th>Uso</th>
              </tr>
            </thead>
            <tbody>
              {borderWidthScale.map((row) => (
                <tr key={row.token}>
                  <td>
                    <code className={styles.code}>border-{row.token}</code>
                  </td>
                  <td>
                    <code className={styles.code}>{row.variable}</code>
                  </td>
                  <td>
                    <code className={styles.code}>{row.value}</code>
                  </td>
                  <td>
                    <div
                      className={styles.borderBox}
                      style={{ borderWidth: row.value }}
                    />
                  </td>
                  <td className={styles.usageCell}>{row.usage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
