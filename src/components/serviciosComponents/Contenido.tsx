"use client";

import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./Contenido.module.css";
import { BlocksRenderer, BlocksContent } from "@strapi/blocks-react-renderer";
import ContactPromo from "./ContactPromo";

// Tipado de las PROPS
interface ContenidoProps {
  categoriaSlug: string;
}

interface Seccion {
  id: number;
  titulo: string;
  descripcion: BlocksContent;
  slug: string;
}


const Contenido: React.FC<ContenidoProps> = ({ categoriaSlug }) => {
  const [data, setData] = useState<Seccion[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const API_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

  useEffect(() => {
    if (!categoriaSlug) {
      setIsLoading(false);
      return;
    }

    const fetchData = async () => {
      setIsLoading(true);
      try {
        // ✅ Filtro directo por slug (sin buscar el ID antes)
        const res = await fetch(
          `${API_URL}/api/seccions?populate=*&filters[categoria][slug][$eq]=${encodeURIComponent(
            categoriaSlug
          )}&\mathbf{sort=createdAt:desc}`, // <-- Ordena las secciones de la más nueva a la más antigua
          { cache: "no-store" }
        );

        if (!res.ok) {
          throw new Error(`Error en la API de Strapi: ${res.status}`);
        }

        const json = await res.json();
        setData(json.data || []);
      } catch (err) {
        console.error("Error al cargar datos:", err);
        setData([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [categoriaSlug, API_URL]);

  // 🌀 Estado de carga
  if (isLoading) {
    return (
      <div className="text-center my-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
      </div>
    );
  }

  // ⚠️ Sin contenido
  if (!data || data.length === 0) {
    return <p>No hay contenido publicado para la categoría: {categoriaSlug}.</p>;
  }

  // ✅ Render del contenido
  return (
    <div className={styles.section}>
      <Container>

        {data.map(
          (seccion) => (
            <Row key={seccion.id} className={styles.row}>
              <Col xs={12} md={4} className={styles.titleCol}>
                <div className={styles.titleWrap}>
                  <h2 className={styles.title}>{seccion.titulo}</h2>
                  <div className={styles.underline} />
                </div>
              </Col>

              <Col xs={12} md={8} className={styles.contentCol}>
                <div className={styles.contentC}>
                  <BlocksRenderer
                    content={seccion.descripcion}
                    blocks={{
                      paragraph: ({ children }) => (
                        <p style={{ marginBottom: "1.5em", lineHeight: "1.5" }}>
                          {children}
                        </p>
                      ),
                    }}
                  />
                </div>
              </Col>
              <ContactPromo /> 
            </Row>

          )

        )}

      </Container>

    </div>
  );
};

export default Contenido;
