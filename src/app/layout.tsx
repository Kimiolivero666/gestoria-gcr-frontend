import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ClientWrapper from "@/components/ClientWrapper";
import LayoutClientWrapper from "@/components/LayoutClientWrapper";


const raleway = Raleway({
  weight: ["300", "400", "500", "700","800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Servei integral GCR & Associats - Asesoría Legal y Gestoría en Girona",
  description: "Gestoría administrativa y asesoría legal especializada en trámites de Extranjería para clientes en Girona y Perú",
  keywords: "gestoría administrativa Girona, asesoría legal Girona, extranjería Girona, permiso de residencia peruanos, nacionalidad española",
  icons: {
    icon: '/icon.ico', 
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={raleway.className}>
        <LayoutClientWrapper>
          <ClientWrapper>{children}</ClientWrapper>
        </LayoutClientWrapper>
      </body>
    </html>
  );
}
