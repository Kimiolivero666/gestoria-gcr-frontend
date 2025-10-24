
"use client";


import HeroExtranjeria from "../../../components/serviciosComponents/HeroExtranjeria";

import styles from "./pageExtranjeria.module.css";


import Contenido from "@/components/serviciosComponents/Contenido";

const extranejeriaTitle = "Extranjería";
const extranejeriaImage = "/images/imgExtranjería.jpg";

const CATEGORIA_SLUG = "extranjeria"; // Define el valor del slug

const ExtranjeriaPage = () => {
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

export default ExtranjeriaPage;