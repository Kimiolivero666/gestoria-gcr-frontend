'use client'

import { useEffect, useState, RefObject } from 'react';
import styles from './ScrollToTopButton.module.css';
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTopButton({ footerRef }: { footerRef: RefObject<HTMLElement | null> }) {
  const [visible, setVisible] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);

  useEffect(() => {
    const toggleScrollVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', toggleScrollVisibility);
    return () => window.removeEventListener('scroll', toggleScrollVisibility);
  }, []);

  useEffect(() => {
    if (!footerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => setFooterVisible(entry.isIntersecting),
      { rootMargin: '200px', threshold: 0 }
    );

    observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, [footerRef]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return visible && !footerVisible ? (
    <button className={styles.scrollButton} onClick={scrollToTop}>
      <FaArrowUp />
    </button>
  ) : null;
}
