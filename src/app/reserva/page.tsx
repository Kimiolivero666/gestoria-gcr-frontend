import CalendlyEmbed from "@/components/CalendlyEmbed";
import styles from "./pageReserva.module.css";

export default function ReservaPage() {
  const calendlyUrl = 'https://calendly.com/migueloliveropazos/cita-de-asesoria';

  return (
    <div >

      <CalendlyEmbed url={calendlyUrl} />
      <p className={styles.parrafoCita}>Una vez agendada la cita rellena los datos del formulario. Recuerda que la duración de la cita es de 30 minutos.
        El pago de la asesoría se realiza después de rellenar el formulario. En caso de no poder asistir, se devolverá el dinero siempre que
        cancele la cita con mínimo de 48 horas previas a la reunión pactada, en caso contrario no se hará devolución. El coste de la cita es de
        50 euros incluido IVA.</p>
    </div>
  );
}