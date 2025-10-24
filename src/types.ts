// types.ts
export interface HorarioDia {
  dia: number;
  horarios: {
    inicio: string; // ejemplo: "09:00"
    fin: string;    // ejemplo: "09:15"
  }[];
}

export interface HorarioMes {
  mes: string; // "Octubre"
  año: number;
  dias: HorarioDia[];
}
