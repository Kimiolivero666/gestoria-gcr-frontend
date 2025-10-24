'use client';

import { usePathname } from "next/navigation";
import NavbarMenu from "@/components/NavbarMenu";

export default function LayoutClientWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Oculta el navbar en /reserva
  const hideNavbar = pathname.startsWith("/reserva");

  return (
    <>
      {!hideNavbar && <NavbarMenu />}
      {children}
    </>
  );
}
