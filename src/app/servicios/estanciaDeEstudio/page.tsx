
"use client";


import { Container } from "react-bootstrap";
import HeroExtranjeria from "../../../components/serviciosComponents/HeroExtranjeria";

import styles from "./estanciaDeEstudio.module.css";


import Contenido from "@/components/serviciosComponents/Contenido";

const extranejeriaTitle = "Estancia de estudios";
const extranejeriaImage = "/images/EstanciaEstudios.jpg";

const CATEGORIA_SLUG = "estancia-de-estudios"; // Define el valor del slug

const EstudiosPage = () => {
    return (
        <div className={styles.estanciaDeEstudio}>
            <div className={styles.HeroEstanciaDeEstudio}>
                <HeroExtranjeria
                    title={extranejeriaTitle}
                    imageUrl={extranejeriaImage}
                />
            </div>

            <Container>
                <div className={styles.contenidoEstancia}>
                    <p className={styles.parrafoEstancia}>
                        Se ha de entender que la Estancia por estudios está regulado RD 1155/2024, de 19 de noviembre, por el que se aprueba el Reglamento de la Ley Orgánica 4/2000, de 11 de enero, sobre derechos y libertades de los extranjeros en España y su integración social.
                    </p>
                    <p className={styles.parrafoEstancia}>
                        Asimismo, se enmarca como un visado o una autorización de estancia de larga duración por estudios, movilidad de alumnos, servicios
                        de voluntariado o actividades formativas.
                    </p>
                    <p className={styles.parrafoEstancia}>
                        No obstante, hay que diferenciar entre un visado y una autorización en territorio español. El visado, requiere que el solicitante
                        lo inste desde el país de origen en el respectivo Consulado español, en este caso, es válido para cualquier formación establecida
                        en la norma. En cambio, cuando se realiza la solicitud en territorio español, sólo será para determinadas formaciones. Ahora bien,
                        en el caso del visado, si éste es de una duración mayor a seis meses, el interesado desde su ingreso a España tiene un mes para
                        solicitar su TIE (tarjeta de identidad del extranjero) en la Comisaría de Policía competente.
                    </p>
                    <p className={styles.parrafoEstancia}>
                        Este tipo de permisos permite al extranjero no comunitario permanecer en territorio español para realizar alguna de las siguientes
                        actividades:
                    </p>
                    <ul className={styles.listaEstancia}>
                        <li>
                            Realización de estudios superiores en una institución o centro de enseñanza superior reconocido en España, en el marco de un
                            programa a tiempo completo, que conduzca a la obtención de un título de educación superior reconocido.
                        </li>
                        <li>
                            Realización de estudios de educación secundaria postobligatoria en un centro de enseñanza autorizado en España, en el marco de
                            un programa a tiempo completo que conduzca a la obtención de un título reconocido.
                        </li>
                        <li>
                            Participación en un programa de movilidad de alumnos con el fin de seguir un programa de enseñanza secundaria obligatoria o
                            postobligatoria en un centro docente o científico oficialmente reconocido.
                        </li>
                        <li>
                            Prestación de un servicio de voluntariado dentro de un programa que persiga objetivos de interés general para una causa sin
                            ánimo de lucro en el que las actividades no son remuneradas, excepto en forma de reembolso de gastos, dinero de bolsillo o ambos.
                        </li>
                        <li>
                            Realización de actividades formativas o de un programa a tiempo completo, que conduzca a la obtención de un título de educación
                            superior reconocido.
                        </li>
                    </ul>

                </div>


                <h4 className={styles.subtituloEstancia}>
                    Debe recordarse que no todas las formaciones se pueden instar desde España, y que de acuerdo al lugar donde lo solicites los plazos son distintos, por ello <span> ES NECESARIO QUE TE INFORMES Y ASESORES CORRECTAMENTE, PARA ELLO PUEDES CONTAR CON NOSOTROS.</span>
                </h4>
            </Container>
            <Contenido categoriaSlug={CATEGORIA_SLUG} />


        </div>
    );
};

export default EstudiosPage;