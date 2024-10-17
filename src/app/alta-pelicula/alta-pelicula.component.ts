import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../servicios/peliculas.service';
import { Pelicula } from '../../models/pelicula';
import { ActoresService } from '../servicios/actores.service';
import { Actor } from '../../models/actor';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TablaActoresComponent } from '../tabla-actores/tabla-actores.component'; // Asegúrate de que la ruta sea correcta

@Component({
  selector: 'app-alta-pelicula',
  templateUrl: './alta-pelicula.component.html',
  styleUrls: ['./alta-pelicula.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, TablaActoresComponent] // Asegúrate de incluir el componente aquí
})
export class AltaPeliculaComponent implements OnInit {
  nuevaPelicula: Pelicula = {
    id: '',
    nombre: '',
    tipo: '',
    fechaEstreno: null,
    cantidadPublico: 0,
    foto: '',
    protagonista: '',
  };

  actores: Actor[] = [];

  constructor(private peliculasService: PeliculasService, private actoresService: ActoresService) {}

  ngOnInit() {
    this.actoresService.obtenerActores().subscribe(actores => {
      this.actores = actores;
    });
  }

  agregarPelicula() {
    if (this.nuevaPelicula.fechaEstreno) {
      this.nuevaPelicula.fechaEstreno = new Date(this.nuevaPelicula.fechaEstreno);
    }

    this.peliculasService.agregarPelicula(this.nuevaPelicula).then(() => {
      console.log('Película agregada:', this.nuevaPelicula);
      alert('Película agregada exitosamente');
      this.nuevaPelicula = {
        id: '',
        nombre: '',
        tipo: '',
        fechaEstreno: null,
        cantidadPublico: 0,
        foto: '',
        protagonista: '',
      };
    }).catch(error => {
      console.error('Error al agregar la película:', error);
    });
  }

  seleccionarActor(actor: Actor) {
    this.nuevaPelicula.protagonista = actor.nombre; 
  }
}
