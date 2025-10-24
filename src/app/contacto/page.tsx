import HeroExtranjeria from '@/components/serviciosComponents/HeroExtranjeria'
import React from 'react'
import styles from './pageContacto.module.css'
import { Container } from 'react-bootstrap'
import ContactSection from '@/components/contactoComponents/ContactSection'
const page = () => {
    return (
        <div className={styles.contacto}>
            <div className={styles.HeroSection}>
                <HeroExtranjeria
                    title="Contáctanos"
                    imageUrl="/images/IMG_1070.jpeg"
                />
            </div>
            <Container>
                <ContactSection />
            </Container>
        </div>
    )
}

export default page