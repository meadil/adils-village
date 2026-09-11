import type { Metadata } from "next";
import { fredoka } from "@/lib/fonts";
import ScrollProgress from "@/components/ScrollProgress";
import ThemeToggle from "@/components/ThemeToggle";
import "./globals.css";

export const metadata: Metadata = {
  title: "Adil's Village",
  description: "Adil's personal site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fredoka.className} overflow-x-hidden`}>
        <ScrollProgress />
        {children}
        <ThemeToggle />
      </body>
    </html>
  );
}