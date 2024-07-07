"use client";
import { useEffect, useState } from "react";
import Script from "next/script";

export default function CookieEyesBanner() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="cookie__eyes--wrapper">
      {isClient ? "This is never prerendered" : "Prerendered"}
      <Script
        id="cookies__eyes--script"
        type="text/javascript"
        src={`https://cdn-cookieyes.com/client_data/fa7e0c4b8d4a8099e17111cc/script.js`}
        strategy="beforeInteractive"
      />
    </div>
  );
}
