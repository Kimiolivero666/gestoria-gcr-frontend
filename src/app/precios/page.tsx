// components/PricingGrid.tsx

import { Col, Container, Row } from "react-bootstrap";
import styles from "./pagePrecios.module.css";
import { PriceItem, pricingData } from "./pricingData";


// ... imports

// Componente para una tarjeta de precio individual
// Recibe el índice general (0-9)
const PriceCard: React.FC<{ item: PriceItem, index: number }> = ({ item, index }) => {
  
  // Posición de la columna (0: izquierda, 1: derecha)
  const colIndex = index % 2; 
  // Posición de la fila (0, 1, 2, 3, 4)
  const rowIndex = Math.floor(index / 2);

  // Lógica de Tablero de Ajedrez: (Fila + Columna)
  // (Par + Par) = Par -> Dark
  // (Par + Impar) = Impar -> Light
  // (Impar + Par) = Impar -> Light
  // (Impar + Impar) = Par -> Dark
  const isDark = (rowIndex + colIndex) % 2 === 0; 
  
  // Determinamos la clase CSS
  // En la imagen original, el patrón es Dark, Light, Light, Dark...
  // La tarjeta 0 (0+0=0, Par) es AZUL OSCURO (Dark).
  // La tarjeta 1 (0+1=1, Impar) es BLANCA (Light).
  // La tarjeta 2 (1+0=1, Impar) es BLANCA (Light).
  // La tarjeta 3 (1+1=2, Par) es AZUL OSCURO (Dark).
  
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