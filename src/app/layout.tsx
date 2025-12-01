import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import "@fontsource-variable/plus-jakarta-sans";

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
      <body className={`${plusJakarta.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
