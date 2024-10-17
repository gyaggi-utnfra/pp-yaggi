import { Injectable } from '@angular/core';
import { Firestore, collection, getDocs, query, where, DocumentData, addDoc, doc, deleteDoc, updateDoc } from '@angular/fire/firestore';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { Pais } from '../tabla-paises/tabla-paises.component';

export interface Actor {
  id?: string;
  nombre: string;
  apellido: string;
  documento: string;
  edad: number;
  pais: string;
}

export interface Pelicula {
  id?: string;
  titulo: string;
  anio: number;
  genero: string;
  protagonista: string;  // Nombre o ID del actor protagonista
}

@Injectable({
  providedIn: 'root',
})
export class ActoresService {
  constructor(private firestore: Firestore) {}

  // Método para obtener la lista de actores
  obtenerActores(): Observable<Actor[]> {
    const actoresRef = collection(this.firestore, 'actores');

    return from(getDocs(actoresRef)).pipe(
      map((snapshot) => {
        const actores: Actor[] = [];
        snapshot.forEach((doc) => {
          const data = doc.data() as DocumentData;
          actores.push({
            id: doc.id,
            nombre: data['nombre'],
            apellido: data['apellido'],
            documento: data['documento'],
            edad: data['edad'],
            pais: data['pais'],
          } as Actor);
        });
        return actores;
      })
    );
  }

  // Método para agregar un nuevo actor
  agregarActor(actor: Omit<Actor, 'id'>): Promise<any> {
    const actoresRef = collection(this.firestore, 'actores');
    return addDoc(actoresRef, { ...actor })
      .then((docRef) => {
        console.log('Actor añadido con ID:', docRef.id);
        return docRef;
      })
      .catch((error) => {
        console.error('Error al agregar el actor: ', error);
        throw error;
      });
  }

  // Método para eliminar un actor por id
  eliminarActor(id: string): Promise<void> {
    const actorDocRef = doc(this.firestore, `actores/${id}`);
    return deleteDoc(actorDocRef)
      .then(() => console.log('Actor eliminado con éxito!'))
      .catch((error) => console.error('Error al eliminar el actor: ', error));
  }

  // Método para editar un actor por id
  editarActor(id: string, actor: Omit<Actor, 'id'>): Promise<void> {
    const actorDocRef = doc(this.firestore, `actores/${id}`);
    return updateDoc(actorDocRef, { ...actor })
      .then(() => console.log('Actor actualizado con éxito!'))
      .catch((error) => console.error('Error al actualizar el actor: ', error));
  }
  
}
