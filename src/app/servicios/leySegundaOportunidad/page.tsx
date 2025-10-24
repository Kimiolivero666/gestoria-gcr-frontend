
"use client";


import HeroExtranjeria from "../../../components/serviciosComponents/HeroExtranjeria";

import styles from "./pageLeySegundaOportunidad.module.css";


import Contenido from "@/components/serviciosComponents/Contenido";

const extranejeriaTitle = "Ley de Segunda Oportunidad";
const extranejeriaImage = "/images/LeySegundaOportunidad.jpg";

const CATEGORIA_SLUG = "ley-segunda-oportunidad"; // Define el valor del slug

const LeySegundaOportunidadPage = () => {
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

export default LeySegundaOportunidadPage;