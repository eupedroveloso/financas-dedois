"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Header from "@/components/Header/Header";
import Sidebar from "@/components/Sidebar/Sidebar";
import styles from "./DocsShell.module.css";

export default function DocsShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  // Close sidebar on route change (mobile nav)
  useEffect(() => {
    setSidebarOpen(false);
  }, [pathname]);

  return (
    <div className={styles.shell}>
      <Header
        onMenuClick={() => setSidebarOpen((prev) => !prev)}
        menuOpen={sidebarOpen}
      />
      <div className={styles.body}>
        {/* Overlay for mobile */}
        {sidebarOpen && (
          <div
            className={styles.overlay}
            onClick={() => setSidebarOpen(false)}
            aria-hidden="true"
          />
        )}
        <Sidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />
        <main className={styles.main}>{children}</main>
      </div>
    </div>
  );
}
