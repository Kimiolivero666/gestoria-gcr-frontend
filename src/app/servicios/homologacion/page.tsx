
"use client";


import HeroExtranjeria from "../../../components/serviciosComponents/HeroExtranjeria";

import styles from "./pageHomologacion.module.css";


import Contenido from "@/components/serviciosComponents/Contenido";

const extranejeriaTitle = "Homologación de estudios";
const extranejeriaImage = "/images/HomologaciónDeEstudios.jpg";

const CATEGORIA_SLUG = "homologacion"; // Define el valor del slug

const HomologacionPage = () => {
    return (
        <div className={styles.extranjeria}>
            <div className={styles.HeroExtranjeria}>
                <HeroExtranjeria
                    title={extranejeriaTitle}
                    imageUrl={extranejeriaImage}
                />
            </div>

            <Contenido categoriaSlug={CATEGORIA_SLUG} />


        </div>
    );
};

export default HomologacionPage;