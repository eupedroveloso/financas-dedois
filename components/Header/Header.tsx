import Logo from "@/components/Logo/Logo";
import styles from "./Header.module.css";

type Props = {
  onMenuClick: () => void;
  menuOpen: boolean;
};

export default function Header({ onMenuClick, menuOpen }: Props) {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <button
            className={styles.menuButton}
            onClick={onMenuClick}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
          >
            <MenuIcon open={menuOpen} />
          </button>
          <a href="/docs/o-que-e-o-dedois" className={styles.brand}>
            <Logo />
            <span className={styles.brandBadge}>v1</span>
          </a>
        </div>

        <div className={styles.right}>
          <div className={styles.searchWrap} role="search">
            <SearchIcon />
            <input
              type="search"
              placeholder="Buscar na documentação..."
              className={styles.search}
              aria-label="Buscar na documentação"
              disabled
              title="Busca em desenvolvimento"
            />
            <kbd className={styles.kbd}>⌘K</kbd>
          </div>
        </div>
      </div>
    </header>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden="true"
    >
      {open ? (
        <>
          <line x1="3" y1="3" x2="15" y2="15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="15" y1="3" x2="3" y2="15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </>
      ) : (
        <>
          <line x1="3" y1="5" x2="15" y2="5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="3" y1="9" x2="15" y2="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="3" y1="13" x2="15" y2="13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </>
      )}
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
      className={styles.searchIcon}
    >
      <circle cx="6" cy="6" r="4.5" stroke="currentColor" strokeWidth="1.25" />
      <line x1="9.5" y1="9.5" x2="13" y2="13" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
    </svg>
  );
}
