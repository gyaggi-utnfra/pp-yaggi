import { Injectable } from '@angular/core';
import { Firestore, collection, getDocs, DocumentData, addDoc } from '@angular/fire/firestore';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { Timestamp } from '@angular/fire/firestore'; // Importa Timestamp
import { Pelicula } from '../../models/pelicula';


@Injectable({
  providedIn: 'root',
})
export class PeliculasService {
  constructor(private firestore: Firestore) {}

  obtenerPeliculas(): Observable<Pelicula[]> {
    const peliculasRef = collection(this.firestore, 'peliculas');
    return from(getDocs(peliculasRef)).pipe(
      map((snapshot) => {
        const peliculas: Pelicula[] = [];
        snapshot.forEach((doc) => {
          const data = doc.data() as DocumentData;
          peliculas.push({
            id: doc.id,
            nombre: data['nombre'],
            tipo: data['tipo'],
            fechaEstreno: data['fechaEstreno'] ? new Date(data['fechaEstreno'].seconds * 1000) : null, // Convierte timestamp a Date
            cantidadPublico: data['cantidadPublico'],
            foto: data['foto'],
            protagonista: data['protagonista'],
          } as Pelicula);
        });
        return peliculas;
      })
    );
  }

  obtenerPeliculasPorProtagonista(nombreActor: string): Observable<Pelicula[]> {
    const peliculasRef = collection(this.firestore, 'peliculas');
    return from(getDocs(peliculasRef)).pipe(
      map((snapshot) => {
        const peliculas: Pelicula[] = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          // Cambia 'protagonista' para que verifique que coincide con el nombreActor
          if (data['protagonista'] === nombreActor) {
            peliculas.push({
              id: doc.id,
              nombre: data['nombre'],
              tipo: data['tipo'],
              fechaEstreno: data['fechaEstreno'] ? new Date(data['fechaEstreno'].seconds * 1000) : null,
              cantidadPublico: data['cantidadPublico'],
              foto: data['foto'],
              protagonista: data['protagonista'],
            } as Pelicula);
          }
        });
        console.log(peliculas)
        return peliculas;
      })
    );
}

  


  agregarPelicula(pelicula: Omit<Pelicula, 'id'>): Promise<void> {
    const peliculasRef = collection(this.firestore, 'peliculas');
    
    // Convertimos fechaEstreno a un timestamp si tiene valor
    const peliculaParaGuardar = {
      ...pelicula,
      fechaEstreno: pelicula.fechaEstreno ? Timestamp.fromDate(pelicula.fechaEstreno) : null, // Convertir Date a Timestamp
    };

    return addDoc(peliculasRef, peliculaParaGuardar)
      .then(() => console.log('Película añadida con éxito!'))
      .catch((error) => console.error('Error al agregar la película: ', error));
  }
}
