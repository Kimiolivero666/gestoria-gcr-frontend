"use client";

import styles from "./Hero.module.css";
import { BsFillTelephoneFill } from "react-icons/bs";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.containerH1}>
        <h1>
          <span className={styles.bg}>¡Tú, tus <span> trámites </span> y tu</span>
          <br />
          <span className={styles.noBg}>seguridad jurídica</span>
          <br />
          <span className={styles.bg2}>son nuestra <span> prioridad! </span></span>
        </h1>
      </div>
      <div className={styles.phones}>
        <a href="tel:+34680457918" className={styles.phoneBtn}>
          <BsFillTelephoneFill className={styles.phoneIcon} /> <span>+34 680457918</span>
        </a>
        <a href="tel:+34872018394" className={styles.phoneBtn}>
          <BsFillTelephoneFill className={styles.phoneIcon} /> <span>+34 872018394</span>
        </a>
      </div>





    </section>
  );
}
