"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "react-bootstrap";
import styles from "./CardServicio.module.css";
import { IoIosArrowRoundForward } from "react-icons/io";

interface CardServicioProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  link?: string; // 👈 en lugar de onClick
}

const CardServicio: React.FC<CardServicioProps> = ({
  title,
  description,
  imageSrc,
  imageAlt = "imagen del servicio",
  link = "#",
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

      <div className={`mt-3 mt-md-0 ms-md-4 ${styles.textContainer}`}>
        <h5 className={styles.title}>{title}</h5>
        <p className={styles.description}>{description}</p>
        <Link href={link} className={styles.buttonLink}>
          <Button variant="link" className={styles.button}>
            <IoIosArrowRoundForward />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CardServicio;
