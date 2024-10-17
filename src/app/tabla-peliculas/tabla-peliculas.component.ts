// src/app/tabla-peliculas/tabla-peliculas.component.ts
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pelicula } from '../../models/pelicula';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabla-peliculas',
  templateUrl: './tabla-peliculas.component.html',
  styleUrls: ['./tabla-peliculas.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class TablaPeliculasComponent {
  @Input() peliculas: Pelicula[] = []; // Lista de películas
  @Output() seleccionarPelicula = new EventEmitter<Pelicula>(); // Evento para seleccionar una película

  onPeliculaSeleccionada(pelicula: Pelicula) {
    this.seleccionarPelicula.emit(pelicula); // Emitir el evento con la película seleccionada
  }
}
