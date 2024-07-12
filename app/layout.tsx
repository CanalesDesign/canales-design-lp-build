import { Libre_Franklin } from "next/font/google";
import type { Metadata } from "next";
import { GoogleTagManager } from "@next/third-parties/google";
import CookieEyesBanner from "@/atoms/cookieEyesBanner";

import "./globals.css";

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
      <GoogleTagManager gtmId="GTM-PPRTNJ8C" />
      <body className={librefranklin.className}>
        <noscript>
          <iframe
            className="hidden invisible"
            src="https://www.googletagmanager.com/ns.html?id=GTM-PPRTNJ8C"
            height="0"
            width="0"></iframe>
        </noscript>
        {children}
        <CookieEyesBanner />
      </body>
    </html>
  );
}
