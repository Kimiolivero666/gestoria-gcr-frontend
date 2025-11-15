'use client';

import { useRef, useState, useEffect } from 'react';
import styles from './Carrusel.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

interface Item {
  id: number;
  title: string;
  image: string;
  link: string;
}

const items: Item[] = [
  { id: 1, title: 'Trabajo', image: '/images/DGT.jpg', link: '/servicios/trabajo' },
  { id: 2, title: '', image: '/images/CAP.JPG', link: '/cap' },
  { id: 3, title: 'Nacionalidad', image: '/images/Nacionalidad.jpg', link: '/servicios/nacionalidad' },
  { id: 4, title: 'Extranjería', image: '/images/Extranjería.JPG', link: '/servicios/extranjeria' },
  { id: 5, title: 'Homologación de estudios', image: '/images/HomologaciónDeEstudios.jpg', link: '/servicios/homologacion' },
  { id: 6, title: 'Ley segunda oportunidad', image: '/images/LeySegundaOportunidad.jpg', link: '/servicios/leySegundaOportunidad' },
  { id: 7, title: 'Estancia de estudios', image: '/images/EstanciaEstudios.jpg', link: '/servicios/estanciaDeEstudios' },
  { id: 8, title: 'DGT', image: '/images/DGT.jpg', link: '/servicios/dgt' },
  { id: 9, title: 'CAP', image: '/images/CAP.JPG', link: '/servicios/cap' },
  { id: 10, title: 'Divorcio notarial', image: '/images/DivorcioNotarial.jpg', link: '/servicios/divorcio' },
];

export default function Carrusel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [lastVisibleIndex, setLastVisibleIndex] = useState(0);

  const scrollTo = (direction: 'left' | 'right') => {
    if (!containerRef.current) return;
    const scrollAmount = containerRef.current.offsetWidth / 3;
    containerRef.current.scrollBy({
      left: direction === 'right' ? scrollAmount : -scrollAmount,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const container = containerRef.current;
      const containerRight = container.getBoundingClientRect().right;

      let lastIndex = 0;
      Array.from(container.children).forEach((child, index) => {
        const rect = (child as HTMLElement).getBoundingClientRect();
        if (rect.right <= containerRight + 5) {
          lastIndex = index;
        }
      });
      setLastVisibleIndex(lastIndex);
    };

    const container = containerRef.current;
    container?.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => container?.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.carruselContainer}>
        <div ref={containerRef} className={styles.carrusel}>
          {items.map((item, index) => (
            <div
              key={item.id}
              className={`${styles.item} ${lastVisibleIndex === index ? styles.big : ''}`}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className={styles.image}
                />
              </div>
            </div>
          ))}
        </div>

        {/* controles */}
        <div className={styles.controls}>
          <button onClick={() => scrollTo('left')}><IoIosArrowBack /></button>
          <button onClick={() => scrollTo('right')}><IoIosArrowForward /></button>
        </div>
      </div>

      {/* título afuera, a la derecha, con link */}
      <div className={styles.externalTitle}>
        {items[lastVisibleIndex]?.title && (
          <Link href={items[lastVisibleIndex].link} className={styles.titleCarousel}>
            {items[lastVisibleIndex].title}
          </Link>
        )}
      </div>
    </div>
  );
}
