"use client";

import { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HiBars3BottomRight } from "react-icons/hi2";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import styles from "./NavbarMenu.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

// Define los sub-servicios
const subServicios = [
  { id: "servicio-uno", nombre: "Nacionalidad", href: "/servicios/nacionalidad" },
  { id: "servicio-dos", nombre: "Extranjería", href: "/servicios/extranjeria" },
  { id: "servicio-tres", nombre: "Homologacion de estudios", href: "/servicios/homologacion" },
  { id: "servicio-cuatro", nombre: "Ley segunda oportunidad", href: "/servicios/leySegundaOportunidad" },
  { id: "servicio-quinto", nombre: "Estancia de estudios", href: "/servicios/estanciaDeEstudio" },
  { id: "servicio-sexto", nombre: "DGT", href: "/servicios/dgt" },
  { id: "servicio-septimo", nombre: "CAP", href: "/servicios/cap" },
  { id: "servicio-octavo", nombre: "Divorcio notarial", href: "/servicios/divorcio" },
];


const NavbarMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  // Inicializamos el dropdown como CERRADO
  const [dropdownOpen, setDropdownOpen] = useState(false); 
  const [activeLink, setActiveLink] = useState("inicio");
  const pathname = usePathname();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    // IMPORTANTE: Al cerrar el menú principal, cerramos el dropdown
    setDropdownOpen(false); 
  };
  
  const toggleDropdown = () => {
    // Esta función es la ÚNICA que debe controlar la apertura en móvil
    setDropdownOpen(!dropdownOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    // Mantenemos el dropdown CERRADO al navegar
    setDropdownOpen(false); 
  };

  const handleLinkClick = (linkId: string) => {
    setActiveLink(linkId);
    closeMenu(); 
  };

  useEffect(() => {
    let currentRoute: string;
    
    // 1. Determinar el link activo basado en la ruta
    if (pathname === "/") {
      currentRoute = "inicio";
    } else {
      const subServicioMatch = subServicios.find((servicio) => servicio.href === pathname);
      
      if (subServicioMatch) {
        currentRoute = subServicioMatch.id; 
      } else {
        currentRoute = pathname.slice(1).split("/")[0];
      }
    }

    setActiveLink(currentRoute);

    // 2. Controlar el scroll del body
    if (menuOpen) {
      document.body.classList.add(styles.noScroll);
    } else {
      document.body.classList.remove(styles.noScroll);
    }
    
    // *** CLAVE CORREGIDA: Eliminamos toda lógica que fuerce la apertura del dropdown 
    // al cargar la página. El dropdown solo se abre con el click del usuario en el icono. ***

  }, [pathname, menuOpen]);

  const isHome = pathname === "/";
  const isServiciosActive = activeLink === "servicios" || subServicios.some(s => s.id === activeLink);

  return (
    <nav
      className={`${styles.navbar} ${
        isHome ? styles.homeNavbar : styles.pageNavbar
      }`}
    >
      <div className="container"> 
        <div className={styles.navbarContenedor}>
          <div className={styles.brand}>
            <Link href="/" onClick={() => handleLinkClick("inicio")}>
              <Image
                className={styles.logo}
                src="/images/logo.png"
                width={100}
                height={100}
                alt="logo"
              />
            </Link>
          </div>

          <div className={`
              ${styles.menu} 
              ${menuOpen ? styles.active : ""}
          `}>
            <div className={styles.menuBox}>
              <Link
                href="/"
                className={`${styles.linkMenu} ${styles.firstLink} ${
                  activeLink === "inicio" ? styles.activeLink : ""
                }`}
                onClick={() => handleLinkClick("inicio")}
              >
                INICIO
              </Link>

              {/* === Dropdown Personalizado === */}
              <div 
                className={`${styles.navItemDropdown} ${
                    isServiciosActive ? styles.activeLink : ""
                }`}
                // Control del dropdown con el ratón en Desktop
                onMouseEnter={() => !menuOpen && setDropdownOpen(true)}
                onMouseLeave={() => !menuOpen && setDropdownOpen(false)}
              >
                {/* Encabezado/Link de Servicios */}
                <div className={styles.dropdownHeader}>
                    <Link
                        href="/servicios"
                        className={`${styles.linkMenu} ${isServiciosActive ? styles.activeLink : ""}`}
                        // Siempre navega a /servicios. handleLinkClick también cierra el menú.
                        onClick={() => handleLinkClick("servicios")}
                    >
                        SERVICIOS
                    </Link>
                    {/* El ícono de flecha: Único interruptor para el submenú en móvil */}
                    <span 
                        className={styles.dropdownToggleIcon} 
                        onClick={(e) => {
                            e.stopPropagation(); 
                            toggleDropdown();
                        }}
                    >
                        {dropdownOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                    </span>
                </div>
                
                {/* Contenedor de Submenú (Dropdown-Menu) */}
                <div 
                    className={`${styles.dropdownMenu} ${dropdownOpen ? styles.dropdownMenuOpen : ''}`}
                >
                    {/* Mapeamos los sub-servicios */}
                    {subServicios.map((servicio) => (
                      <Link
                        key={servicio.id}
                        href={servicio.href}
                        className={`${styles.dropdownItem} ${activeLink === servicio.id ? styles.activeDropdownItem : ""}`}
                        onClick={() => handleLinkClick(servicio.id)}
                      >
                        {servicio.nombre}
                      </Link>
                    ))}
                </div>
              </div>
              {/* === FIN del Dropdown Personalizado === */}

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
      </div>
    </nav>
  );
};

export default NavbarMenu;