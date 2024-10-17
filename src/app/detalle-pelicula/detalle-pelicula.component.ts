import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-detalle-pelicula',
  standalone: true,
  templateUrl: './detalle-pelicula.component.html',
  styleUrls: ['./detalle-pelicula.component.scss'],
  imports:[CommonModule]
})
export class DetallePeliculaComponent {
  @Input() pelicula: any; // Define la propiedad para recibir la película seleccionada
}
