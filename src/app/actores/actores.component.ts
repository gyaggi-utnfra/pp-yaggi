import { Component } from '@angular/core';
import { ListadoActoresComponent } from '../listado-actores/listado-actores.component';
import { DetalleActorComponent } from '../detalle-actor/detalle-actor.component';
import { DetallePaisComponent } from '../detalle-pais/detalle-pais.component';
import { PeliculasActorComponent } from '../peliculas-actor/peliculas-actor.component';
import { Actor } from '../../models/actor';

@Component({
  selector: 'app-actores',
  templateUrl: './actores.component.html',
  styleUrls: ['./actores.component.scss'],
  standalone: true,
  imports: [
    ListadoActoresComponent,
    DetalleActorComponent,
    DetallePaisComponent,
    PeliculasActorComponent,
  ],
})
export class ActoresComponent {
  actorSeleccionado: Actor | null = null;

  // Aquí está el método que selecciona el actor y lo asigna
  seleccionarActor(actor: Actor) {
    this.actorSeleccionado = actor;
  }

  seleccionarPais(pais: string) {
    if (this.actorSeleccionado) {
      this.actorSeleccionado.pais = pais; // Asigna el país completo al actor seleccionado
    }
  }
  
}
