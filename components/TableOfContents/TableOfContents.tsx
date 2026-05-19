"use client";

import { useEffect, useState } from "react";
import type { TocItem } from "@/lib/docs";
import styles from "./TableOfContents.module.css";

type Props = {
  items: TocItem[];
};

export default function TableOfContents({ items }: Props) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    if (items.length === 0) return;

    const headingIds = items.map((item) => item.id);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .map((entry) => entry.target.id);

        if (visible.length > 0) {
          // Pick the first visible heading in document order
          const first = headingIds.find((id) => visible.includes(id));
          if (first) setActiveId(first);
        }
      },
      {
        rootMargin: "-56px 0px -60% 0px",
        threshold: 0,
      }
    );

    headingIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  if (items.length === 0) return null;

  return (
    <nav className={styles.toc} aria-label="Nesta página">
      <p className={styles.title}>Nesta página</p>
      <ul className={styles.list} role="list">
        {items.map((item) => (
          <li key={item.id} className={item.level === 3 ? styles.nested : ""}>
            <a
              href={`#${item.id}`}
              className={`${styles.link} ${activeId === item.id ? styles.active : ""}`}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
