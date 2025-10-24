// pricingData.ts

export interface PriceItem {
  id: number;
  title: string;
  price: string;
  notes?: string;
  fullWidth?: boolean; // Para el último elemento
}

export const pricingData: PriceItem[] = [
  {
    id: 1,
    title: "Cita presencial o por videollamada",
    price: "50€",
    notes: "Incluye Iva. Tiempo: 30 minutos. Revisar condiciones.",
  },
  {
    id: 2,
    title: "Arraigos",
    price: "302,5€",
    notes: "Incluye Iva, no tasas",
  },
  {
    id: 3,
    title: "Modificación y/o renovaciones de residencias",
    price: "50€",
    notes: "Incluye Iva, no tasas",
  },
  {
    id: 4,
    title: "residencia de familiar o ciudadano español",
    price: "350€",
    notes: "Incluye Iva, no tasas",
  },
  {
    id: 5,
    title: "Residencia no lucrativa",
    price: "350€",
    notes: "Incluye Iva, no tasas",
  },
  {
    id: 6,
    title: "Nacionalidad por residencia",
    price: "420€",
    notes: "Incluye Iva, no tasas",
  },
  {
    id: 7,
    title: "Estancia por estudios",
    price: "350€",
    notes: "• Asesoría\n• preparación y revisión del expediente.\nIncluye Iva, no tasas",
  },
  {
    id: 8,
    title: "homologación de estudios universitarios",
    price: "250€",
    notes: "• Asesoría\n• preparación y revisión del expediente.\nIncluye Iva, no tasas",
  },
  {
    id: 9,
    title: "Cambio de titularidad de coche",
    price: "130€",
    notes: "Incluye Iva, no tasas",
  },
  {
    id: 10,
    title: "Canje de carné de conducir",
    price: "250€",
    notes: "Incluye Iva, no tasas",
  },
  // La última sección de "Otros servicios" será un componente separado.
];