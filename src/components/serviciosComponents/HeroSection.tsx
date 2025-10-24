import React from 'react';
// Importa tus estilos del módulo CSS
import styles from './HeroSection.module.css';

interface HeroSectionProps {
  title: string;
  imageUrl: string;
}


const HeroSection: React.FC <HeroSectionProps> = ({ title, imageUrl }) => {
  return (
    // 🚀 Contenedor principal
    <div className={styles.heroContainer}>
      
    
  
      <div className={styles.textBlock}>
        <h1 className={styles.heroTitle}>{title}</h1>
      </div>
      
      {/* Bloque Azul/Imagen: Ocupa la derecha con el avión. */}
      <div
        className={styles.imageBlock}
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      
    </div>
  );
};

export default HeroSection;