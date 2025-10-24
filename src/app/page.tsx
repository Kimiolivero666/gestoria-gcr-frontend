
import Link from "next/link";
import styles from "./page.module.css";
import Hero from "@/components/Hero";
import Carrusel from "@/components/Carrusel";
import BotonAgendar from "@/components/BotonAgendar";
import { Container } from "react-bootstrap";
import BotonCita from "@/components/BotonCita";
import CarouselMobile from "@/components/CarouselMobile";

export default function Home() {
    return (
        <main className={styles.main}>


            <div className={styles.heroContainer}>
                <Hero />
                <div className={styles.cta}>
                    <Link href="/reserva">
                        <BotonAgendar />
                    </Link>
                </div>
            </div>
            <div>
                <h2 className={styles.h2}>Conocé nuestros servicios</h2>
            </div>
            <Container>
                <div className={styles.carrusel}>
                    <Carrusel />
                </div>
            </Container>

            {/* carrusel mobile */}

            <Container>
                <div className={styles.carruselMobile}>
                    <CarouselMobile />
                </div>
            </Container>

            <div className={styles.pContainer}>
                <Container>
                    <div className={styles.pBox}>
                        <p className={styles.p}>“Somos una empresa cuyo objetivo es brindar una asesoría personalizada e integral al cliente, acompañándolo y orientándolo paso a paso en todo el proceso de su trámite. Somos claros, objetivos, directos y sin rodeos”.</p>
                    </div>
                    <div className={styles.BotonCitaContainer}>
                        <Link href="/reserva">
                            <BotonCita />
                        </Link>
                    </div>
                </Container>
            </div>

            <div className={styles.mapsContainer}>
                <Container>
                    <div className={styles.oficinaContainer}>
                        <span className={styles.oficinaLine} />
                        <h2 className={styles.oficinaTitle}>
                            ¿Estás en España? <br />
                            acércate a nuestra oficina
                        </h2>
                    </div>
                    <div className={styles.mapWrapper}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5638.715506753905!2d2.7957674759102735!3d41.97625627123111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12bae73873043b8f%3A0xc401d0cfeb20c508!2sCarrer%20Major%2C%2040%2C%2017190%20Salt%2C%20Girona!5e1!3m2!1ses!2ses!4v1759138984544!5m2!1ses!2ses" width="100%" height="450" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>

                    <div className={styles.BotonCitaContainer}>
                        <Link href="/reserva">
                            <BotonCita />
                        </Link>
                    </div>
                </Container>
            </div>
        </main>
    );
}