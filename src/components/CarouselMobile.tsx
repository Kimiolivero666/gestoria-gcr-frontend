'use client';

import { Carousel } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link'; // 👈 Importa Link de Next.js
import styles from "./CarouselMobile.module.css";

const CarouselMobile = () => {
    const slides = [
        {
            src: '/images/Nacionalidad.jpg',
            alt: 'Primer slide',
            title: 'Nacionalidad',
            link: '/servicios/nacionalidad', 
        },
        {
            src: '/images/Extranjería.JPG',
            alt: 'Segundo slide',
            title: 'Extranjería',
            link: '/servicios/extranjeria',
        },
        {
            src: '/images/HomologaciónDeEstudios.jpg',
            alt: 'Tercer slide',
            title: 'Homologación de estudios',
            link: '/servicios/homologacion',
        },
        {
            src: '/images/LeySegundaOportunidad.jpg',
            alt: 'Cuarto slide',
            title: 'Ley segunda oportunidad',
            link: '/servicios/leySegundaOportunidad',
        },
        {
            src: '/images/EstanciaEstudios.jpg',
            alt: 'Quinto slide',
            title: 'Estancia de estudios',
            link: '/servicios/estanciaDeEstudios',
        },
        {
            src: '/images/DGT.jpg',
            alt: 'Sexto slide',
            title: 'DGT',
            link: '/servicios/dgt',
        },
        {
            src: '/images/CAP.JPG',
            alt: 'Séptimo slide',
            title: 'CAP',
            link: '/servicios/cap',
        },
        {
            src: '/images/DivorcioNotarial.jpg',
            alt: 'Octavo slide',
            title: 'Divorcio notarial',
            link: '/servicios/divorcio',
        },
    ];

    return (
        <Carousel fade interval={3000} className={styles.carouselWrapper}>
            {slides.map((slide, index) => (
                <Carousel.Item key={index}>
                    <div className={styles.slideContainer}>
                        {/* 🔹 Título con link */}
                        <Link href={slide.link} className={styles.titleCarouselMobile}>
                            <h3>{slide.title}</h3>
                        </Link>

                        {/* Imagen */}
                        <div className={styles.imageContainer}>
                            <Image
                                src={slide.src}
                                alt={slide.alt}
                                fill
                                priority={index === 0}
                                className={styles.image}
                            />
                        </div>
                    </div>
                </Carousel.Item>
            ))}
        </Carousel>
    );
};

export default CarouselMobile;
