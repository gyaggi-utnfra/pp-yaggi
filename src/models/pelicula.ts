export interface Pelicula {
    id: string;
    nombre: string;
    tipo: string; // (terror, comedia, amor, otros)
    fechaEstreno: Date | null; // Usamos Date | null para manejar fechas
    cantidadPublico: number;
    foto: string;
    protagonista: string;
  }