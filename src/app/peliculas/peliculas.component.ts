// src/app/peliculas/peliculas.component.ts
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PeliculasService } from '../servicios/peliculas.service';
import { Pelicula } from '../../models/pelicula';
import { TablaPeliculasComponent } from '../tabla-peliculas/tabla-peliculas.component';
import { DetallePeliculaComponent } from '../detalle-pelicula/detalle-pelicula.component';
import { CommonModule } from '@angular/common'; // Importar CommonModule
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.scss'],
  standalone: true,
  imports: [CommonModule, TablaPeliculasComponent, DetallePeliculaComponent,RouterLink]
})
export class PeliculasComponent implements OnInit {
  peliculas$!: Observable<Pelicula[]>;
  peliculaSeleccionada: Pelicula | null = null; // Película seleccionada puede ser null

  constructor(private peliculasService: PeliculasService) {}

  ngOnInit(): void {
    this.peliculas$ = this.peliculasService.obtenerPeliculas();
  }

  mostrarDetalle(pelicula: Pelicula) {
    this.peliculaSeleccionada = pelicula; // Asignar película seleccionada
  } 
}
