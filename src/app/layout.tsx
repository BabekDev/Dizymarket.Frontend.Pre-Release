import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.scss";

const bricolage = Bricolage_Grotesque({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-bricolage",
});

export const metadata: Metadata = {
  title: "DizyMarket — Marketplace for Digital Goods",
  description: "DizyMarket — Marketplace for Digital Goods",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={bricolage.variable}>
      <body>{children}</body>
    </html>
  );
}
