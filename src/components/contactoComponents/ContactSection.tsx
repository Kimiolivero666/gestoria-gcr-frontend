'use client';
import React, { useState } from 'react';
import styles from './ContactSection.module.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('enviando');

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('ok');
        setFormData({ name: '', phone: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <section className={styles.contactSection}>
      <Container fluid>
        <Row>
          <Col md={6} className={styles.formCol}>
            <Form className={styles.form} onSubmit={handleSubmit}>
              <Form.Group className="mb-4">
                <Form.Label className={styles.label}>NOMBRE</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  className={styles.input}
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label className={styles.label}>TELÉFONO</Form.Label>
                <Form.Control
                  type="text"
                  name="phone"
                  className={styles.input}
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label className={styles.label}>CORREO ELECTRÓNICO</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  className={styles.input}
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label className={styles.label}>MENSAJE</Form.Label>
                <Form.Control
                  as="textarea"
                  name="message"
                  rows={4}
                  className={styles.textarea}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Button type="submit" className={styles.submitBtn} disabled={status === 'enviando'}>
                {status === 'enviando' ? 'ENVIANDO...' : 'ENVIAR'}
              </Button>

              {status === 'ok' && <p className={styles.successMsg}>✅ Mensaje enviado correctamente</p>}
              {status === 'error' && <p className={styles.errorMsg}>❌ Error al enviar. Intenta nuevamente.</p>}

              <div className={styles.contactInfo}>
                <div className={styles.infoItem}>
                  <BsFillTelephoneFill size={20} className={styles.icon} />
                  <span>+34 680457918 – +34 872018394</span>
                </div>
                <div className={styles.infoItem}>
                  <FaInstagram size={20} className={styles.icon} />
                  <span>instagram</span>
                </div>
              </div>
            </Form>
          </Col>

          <Col md={6} className={styles.mapCol}>
             <iframe  className={styles.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5638.715506753905!2d2.7957674759102735!3d41.
97625627123111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.
1!3m3!1m2!1s0x12bae73873043b8f%3A0xc401d0cfeb20c508!2sCarrer%20Major%2C%2040%2C%2017190%20Salt%2C%20Girona!5e1!3m2!1ses!2ses!4v17591
38984544!5m2!1ses!2ses" width="100%" height="450" style={{ border: 0 }} allowFullScreen loading="lazy" 
referrerPolicy="no-referrer-when-downgrade"></iframe>
             

          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactSection;
