'use client'

import { Col, Container, Row } from "react-bootstrap";
import styles from "./pagePrecios.module.css";
import { PriceItem, pricingData } from "./pricingData";
import { useEffect, useState } from "react";


// ... imports

const PriceCard: React.FC<{ item: PriceItem; index: number }> = ({ item, index }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const handleChange = () => setIsMobile(mediaQuery.matches);
    handleChange();
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  if (!item) return null;

  const colIndex = index % 2;
  const rowIndex = Math.floor(index / 2);

  // 🔹 Nueva lógica corregida
  // En móvil → alterna de forma simple (azul/blanco/azul/blanco)
  // En escritorio → patrón ajedrezado
  const isDark = isMobile
    ? index % 2 === 0 // móvil: alternado simple
    : (rowIndex + colIndex) % 2 === 0; // escritorio: ajedrez

  const cardClass = isDark ? styles.cardDark : styles.cardLight;

  return (
    <div className={`${styles.priceCard} ${cardClass}`}>
      <h3 className={styles.title}>{item.title}</h3>
      <p className={styles.price}>{item.price}</p>
      {item.notes && <p className={styles.notes}>{item.notes}</p>}
    </div>
  );
};



const PricingGrid: React.FC = () => {
  return (
    <div className={styles.pricingSection}>
    <Container fluid className={styles.fullContainer}>
      {/* ... Row y map ... */}
      <Row className="g-0">
        {pricingData.map((item, index) => (
          <Col xs={12} md={6} key={item.id}>
            <PriceCard item={item} index={index} /> 
          </Col>
        ))}
      </Row>

      {/* Sección final de "Otros servicios" */}
      <Row className="g-0">
        <Col xs={12}>
          <div className={`${styles.footerBanner} text-center p-3 p-md-4`}>
            PARA OTROS SERVICIOS SERÁ DE ACUERDO A LO PACTADO EN LA CITA
          </div>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default PricingGrid;