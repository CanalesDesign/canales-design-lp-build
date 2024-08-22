import type { Metadata } from "next";
import { GoogleTagManager } from "@next/third-parties/google";
import CookieEyesBanner from "@/atoms/cookieEyesBanner";
import { Libre_Franklin, IBM_Plex_Mono } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

import "./globals.css";

const libre_franklin = Libre_Franklin({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-libre-franklin",
  fallback: ["system-ui", "-apple-system", "sans-serif"],
  display: "swap",
});

const ibm_plex_mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex-mono",
  fallback: ["system-ui", "-apple-system", "mono"],
  display: "swap",
});

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
    "Apresentações",
  ],
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    title: "Canales – Design Centrado na Essência",
    description: "Identidade Visual que transforma empresas.",
    type: "website",
    locale: "pt_BR",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
    siteName: "Canales Design",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${ibm_plex_mono.variable} ${libre_franklin.variable}`}>
      <link href="https://www.canalesdesign.com.br" rel="canonical" />
      <GoogleTagManager gtmId="GTM-PPRTNJ8C" />
      <Analytics />
      <SpeedInsights />
      <body className="bg-primary">
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
