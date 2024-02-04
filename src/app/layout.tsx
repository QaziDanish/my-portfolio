import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { PortfolioProvider } from "../context/PortfolioContext";
import ThemeContextProvider from "../context/ThemeContext";
import "@/styles/globals.css";
import "@/styles/cssGrid.css";
import "@/styles/animation.css";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Danish's Portfolio",
  description: "Danish's Portfolio Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PortfolioProvider>
          <ThemeContextProvider>{children}</ThemeContextProvider>
        </PortfolioProvider>
      </body>
    </html>
  );
}
