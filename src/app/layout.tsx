import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/content/site";
import { CursorSpotlight } from "@/components/ui/CursorSpotlight";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: siteConfig.seo.title,
  description: siteConfig.seo.description,
  keywords: siteConfig.seo.keywords,
  authors: [{ name: "Pacholok Team" }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    siteName: siteConfig.brand.name,
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href={siteConfig.brand.favicon} sizes="any" />
      </head>
      <body className="min-h-screen bg-[#0A0A0A] text-white antialiased">
        {/* Stape sGTM loader — mesmo container CONSULTORIA usado no teampacholok.com (WP).
            Carrega GTM via dominio first-party (anti-adblock + Safari ITP friendly).
            Container c7jgxvvvquw na conta Stape Pacholok. */}
        <Script id="stape-sgtm" strategy="afterInteractive">
          {`!function(){"use strict";function l(e){for(var t=e,r=0,n=document.cookie.split(";");r<n.length;r++){var o=n[r].split("=");if(o[0].trim()===t)return o[1]}}function s(e){return localStorage.getItem(e)}function u(e){return window[e]}function A(e,t){e=document.querySelector(e);return t?null==e?void 0:e.getAttribute(t):null==e?void 0:e.textContent}var e=window,t=document,r="script",n="dataLayer",o="https://consultoria.teampacholok.com",a="https://load.consultoria.teampacholok.com",i="c7jgxvvvquw",c="1yp=HhFMMSI7VSwvJCkkPkQ6QQFIQ1hHUBwJSgEUFxsGGQQfGh0ZHVgbCBo%3D",g="cookie",v="_sbp",E="",d=!1;try{var d=!!g&&(m=navigator.userAgent,!!(m=new RegExp("Version/([0-9._]+)(.*Mobile)?.*Safari.*").exec(m)))&&16.4<=parseFloat(m[1]),f="stapeUserId"===g,I=d&&!f?function(e,t,r){void 0===t&&(t="");var n={cookie:l,localStorage:s,jsVariable:u,cssSelector:A},t=Array.isArray(t)?t:[t];if(e&&n[e])for(var o=n[e],a=0,i=t;a<i.length;a++){var c=i[a],c=r?o(c,r):o(c);if(c)return c}else console.warn("invalid uid source",e)}(g,v,E):void 0;d=d&&(!!I||f)}catch(e){console.error(e)}var m=e,g=(m[n]=m[n]||[],m[n].push({"gtm.start":(new Date).getTime(),event:"gtm.js"}),t.getElementsByTagName(r)[0]),v=I?"&bi="+encodeURIComponent(I):"",E=t.createElement(r),f=(d&&(i=8<i.length?i.replace(/([a-z]{8}$)/,"kp$1"):"kp"+i),!d&&a?a:o);E.async=!0,E.src=f+"/"+i+".js?"+c+v,null!=(e=g.parentNode)&&e.insertBefore(E,g)}();`}
        </Script>
        <CursorSpotlight />
        {children}
      </body>
    </html>
  );
}
