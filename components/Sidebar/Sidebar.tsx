"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/lib/navigation";
import styles from "./Sidebar.module.css";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function Sidebar({ isOpen, onClose }: Props) {
  const pathname = usePathname();

  return (
    <aside
      className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}
      aria-label="Navegação da documentação"
    >
      <nav className={styles.nav}>
        {navigation.map((section) => (
          <div key={section.title} className={styles.section}>
            <p className={styles.sectionTitle}>{section.title}</p>
            <ul className={styles.list} role="list">
              {section.items.map((item) => {
                const href = `/docs/${item.slug}`;
                const active = pathname === href;
                return (
                  <li key={item.slug}>
                    <Link
                      href={href}
                      className={`${styles.item} ${active ? styles.active : ""}`}
                      onClick={onClose}
                      aria-current={active ? "page" : undefined}
                    >
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}
