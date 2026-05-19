import { colorGroups, semanticColorGroups } from "@/lib/tokens/colors";
import ColorSwatch from "./ColorSwatch";
import SemanticSwatch from "./SemanticSwatch";
import styles from "./ColorsPage.module.css";

export default function ColorsPage() {
  return (
    <div className={styles.page}>
      {/* Paleta primitiva do Figma */}
      {colorGroups.map((group) => (
        <section key={group.id} id={group.id} className={styles.group}>
          <div className={styles.groupHeader}>
            <h2 className={styles.groupTitle}>{group.title}</h2>
            {group.description && (
              <p className={styles.groupDesc}>{group.description}</p>
            )}
          </div>
          <div className={styles.swatches}>
            {group.colors.map((color) => (
              <ColorSwatch
                key={color.token}
                token={color.token}
                hex={color.hex}
                usage={color.usage}
              />
            ))}
          </div>
        </section>
      ))}

      {/* Variáveis CSS semânticas */}
      <section id="css-variables" className={styles.group}>
        <div className={styles.groupHeader}>
          <h2 className={styles.groupTitle}>Variáveis CSS</h2>
          <p className={styles.groupDesc}>
            Variáveis CSS custom properties definidas em <code className={styles.inlineCode}>:root</code> no{" "}
            <code className={styles.inlineCode}>app/globals.css</code>. Use estas variáveis nos seus CSS Modules.
          </p>
        </div>

        <div className={styles.semanticSections}>
          {semanticColorGroups.map((group) => (
            <div key={group.id} className={styles.semanticGroup}>
              <h3 className={styles.semanticGroupTitle}>{group.title}</h3>
              <div className={styles.swatches}>
                {group.colors.map((color) => (
                  <SemanticSwatch
                    key={color.variable}
                    variable={color.variable}
                    value={color.value}
                    usage={color.usage}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
