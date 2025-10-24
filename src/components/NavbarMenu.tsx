"use client";

import { Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HiBars3BottomRight } from "react-icons/hi2";
import styles from "./NavbarMenu.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const NavbarMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("inicio");
  const pathname = usePathname();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleLinkClick = (linkId: string) => {
    setActiveLink(linkId);
    closeMenu();
  };

  useEffect(() => {
    // sincroniza activeLink con la ruta actual
    const currentRoute = pathname === "/" ? "inicio" : pathname.slice(1);
    setActiveLink(currentRoute);

    if (menuOpen) {
      document.body.classList.add(styles.noScroll);
    } else {
      document.body.classList.remove(styles.noScroll);
    }
  }, [pathname, menuOpen]);

  // 🔥 Detectamos si es la home
  const isHome = pathname === "/";

  return (
    <nav
      className={`${styles.navbar} ${
        isHome ? styles.homeNavbar : styles.pageNavbar
      }`}
    >
      <Container>
        <div className={styles.navbarContenedor}>
          <div className={styles.brand}>
            <Link href="/">
              <Image
                className={styles.logo}
                src="/images/logo.png"
                width={100}
                height={100}
                alt="logo"
              />
            </Link>
          </div>

          <div className={`${styles.menu} ${menuOpen ? styles.active : ""}`}>
            <div className={styles.menuBox}>
              <Link
                href="/"
                className={`${styles.firstLink} ${
                  activeLink === "inicio" ? styles.activeLink : ""
                }`}
                onClick={() => handleLinkClick("inicio")}
              >
                INICIO
              </Link>
              <Link
                href="/servicios"
                className={`${styles.linkMenu} ${
                  activeLink === "servicios" ? styles.activeLink : ""
                }`}
                onClick={() => handleLinkClick("servicios")}
              >
                SERVICIOS
              </Link>
              <Link
                href="/videos"
                className={`${styles.linkMenu} ${
                  activeLink === "videos" ? styles.activeLink : ""
                }`}
                onClick={() => handleLinkClick("videos")}
              >
                VIDEOS
              </Link>
              <Link
                href="/precios"
                className={`${styles.linkMenu} ${
                  activeLink === "precios" ? styles.activeLink : ""
                }`}
                onClick={() => handleLinkClick("precios")}
              >
                PRECIOS
              </Link>
              <Link
                href="/contacto"
                className={`${styles.linkMenu} ${
                  activeLink === "contacto" ? styles.activeLink : ""
                }`}
                onClick={() => handleLinkClick("contacto")}
              >
                CONTACTO
              </Link>
            </div>
          </div>

          {menuOpen ? (
            <AiOutlineClose className={styles.iconBars} onClick={toggleMenu} />
          ) : (
            <HiBars3BottomRight
              className={styles.iconBars}
              onClick={toggleMenu}
            />
          )}
        </div>
      </Container>
    </nav>
  );
};

export default NavbarMenu;
