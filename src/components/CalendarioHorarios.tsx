'use client'

import { useEffect, useState } from "react";
import axios from "axios";

// Interfaz para la respuesta de la API de Strapi con los atributos
interface HorarioBaseStrapi {
  id: number;
  attributes: {
    diaSemana: string;
    horaInicio: string;
    horaFin: string;
    publishedAt: string;
    createdAt: string;
    updatedAt: string;
  };
}

interface ExcepcionStrapi {
  id: number;
  attributes: {
    fecha: string;
    bloqueado: boolean;
    horaInicio: string;
    horaFin: string;
    publishedAt: string;
    createdAt: string;
    updatedAt: string;
  };
}

interface HorarioBase {
  diaSemana: string;
  horaInicio: string;
  horaFin: string;
}

interface Excepcion {
  fecha: string;
  bloqueado: boolean;
}

interface Dia {
  dia: number;
  inicio?: string;
  fin?: string;
  bloqueado?: boolean;
}

export default function CalendarioHorarios({ mes, año }: { mes: number, año: number }) {
  const [dias, setDias] = useState<Dia[]>([]);
  const [horarioBase, setHorarioBase] = useState<HorarioBase[]>([]);
  const [excepciones, setExcepciones] = useState<Excepcion[]>([]);

  useEffect(() => {
    // Traer horario base
    axios.get("/api/horario-bases")
      .then(res => {
        // Mapear los datos para obtener solo los atributos
        const formattedData = res.data.data.map((item: HorarioBaseStrapi) => item.attributes);
        setHorarioBase(formattedData);
      })
      .catch(err => console.error("Error al obtener HorarioBase:", err));

    // Traer excepciones
    axios.get("/api/excepcions")
      .then(res => {
        const formattedData = res.data.data.map((item: ExcepcionStrapi) => item.attributes);
        setExcepciones(formattedData);
      })
      .catch(err => console.error("Error al obtener Excepciones:", err));
  }, []);

  useEffect(() => {
    if (!horarioBase.length) {
      console.log("Horario base no cargado, no se renderizará el calendario.");
      return;
    }

    const numDias = new Date(año, mes, 0).getDate();
    const diasMes: Dia[] = [];

    // Los días de la semana en Strapi están en español, con la primera letra mayúscula.
    // El método getDay() de JavaScript devuelve un número (0 = domingo).
    // Creamos un array para hacer coincidir el número con el nombre del día en Strapi.
    const diasSemanaStrapi = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

    for (let d = 1; d <= numDias; d++) {
      const fecha = new Date(año, mes - 1, d);
      const diaSemana = fecha.getDay(); // 0 = domingo
      const nombreDia = diasSemanaStrapi[diaSemana];

      const base = horarioBase.find(h => h.diaSemana === nombreDia);
      const excepcion = excepciones.find(e => {
        const fechaExcepcion = new Date(e.fecha);
        return fechaExcepcion.getFullYear() === fecha.getFullYear() &&
               fechaExcepcion.getMonth() === fecha.getMonth() &&
               fechaExcepcion.getDate() === fecha.getDate();
      });

      diasMes.push({
        dia: d,
        inicio: excepcion?.bloqueado ? undefined : base?.horaInicio,
        fin: excepcion?.bloqueado ? undefined : base?.horaFin,
        bloqueado: excepcion?.bloqueado || false,
      });
    }

    setDias(diasMes);
  }, [horarioBase, excepciones, mes, año]);

  return (
    <div>
      <h3>{mes}/{año}</h3>
      <div className="row">
        {dias.map(dia => (
          <div key={dia.dia} className="col-md-2 mb-3">
            <div style={{
              border: "1px solid #ccc",
              padding: "10px",
              cursor: dia.bloqueado ? "not-allowed" : "pointer",
              background: dia.bloqueado ? "#f8d7da" : "#d4edda"
            }}>
              <div>Día {dia.dia}</div>
              {dia.inicio ? <div>{dia.inicio} - {dia.fin}</div> : <div>Bloqueado</div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}