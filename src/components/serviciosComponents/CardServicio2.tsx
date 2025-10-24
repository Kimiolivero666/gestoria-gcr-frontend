"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "react-bootstrap";
import styles from "./CardServicio2.module.css";
import { IoIosArrowRoundForward } from "react-icons/io";

interface CardServicio2Props {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  link?: string; // 👈 en lugar de onClick
}

const CardServicio2: React.FC<CardServicio2Props> = ({
  title,
  description,
  imageSrc,
  imageAlt = "imagen del servicio",
  link = "#",
}) => {
  return (
    
    <div className={`d-flex flex-column flex-md-row align-items-center ${styles.card}`}>
      
      <div className={`mt-3 mt-md-0 ms-md-4 ${styles.textContainer}`}>
        <h5 className={styles.title}>{title}</h5>
        <p className={styles.description}>{description}</p>
        <Link href={link} className={styles.buttonLink}>
          <Button variant="link" className={styles.button}>
            <IoIosArrowRoundForward />
          </Button>
        </Link>
      </div>
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

export default CardServicio2;
