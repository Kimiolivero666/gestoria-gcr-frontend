
"use client";


import { Container } from "react-bootstrap";
import HeroExtranjeria from "../../../components/serviciosComponents/HeroExtranjeria";

import styles from "./pageDivorcio.module.css";


import Contenido from "@/components/serviciosComponents/Contenido";

const extranejeriaTitle = "Divorsio Notarial";
const extranejeriaImage = "/images/DivorcioNotarial.jpg";

const CATEGORIA_SLUG = "divorcio"; // Define el valor del slug

const HomologacionPage = () => {
    return (
        <div className={styles.extranjeria}>
            <div className={styles.HeroExtranjeria}>
                <HeroExtranjeria
                    title={extranejeriaTitle}
                    imageUrl={extranejeriaImage}
                />
            </div>
            <Container>
            <ul className={styles.listaDivorcio}>
                <li>
                    Las relaciones de parejas son complejas y no siempre salen bien, por ello cuando existe un vínculo legal que las une como es el caso del matrimonio es adecuado saber diferenciar entre una separación y un divorcio.
                </li>
                <li>
                    En la separación no se rompe el vínculo matrimonial, sino que se genera la ruptura de la convivencia, por lo que los cónyuges no pueden volver a contraer matrimonio, a pesar de que la separación la hayan hecho vía legal, en ese sentido, esta figura deja una ventana abierta a la continuidad de la relación, ya que existe una posibilidad de reconciliación y que dicha separación sólo sea temporal, puesto que no se ha concretado mediante la figura jurídica del divorcio.
                </li>
                <li>
                    Ahora bien, el divorcio, se caracteriza por la disolución del vínculo matrimonial, y por ende, el cese de las obligaciones de los cónyuges, las cuales se ceñirán al convenio regulador que se establezca. En ese sentido, se puede solicitar el divorcio por mutuo acuerdo o ir a los Tribunales en caso que los cónyuges no puedan llegar a conciliar sus diferencias.
                </li>
                <li>
                    Cuando los cónyuges prefieren pactar y realizar un divorcio por mutuo acuerdo tienen la opción de hacerlo mediante el Notario, no obstante, no todos los casos pueden ir por esta vía, dado que se requiere el cumplimiento de una serie de requisitos para poder realizar un divorcio ante notario.
                </li>
            </ul>
            </Container>

            <Contenido categoriaSlug={CATEGORIA_SLUG} />


        </div>
    );
};

export default HomologacionPage;