"use client";

import { useState } from "react";
import styles from "./ColorSwatch.module.css";

type Props = {
  token: string;
  hex: string;
  usage: string;
};

export default function ColorSwatch({ token, hex, usage }: Props) {
  const [copied, setCopied] = useState(false);
  const isPlaceholder = hex.includes("[PLACEHOLDER]");

  function handleCopy() {
    if (isPlaceholder) return;
    navigator.clipboard.writeText(hex).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  }

  return (
    <div className={styles.swatch}>
      <button
        className={styles.color}
        style={
          isPlaceholder
            ? {
                background:
                  "repeating-linear-gradient(45deg, var(--color-bg-muted), var(--color-bg-muted) 4px, var(--color-border) 4px, var(--color-border) 8px)",
              }
            : { backgroundColor: hex }
        }
        onClick={handleCopy}
        disabled={isPlaceholder}
        aria-label={isPlaceholder ? `${token} — placeholder` : `Copiar ${hex}`}
        title={isPlaceholder ? "Valor a ser definido" : copied ? "Copiado!" : `Copiar ${hex}`}
      >
        {copied && (
          <span className={styles.copied} aria-live="polite">
            ✓
          </span>
        )}
      </button>
      <div className={styles.info}>
        <code className={styles.token}>{token}</code>
        <span className={`${styles.hex} ${isPlaceholder ? styles.placeholderHex : ""}`}>
          {isPlaceholder ? "—" : hex}
        </span>
        <span className={styles.usage}>{usage}</span>
      </div>
    </div>
  );
}
