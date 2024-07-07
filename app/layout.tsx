import type { Metadata } from "next";
import { Libre_Franklin } from "next/font/google";
import "./globals.css";
import CookieEyesBanner from "@/components/atoms/cookieEyesBanner";

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
    <html lang="PT-br" className="bg-primary">
      <body className={librefranklin.className}>
        {children}
        <CookieEyesBanner />
      </body>
    </html>
  );
}
