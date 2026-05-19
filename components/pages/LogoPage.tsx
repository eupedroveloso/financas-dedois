import Logo from "@/components/Logo/Logo";
import styles from "./LogoPage.module.css";

export default function LogoPage() {
  return (
    <div className={styles.page}>
      <section id="variacoes" className={styles.section}>
        <h2 className={styles.sectionTitle}>Variações</h2>
        <p className={styles.sectionDesc}>
          O logo do Dedois possui variações para diferentes fundos e contextos.
        </p>

        <div className={styles.grid}>
          <div className={styles.logoCard}>
            <div className={styles.logoArea + " " + styles.light}>
              <Logo scale={2.5} />
            </div>
            <p className={styles.logoLabel}>Versão principal (fundo claro)</p>
          </div>

          <div className={styles.logoCard}>
            <div className={styles.logoArea + " " + styles.dark}>
              <Logo scale={2.5} color="white" />
            </div>
            <p className={styles.logoLabel}>Versão negativa (fundo escuro)</p>
          </div>

          <div className={styles.logoCard}>
            <div className={styles.logoArea + " " + styles.brand}>
              <Logo scale={2.5} color="white" />
            </div>
            <p className={styles.logoLabel}>Sobre cor da marca</p>
          </div>
        </div>
      </section>

      <section id="uso-correto" className={styles.section}>
        <h2 className={styles.sectionTitle}>Uso correto</h2>
        <div className={styles.ruleGrid}>
          {correctRules.map((rule) => (
            <div key={rule.title} className={`${styles.rule} ${styles.correct}`}>
              <span className={styles.ruleIcon}>✓</span>
              <div>
                <strong className={styles.ruleTitle}>{rule.title}</strong>
                <p className={styles.ruleDesc}>{rule.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="uso-incorreto" className={styles.section}>
        <h2 className={styles.sectionTitle}>Uso incorreto</h2>
        <div className={styles.ruleGrid}>
          {incorrectRules.map((rule) => (
            <div key={rule.title} className={`${styles.rule} ${styles.incorrect}`}>
              <span className={styles.ruleIcon}>✗</span>
              <div>
                <strong className={styles.ruleTitle}>{rule.title}</strong>
                <p className={styles.ruleDesc}>{rule.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

const correctRules = [
  {
    title: "Use as variações aprovadas",
    desc: "Use apenas as versões oficiais do logo sem alterações.",
  },
  {
    title: "Respeite o espaço de respiro",
    desc: "Mantenha ao redor do logo um espaço mínimo equivalente à altura da letra 'D'.",
  },
  {
    title: "Use no tamanho mínimo",
    desc: "O tamanho mínimo recomendado é 80px de largura para garantir legibilidade.",
  },
];

const incorrectRules = [
  {
    title: "Não altere as cores",
    desc: "Não aplique gradientes, sombras ou cores fora das variações aprovadas.",
  },
  {
    title: "Não distorça as proporções",
    desc: "Não estique ou comprima o logo. Sempre redimensione proporcionalmente.",
  },
  {
    title: "Não adicione efeitos",
    desc: "Sem reflexos, brilhos, contornos ou sobreposições ao logo.",
  },
  {
    title: "Não use em fundos conflitantes",
    desc: "Evite fundos com pouco contraste ou que comprometam a legibilidade.",
  },
];
