'use client'
import Link from 'next/link';
import Image from 'next/image';
import { Row, Col, Container } from 'react-bootstrap';
import styles from './Footer.module.css';
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { forwardRef } from 'react';


const Footer = forwardRef<HTMLElement, object>(function Footer(_, ref) {
  return (
    <footer ref={ref} className={styles.footer}>
      <Container>
        <Row>
          <Col md={2} className={styles.logoSection}>
            <div className={styles.logo}>
              <Link href="/">
              
                <Image
                  src='/images/logo.png'
                  width={100}
                  height={100}
                  alt='logo'
                /></Link>

            </div>
          </Col>

          <Col md={6} className={styles.nav}>
            <Link className={styles.navLink} href="/">INICIO</Link>
            <Link className={styles.navLink} href="/servicios">SERVICIOS</Link>
            <Link className={styles.navLink} href="/videos">VIDEOS</Link>
            <Link className={styles.navLink} href="/precios">PRECIOS</Link>
            <Link className={styles.navLink} href="/contacto">CONTACTO</Link>
          </Col>

          <Col md={4} className={styles.contact}>
            <div className={styles.phoneGroup}>
              <span><BsFillTelephoneFill className={styles.phoneIcon} /> +34 680467948</span>
              <span> +34 672082894</span>
            </div>


            <a
              href="https://www.instagram.com/gcr_asesores_y_abogados"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram aria-label="Cuenta de Instagram de GCR asesores y abogados"/> Instagram
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
});

export default Footer;
