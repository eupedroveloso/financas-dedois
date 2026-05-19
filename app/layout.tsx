import type { Metadata } from "next";
import { Alan_Sans, Albert_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";

const alanSans = Alan_Sans({
  variable: "--font-alan-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const albertSans = Albert_Sans({
  variable: "--font-albert-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Dedois Docs",
    template: "%s — Dedois Docs",
  },
  description: "Documentação do design system e fundações do Dedois.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${alanSans.variable} ${albertSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
