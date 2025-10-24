import React from 'react';
// Importa tus estilos del módulo CSS
import styles from './HeroExtranjeria.module.css';

// 1. Define la interfaz (o tipo) para las Props
interface HeroExtranjeriaProps {
  title: string;
  imageUrl: string; // La URL de la imagen de fondo
}

// 2. Define el componente y desestructura las props
const HeroExtranjeria: React.FC<HeroExtranjeriaProps> = ({ title, imageUrl }) => {
  
  // 3. Aplica la URL de la imagen como estilo en línea
  const imageStyle = {
    // Usamos 'backgroundImage' para aplicar la URL de la prop
    backgroundImage: `url(${imageUrl})`,
  };

  return (
    // 🚀 Contenedor principal
    <div className={styles.heroContainer}>
      
      {/* Bloque Blanco: Contiene el texto. */}
      <div className={styles.textBlock}>
        {/* 4. Usamos la prop 'title' aquí */}
        <h1 className={styles.heroTitle}>{title}</h1>
      </div>
      
      {/* Bloque Imagen: Ahora usa el estilo dinámico para el fondo. */}
      {/* Es importante que en tu CSS original de .imageBlock quites la propiedad 'background-image' fija si la tenías. */}
      <div 
        className={styles.imageBlock}
        style={imageStyle} // <-- Aplicamos el estilo dinámico
      >
        {/* La imagen de fondo y el filtro se manejarán aquí y en el CSS */}
      </div>
      
    </div>
  );
};

export default HeroExtranjeria;