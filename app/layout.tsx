import { Libre_Franklin } from "next/font/google";
import type { Metadata } from "next";
// import { GoogleTagManager } from "@next/third-parties/google";
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
    "Apresentações",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

  return (
    <html lang="pt-BR" className="bg-primary">
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GTM_ID}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GTM_ID}', {
                page_path: window.location.pathname,
              });
            `,
        }}
      />
      ;{/* <GoogleTagManager gtmId="GTM-PPRTNJ8C" /> */}
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
