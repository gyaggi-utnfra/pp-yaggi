import { Component, EventEmitter, Output } from '@angular/core';
import { ActoresService, Actor } from '../servicios/actores.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabla-actores',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabla-actores.component.html',
  styleUrls: ['./tabla-actores.component.scss']
})
export class TablaActoresComponent {
  @Output() actorSeleccionado = new EventEmitter<Actor>();
  actores: Actor[] = [];

  constructor(private actoresService: ActoresService) {
    this.obtenerActores();
  }

  obtenerActores() {
    this.actoresService.obtenerActores().subscribe((data) => {
      this.actores = data.sort((a, b) => a.nombre.localeCompare(b.nombre)); // Ordenar alfabéticamente por nombre
    });
  }

  seleccionarActor(actor: Actor) {
    this.actorSeleccionado.emit(actor);
  }
}
