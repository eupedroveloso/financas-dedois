import { headingScale, bodyScale, fontFamilies, fontSizeTokens } from "@/lib/tokens/typography";
import styles from "./TypographyPage.module.css";

export default function TypographyPage() {
  return (
    <div className={styles.page}>
      {/* Font families */}
      <section id="familias" className={styles.section}>
        <h2 className={styles.sectionTitle}>Famílias tipográficas</h2>
        <p className={styles.sectionDesc}>
          O Dedois usa duas famílias do Figma: <strong>Alan Sans</strong> para headings e{" "}
          <strong>Albert Sans</strong> para corpo de texto.
        </p>

        <div className={styles.familyGrid}>
          {fontFamilies.map((f) => (
            <div key={f.name} className={styles.familyCard}>
              <div className={styles.familySample} style={{ fontFamily: f.name }}>
                Aa
              </div>
              <div className={styles.familyInfo}>
                <strong className={styles.familyName}>{f.name}</strong>
                <span className={styles.familyRole}>{f.role}</span>
                <code className={styles.familyVar}>{f.cssVar}</code>
                <span className={styles.familyWeights}>Pesos: {f.weights}</span>
                <span className={styles.familySource}>{f.source}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Live heading examples */}
      <section id="headings" className={styles.section}>
        <h2 className={styles.sectionTitle}>Headings</h2>
        <p className={styles.sectionDesc}>
          Escala tipográfica de h1 a h6, renderizada ao vivo com Alan Sans.
        </p>

        <div className={styles.liveBlock}>
          <h1 className={styles.demoH1}>Heading 1 — Título de página</h1>
          <h2 className={styles.demoH2}>Heading 2 — Seção principal</h2>
          <h3 className={styles.demoH3}>Heading 3 — Subseção</h3>
          <h4 className={styles.demoH4}>Heading 4 — Título de grupo</h4>
          <h5 className={styles.demoH5}>Heading 5 — Subtítulo</h5>
          <h6 className={styles.demoH6}>Heading 6 — Label destacado</h6>
        </div>
      </section>

      {/* Heading scale table */}
      <section className={styles.section}>
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Tamanho</th>
                <th>Line-height</th>
                <th>Pesos</th>
                <th>Uso recomendado</th>
              </tr>
            </thead>
            <tbody>
              {headingScale.map((row) => (
                <tr key={row.name}>
                  <td>
                    <code className={styles.code}>{row.name}</code>
                  </td>
                  <td>
                    <code className={styles.code}>{row.size}</code>
                  </td>
                  <td>{row.lineHeight}</td>
                  <td>{row.weight}</td>
                  <td className={styles.usageCell}>{row.usage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Body scale */}
      <section id="body" className={styles.section}>
        <h2 className={styles.sectionTitle}>Body</h2>
        <p className={styles.sectionDesc}>
          Escala de texto para corpo, labels e notas — Albert Sans.
        </p>

        <div className={styles.bodyDemo}>
          <div className={styles.bodyRow}>
            <span className={styles.bodyLabel}>Large</span>
            <p className={styles.demoBodyLg}>
              Texto de corpo large — Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Sed do eiusmod tempor incididunt.
            </p>
          </div>
          <div className={styles.bodyRow}>
            <span className={styles.bodyLabel}>Body</span>
            <p className={styles.demoBodyMd}>
              Texto de corpo padrão — Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Sed do eiusmod tempor incididunt.
            </p>
          </div>
          <div className={styles.bodyRow}>
            <span className={styles.bodyLabel}>Small</span>
            <p className={styles.demoBodySm}>
              Texto small — Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Sed do eiusmod tempor incididunt.
            </p>
          </div>
          <div className={styles.bodyRow}>
            <span className={styles.bodyLabel}>Caption</span>
            <p className={styles.demoBodyXs}>
              Caption — Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </section>

      {/* Body scale table */}
      <section className={styles.section}>
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Tamanho</th>
                <th>Line-height</th>
                <th>Pesos</th>
                <th>Uso recomendado</th>
              </tr>
            </thead>
            <tbody>
              {bodyScale.map((row) => (
                <tr key={row.name}>
                  <td>
                    <code className={styles.code}>{row.name}</code>
                  </td>
                  <td>
                    <code className={styles.code}>{row.size}</code>
                  </td>
                  <td>{row.lineHeight}</td>
                  <td>{row.weight}</td>
                  <td className={styles.usageCell}>{row.usage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* CSS variables — font size tokens */}
      <section id="tabela" className={styles.section}>
        <h2 className={styles.sectionTitle}>Variáveis CSS — tamanhos</h2>
        <p className={styles.sectionDesc}>
          Tokens de tamanho de texto definidos em <code className={styles.code}>globals.css</code>.
          Use estas variáveis diretamente nos CSS Modules.
        </p>
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Token</th>
                <th>Variável CSS</th>
                <th>Valor</th>
                <th>Uso</th>
              </tr>
            </thead>
            <tbody>
              {fontSizeTokens.map((row) => (
                <tr key={row.token}>
                  <td>
                    <code className={styles.code}>{row.token}</code>
                  </td>
                  <td>
                    <code className={styles.code}>{row.variable}</code>
                  </td>
                  <td>
                    <code className={styles.code}>{row.value}</code>
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
