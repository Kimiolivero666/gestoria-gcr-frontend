// test-calendar.ts
import { google, calendar_v3 } from "googleapis";
import keyJson from "./service-account.json" assert { type: "json" };

// Tipado del JSON del service account
interface ServiceAccount {
  type: string;
  project_id: string;
  private_key_id: string;
  private_key: string;
  client_email: string;
  client_id: string;
  auth_uri: string;
  token_uri: string;
  auth_provider_x509_cert_url: string;
  client_x509_cert_url: string;
  universe_domain?: string;
}

// Convertir JSON a objeto tipado
const key = keyJson as ServiceAccount;

// Crear cliente JWT (no OAuth2Client)
const auth = new google.auth.JWT({
  email: key.client_email,
  key: key.private_key,
  scopes: ["https://www.googleapis.com/auth/calendar"],
});

async function createEvent() {
  try {
    await auth.authorize(); // ✅ ahora sí funciona
    console.log("✅ Autenticación correcta");

    const calendar = google.calendar({ version: "v3", auth });

    const start = new Date();
    start.setHours(start.getHours() + 1);
    const end = new Date(start.getTime() + 30 * 60_000);

    const event: calendar_v3.Schema$Event = {
      summary: "Prueba rápida 🚀",
      description: "Evento creado con Node.js y TypeScript",
      start: { dateTime: start.toISOString(), timeZone: "Europe/Madrid" },
      end: { dateTime: end.toISOString(), timeZone: "Europe/Madrid" },
      conferenceData: {
        createRequest: { requestId: `req-${Date.now()}` },
      },
    };

    const response = await calendar.events.insert({
      calendarId: "primary",
      requestBody: event,
      conferenceDataVersion: 1,
    });

    console.log("✅ Evento creado:", response.data.htmlLink);
    console.log("📌 Link de Meet:", response.data.hangoutLink ?? "No disponible");
  } catch (err) {
    console.error("❌ Error al crear el evento:", err);
  }
}

createEvent();
