import React from 'react';
import { Container, Row, Col, } from 'react-bootstrap';
// Importa el Módulo CSS
import styles from './ContactPromo.module.css';
import BotonCita from '../BotonCita';
import Link from 'next/link';

// 1. Definición de la Interfaz TypeScript para las propiedades (props)
interface ContactPromoProps {
    /** El texto principal a mostrar en el banner. */
    text?: string;
    /** El texto del botón de Llamada a la Acción (CTA). */
    buttonText?: string;
    /** La URL a donde debe enlazar el botón. */
    buttonLink?: string;
}

/**
 * Componente de banner promocional responsive con Next.js, TypeScript y React Bootstrap.
 */
const ContactPromo: React.FC<ContactPromoProps> = ({
    text,
}) => {
    // Valores por defecto basados en la imagen
    const defaultText = "Para más información puedes seguirnos en nuestras redes sociales o concertar una cita.";


    return (
        // Aplica la clase del Módulo CSS al contenedor principal
        <div className={styles.promoContainer}>
            <Container>
                <Row className="justify-content-center">
                    {/* Usa columnas para limitar el ancho del texto en pantallas grandes */}
                    <Col md={10} lg={8} xl={6}>
                        {/* El contenido del texto */}
                        <p className={styles.promoText}>
                            {text || defaultText}
                        </p>

                        {/* El botón CTA */}
                        <div className={styles.BotonCitaContainer}>
                            <Link href="/reserva">
                                <BotonCita />
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ContactPromo;