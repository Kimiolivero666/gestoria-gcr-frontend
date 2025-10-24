import React from 'react'
import styles from "./pageServicios.module.css";
import HeroSection from '@/components/serviciosComponents/HeroSection';
import { Container } from 'react-bootstrap';
import CardServicio from '@/components/serviciosComponents/CardServicio';
import CardServicio2 from '@/components/serviciosComponents/CardServicio2';
import ImagenServicioMobile from '@/components/serviciosComponents/imagenServicioMobile';

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
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit...
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            imageSrc="/images/Nacionalidad.jpg"
            link="/servicios/nacionalidad"
          />

          <ImagenServicioMobile
            imageSrc="/images/Extranjería.jpg"
          />

          <CardServicio2
            title=" Extranjería"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit...
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            imageSrc="/images/Extranjería.jpg"
            link="/servicios/extranjeria"
          />


          <CardServicio
            title="Homologación de estudios"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit...
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            imageSrc="/images/HomologaciónDeEstudios.jpg"
            link="/servicios/homologacion"
          />

          <ImagenServicioMobile
            imageSrc="/images/LeySegundaOportunidad.jpg"
          />

          <CardServicio2
            title="Ley segunda oportunidad"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit...
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            imageSrc="/images/LeySegundaOportunidad.jpg"
            link="/servicios/leySegundaOportunidad"
          />

          <CardServicio
            title="Estancia de estudios"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit...
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            imageSrc="/images/EstanciaEstudios.jpg"
            link="/servicios/estanciaDeEstudio"
          />

          <ImagenServicioMobile
            imageSrc="/images/DGT.jpg"
          />

          <CardServicio2
            title="DGT"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit...
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            imageSrc="/images/DGT.jpg"
            link="/servicios/dgt"
          />

          <CardServicio
            title="CAP"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit...
         Lorem ipsum dolor sit amet, consectetur adipiscing elit.
         Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            imageSrc="/images/CAP.jpg"
            link="/servicios/cap"
          />

          <ImagenServicioMobile
            imageSrc="/images/DivorcioNotarial.jpg"
          />

          <CardServicio2
            title="Divorcio notarial"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit...
         Lorem ipsum dolor sit amet, consectetur adipiscing elit.
         Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            imageSrc="/images/DivorcioNotarial.jpg"
            link="/servicios/divorcio"
          />
        </Container>
      </div>
    </div>
  )
}

export default page