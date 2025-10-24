
"use client";


import HeroExtranjeria from "../../../components/serviciosComponents/HeroExtranjeria";

import styles from "./pageDGT.module.css";


import Contenido from "@/components/serviciosComponents/Contenido";

const extranejeriaTitle = "DGT";
const extranejeriaImage = "/images/DGT.jpg";

const CATEGORIA_SLUG = "dgt"; // Define el valor del slug

const HomologacionPage = () => {
    return (
        <div className={styles.extranjeria}>
            <div className={styles.HeroExtranjeria}>
                <HeroExtranjeria
                    title={extranejeriaTitle}
                    imageUrl={extranejeriaImage}
                />
            </div>
            <h3 className={styles.tituloDGT}>DGT (trámites ante
                la dirección general de tráfico)</h3>

            <Contenido categoriaSlug={CATEGORIA_SLUG} />


        </div>
    );
};

export default HomologacionPage;