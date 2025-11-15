import React from 'react'
import type { Metadata } from "next";
import styles from "./pageServicios.module.css";
import HeroSection from '@/components/serviciosComponents/HeroSection';
import { Container } from 'react-bootstrap';
import CardServicio from '@/components/serviciosComponents/CardServicio';
import CardServicio2 from '@/components/serviciosComponents/CardServicio2';
import ImagenServicioMobile from '@/components/serviciosComponents/imagenServicioMobile';

export const metadata: Metadata = {
  title: "Permisos de Residencia y Extranjería en Girona | GCR & Associats",
  description: "Servicios de Extranjería para ciudadanos de Perú y otros países en la provincia de Girona. Tramitamos residencia, visados y reagrupación familiar.",
  keywords: "gestoría extranjería Girona, abogado extranjería Perú, trámites residencia peruanos, reagrupación familiar Girona",
};

const page = () => {
  return (
    <div className={styles.servicios}>
      <div className={styles.HeroSection}>
        <HeroSection
          title="Servicios"
          imageUrl="/images/ImgServicios.jpg"
        />
      </div>
      <div>
        <Container>
          <CardServicio
            title='Nacionalidad'
            description="La nacionalidad es un vínculo jurídico que une a una persona con un Estado, dada esta relación el individuo adquiere una serie de derechos y obligaciones. La nacionalidad es reconocida como un derecho fundamental que tiene toda persona, dotándole de un status jurídico."
            imageSrc="/images/Nacionalidad.jpg"
            link="/servicios/nacionalidad"
          />

          <ImagenServicioMobile
            imageSrc="/images/Extranjería.JPG"
          />

          <CardServicio2
            title=" Extranjería"
            description="Gestionamos todos los trámites migratorios para ciudadanos no comunitarios, incluyendo permisos de residencia, visados, reagrupación familiar y la obtención de tarjetas de identidad de extranjero (TIE) en España."
            imageSrc="/images/Extranjería.JPG"
            link="/servicios/extranjeria"
          />


          <CardServicio
            title="Homologación de estudios"
            description="Asesoramos en el reconocimiento oficial de títulos universitarios y no universitarios obtenidos en el extranjero, facilitando la equivalencia necesaria para ejercer tu profesión o continuar estudios en España."
            imageSrc="/images/HomologaciónDeEstudios.jpg"
            link="/servicios/homologacion"
          />

          <ImagenServicioMobile
            imageSrc="/images/LeySegundaOportunidad.jpg"
          />

          <CardServicio2
            title="Ley segunda oportunidad"
            description="Proceso legal diseñado para personas físicas (particulares y autónomos) que se encuentran en una situación de insolvencia, permitiéndoles cancelar sus deudas y tener una nueva vida financiera."
            imageSrc="/images/LeySegundaOportunidad.jpg"
            link="/servicios/leySegundaOportunidad"
          />

          <CardServicio
            title="Estancia de estudios"
            description="Tramitamos la autorización de estancia para extranjeros que vienen a España con el fin de realizar estudios, investigación, formación o prácticas, incluyendo la gestión de prórrogas y modificaciones."
            imageSrc="/images/EstanciaEstudios.jpg"
            link="/servicios/estanciaDeEstudio"
          />

          <ImagenServicioMobile
            imageSrc="/images/DGT.jpg"
          />

          <CardServicio2
            title="DGT"
            description="Nos encargamos de todas las gestiones administrativas relacionadas con vehículos y conductores, como transferencias de titularidad, matriculaciones, duplicados de permisos y bajas temporales."
            imageSrc="/images/DGT.jpg"
            link="/servicios/dgt"
          />

          <CardServicio
            title="CAP"
            description="Tramitamos la gestión y obtención del Certificado de Aptitud Profesional, obligatorio para conductores profesionales dedicados al transporte de mercancías o viajeros por carretera."
            imageSrc="/images/CAP.JPG"
            link="/servicios/cap"
          />

          <ImagenServicioMobile
            imageSrc="/images/DivorcioNotarial.jpg"
          />

          <CardServicio2
            title="Divorcio notarial"
            description="Ofrecemos el servicio de divorcio de mutuo acuerdo ante Notario, un procedimiento ágil y rápido que requiere la asistencia de un abogado para formalizar la disolución matrimonial."
            imageSrc="/images/DivorcioNotarial.jpg"
            link="/servicios/divorcio"
          />
        </Container>
      </div>
    </div>
  )
}

export default page