import { Libre_Franklin } from "next/font/google";
import type { Metadata } from "next";
import CookieEyesBanner from "@/components/atoms/cookieEyesBanner";

import "./globals.css";
import Head from "@/components/atoms/head";

const librefranklin = Libre_Franklin({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Canales Design",
  description: "Identidade Visual que transforma empresas.",
  keywords: [
    "Identidade Visual",
    "Design",
    "Design Gráfico",
    "Design Digital",
    "Logotipo",
    "Logo",
    "Web Design",
    "Sites",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="bg-primary">
      <Head />
      <body className={librefranklin.className}>
        {children}
        <CookieEyesBanner />
      </body>
    </html>
  );
}
