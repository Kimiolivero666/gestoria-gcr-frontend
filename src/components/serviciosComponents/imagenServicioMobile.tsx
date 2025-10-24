"use client";

import React from "react";
import Image from "next/image";
import styles from "./imagenServicioMobile.module.css";

interface ImagenServicioMobileProps {
  imageSrc: string;
  imageAlt?: string;
}

const ImagenServicioMobile: React.FC<ImagenServicioMobileProps> = ({

  imageSrc,
  imageAlt = "imagen del servicio",
}) => {
  return ( 
        
<div className={`d-flex flex-column flex-md-row align-items-center ${styles.card}`}>

<div className={styles.imageContainer}>
  <Image
    src={imageSrc}
    alt={imageAlt}
    width={400}
    height={300}
    className={styles.image}
  />
</div>
    </div>
  );
};

export default ImagenServicioMobile;
