
"use client";


import { Container } from "react-bootstrap";
import HeroExtranjeria from "../../../components/serviciosComponents/HeroExtranjeria";

import styles from "./pageCAP.module.css";




const extranejeriaTitle = "Curso CAP";
const extranejeriaImage = "/images/CAP.jpg";



const CapPage = () => {
    return (
        <div className={styles.extranjeria}>
            <div className={styles.HeroExtranjeria}>
                <HeroExtranjeria
                    title={extranejeriaTitle}
                    imageUrl={extranejeriaImage}
                />
            </div>
            <h3 className={styles.tituloCAP}>Curso CAP (certificado de
                aptitud profesional)</h3>

            <Container>
                <p className={styles.parrafoCAP}>
                    Debido a la falta de trabajadores en el sector de la conducción en España, ya sea para camiones o transporte público, muchos extranjeros extracomunitarios han tenido la oportunidad de encontrar un puesto laboral en territorio español. Ahora bien, esto no es tan sencillo, ya que para lograrlo hay que pasar un proceso migratorio que permita obtener una residencia con permiso de trabajo.

                </p>
                <p className={styles.parrafoCAP}>
                    El proceso inicia con una solicitud de ESTANCIA POR ESTUDIOS del llamado CURSO CAP, que es una formación por la cual se obtiene el Certificado de Aptitud Profesional que acredita a una persona tener la formación obligatoria y necesaria para conducir camiones o autobuses en España, siendo válido en todo el territorio de la Unión Europea.
                </p>
                <p className={styles.parrafoCAP}>
                    Este curso va dirigido a aquellos conductores del CAP inicial o en su defecto, a aquellos cuyos permisos de conducir son anteriores al año 2008/2009. Cabe señalar que el CAP se debe renovar cada cinco años.
                </p>
                <p className={styles.parrafoCAP}>
                    Es necesario hacer hincapié que, el curso de Certificado de Aptitud profesional se debe realizar en un centro autorizado, por eso debes de verificar que el lugar donde solicites una plaza cumpla con este requisito, ya que, de lo contrario, la formación no será válida.
                </p>
                <p className={styles.parrafoCAP}>
                    Asimismo, como requisito para poder trabajar en el sector y realizar de manera exitosa el proceso migratorio, es necesario que el extranjero que esté interesado en migrar mediante este proceso, cuente con el permiso de conducir C o D y que además su país tenga convenio con el estado español en relación a las homologaciones de carné de conducir, ya que de esta manera será más sencillo encontrar una oferta laboral, y así cambiar su status migratorio de estancia de estudios a un permiso de residencia y trabajo de régimen general.
                </p>
                <p className={styles.parrafoCAP}>
                    Como ya se mencionó este proceso no es sencillo, sin embargo, con una buena asesoría se puede lograr, por eso lo primero que debes hacer es informarte y asesorarte con un profesional adecuado.
                </p>
                <p className={styles.parrafoCAP}>
                    Debes saber que deberás invertir dinero en este proceso, pero también es importante reconocer que si realizas todas las etapas de manera correcta lograrás una estabilidad jurídica en relación al status migratorio, que te permitirá en un futuro obtener la nacionalidad española, siempre que cumplas con los requisitos exigidos en la norma.
                </p>
                <p className={styles.parrafoCAP}>
                    Para realizar el curso CAP debes presentar la solicitud de la estancia por estudios, ya sea en el consulado de tu país o en el territorio español.
                </p>
                <p className={styles.parrafoCAP}>
                    Además, debes tener todos los documentos necesarios y respetar los plazos, ya que de lo contrario no obtendrás el permiso.
                </p>
                <p className={styles.parrafoCAP}>
                    Entre los documentos a presentar están:
                </p>
                <ul className={styles.listaCAP}>
                    <li>Solicitud debidamente cumplimentada y firmada</li>
                    <li>Pasaporte en vigor</li>
                    <li>Carta de admisión del centro autorizado para impartir el curso CAP</li>
                    <li>Demostrar medios económicos suficientes para tu sustento durante tu estancia y para el viaje de retorno</li>
                    <li>Certificado de antecedentes penales apostillados, en caso que la estancia pase los seis </li>
                </ul>
            </Container>
        </div>
    );
};

export default CapPage;