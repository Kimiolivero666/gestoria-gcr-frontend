"use client";


import React from 'react'
import styles from "./BotonAgendar.module.css";

const BotonAgendar = () => {
  return (
    
  <div className={styles.cta}>
  <div className={styles.top}>Da el primer paso</div>
  <button className={styles.bottom}>AGENDA TU CITA</button>
</div>


  )
}

export default BotonAgendar