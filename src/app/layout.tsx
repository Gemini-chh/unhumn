import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "UNHUMN | A Soft Digital Archive",
  description:
    "A quiet, breathing personal art archive about incompletion, repair, memory, and rebuilding the self.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
