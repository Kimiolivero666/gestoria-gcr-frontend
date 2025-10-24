'use client';

import { Carousel } from 'react-bootstrap';
import Image from 'next/image';
import styles from "./CarouselMobile.module.css";

const CarouselMobile = () => {
    const slides = [
        {
            src: '/images/Nacionalidad.jpg',
            alt: 'Primer slide',
            title: 'Nacionalidad',
        },
        {
            src: '/images/Extranjería.jpg',
            alt: 'Segundo slide',
            title: 'Extranjeria',
        },
        {
            src: '/images/HomologaciónDeEstudios.jpg',
            alt: 'Tercer slide',
            title: 'Homologacion',
        },
        {
            src: '/images/LeySegundaOportunidad.jpg',
            alt: 'Cuarto slide',
            title: 'Ley segunda oportunidad',
        },
        {
            src: '/images/EstanciaEstudios.jpg',
            alt: 'Quinto slide',
            title: 'Estancia de estudios',
        },
        {
            src: '/images/DGT.jpg',
            alt: 'Sexto slide',
            title: 'DGT',
        },
        {
            src: '/images/CAP.JPG',
            alt: 'Septimo slide',
            title: 'CAP',
        },
        {
            src: '/images/DivorcioNotarial.jpg',
            alt: 'octavo slide',
            title: 'Divorcio notarial',
        },
    ];

    return (
        <Carousel fade interval={3000} className={styles.carouselWrapper}>
            {slides.map((slide, index) => (
                <Carousel.Item key={index}>
                    <div className={styles.slideContainer}>
                        {/* 🔹 Título arriba a la izquierda */}
                        <h3 className={styles.titleCarouselMobile}>{slide.title}</h3>

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
