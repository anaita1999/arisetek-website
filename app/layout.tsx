import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AriseTek IT Solutions | Website Development",
  description: "Modern, conversion-focused websites for growing businesses.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
