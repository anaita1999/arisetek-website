import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AriseTek IT Solutions | Website Development",
  description: "Modern, conversion-focused websites for growing businesses.",
};

import SmoothScroll from "../components/Layout/SmoothScroll";
import Navbar from "../components/Layout/Navbar";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <SmoothScroll>
          <Navbar />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
