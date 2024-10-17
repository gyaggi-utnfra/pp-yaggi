import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { PeliculasService } from '../servicios/peliculas.service';
import { Pelicula } from '../../models/pelicula';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-peliculas-actor',
  templateUrl: './peliculas-actor.component.html',
  styleUrls: ['./peliculas-actor.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class PeliculasActorComponent implements OnInit, OnChanges {
  @Input() actorId: string | null = null;
  peliculas: Pelicula[] = [];

  constructor(private peliculasService: PeliculasService) {}

  ngOnInit() {
    // Puedes dejar esto vacío ya que vamos a usar ngOnChanges
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['actorId'] && this.actorId) {
      this.obtenerPeliculas();
    }
  }

  obtenerPeliculas() {
    this.peliculasService.obtenerPeliculasPorProtagonista(this.actorId!).subscribe((peliculas) => {
      this.peliculas = peliculas;
    });
  }
}
