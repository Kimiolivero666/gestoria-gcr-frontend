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
  title: "Mi Proyecto con el huaman de diego",
  description: "Usando Raleway desde Google Fonts en Next.js",
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
