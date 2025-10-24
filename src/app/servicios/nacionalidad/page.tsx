
"use client";


import { Container } from "react-bootstrap";
import HeroExtranjeria from "../../../components/serviciosComponents/HeroExtranjeria";

import styles from "./pageNacionalidad.module.css";


import Contenido from "@/components/serviciosComponents/Contenido";

const extranejeriaTitle = "Nacionalidad";
const extranejeriaImage = "/images/Nacionalidad.jpg";

const CATEGORIA_SLUG = "nacionalidad"; // Define el valor del slug

const NacionalidadPage = () => {
    return (
        <div className={styles.extranjeria}>
            <div className={styles.HeroExtranjeria}>
                <HeroExtranjeria
                    title={extranejeriaTitle}
                    imageUrl={extranejeriaImage}
                />
            </div>

            <Container>
                <div className={styles.contenidoNacionalidad}>
                    <p className={styles.parrafoNacionalidad}>
                        La nacionalidad es un vínculo jurídico que une a una persona con un Estado, dada esta relación el individuo adquiere una serie de derechos y obligaciones. La nacionalidad es reconocida como un derecho fundamental que tiene toda persona, dotándole de un status jurídico.


                    </p>
                    <p className={styles.parrafoNacionalidad}>
                        Ahora bien, la nacionalidad española se le puede conceder a un extranjero, esto dentro del marco del marco de su normativa, de unos supuestos específicos y
                        el cumplimiento de cada uno de los requisitos.
                    </p>
                    <p className={styles.parrafoNacionalidad}>
                        En ese sentido, existen distintas formas de acceder a una nacionalidad española, sin embargo, es necesario que te asesores adecuadamente para que tu
                        solicitud tenga éxito.
                    </p>
                    <p className={styles.parrafoNacionalidadBold}>
                        En Servei Integral GCR & Associats S.L. te ayudamos a realizar el trámite de manera sencilla, sólo tienes que contactarnos y sacar una cita.
                    </p>
                </div>

            </Container>
            <h2 className={styles.subtituloNacionalidad}>
                TE AYUDAMOS A GESTIONAR
            </h2>

            <Contenido categoriaSlug={CATEGORIA_SLUG} />


        </div>
    );
};

export default NacionalidadPage;