"use client";

import { useState } from "react";
import styles from "./SemanticSwatch.module.css";

type Props = {
  variable: string;
  value: string;
  usage: string;
};

export default function SemanticSwatch({ variable, value, usage }: Props) {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(`var(${variable})`).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  }

  return (
    <div className={styles.swatch}>
      <button
        className={styles.color}
        style={{ background: value }}
        onClick={handleCopy}
        aria-label={`Copiar var(${variable})`}
        title={copied ? "Copiado!" : `Copiar var(${variable})`}
      >
        {copied && (
          <span className={styles.copied} aria-live="polite">
            ✓
          </span>
        )}
      </button>
      <div className={styles.info}>
        <code className={styles.variable}>{variable}</code>
        <span className={styles.value}>{value}</span>
        <span className={styles.usage}>{usage}</span>
      </div>
    </div>
  );
}
