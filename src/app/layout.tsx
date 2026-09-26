import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import "@fontsource-variable/plus-jakarta-sans";
import { ChatbotWidget } from "@/components/ui";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mi Crédito 786™ | Reparación de Crédito para Latinos en USA",
  description: "Ayudamos a latinos en USA a reconstruir su crédito de forma legal y profesional. Auditoría gratuita. De 450-600 a 680+ en 90-135 días. Servicio 100% en español.",
  keywords: "credit repair, reparación de crédito, latinos USA, crédito hispanos, Mi Crédito 786, score de crédito, FCRA, reconstrucción crediticia, Miami",
  icons: {
    icon: "/logo.webp",
    apple: "/logo.webp",
  },
  openGraph: {
    title: "Mi Crédito 786™ | Reparación de Crédito para Latinos",
    description: "La llave que abre las puertas que te han cerrado en USA. Auditoría gratuita. De latinos, para latinos.",
    type: "website",
    locale: "es_US",
    siteName: "Mi Crédito 786",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5LPRQKNW');`}
        </Script>
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-6BEQLGVSYT"
          strategy="afterInteractive"
        />
        <Script id="gtag" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-6BEQLGVSYT');`}
        </Script>
      </head>
      <body className={`${plusJakarta.variable} font-sans antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5LPRQKNW"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
        <ChatbotWidget />
      </body>
    </html>
  );
}
