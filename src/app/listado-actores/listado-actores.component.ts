import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActoresService } from '../servicios/actores.service'; // Asegúrate de tener bien importado tu servicio
import { Actor } from '../../models/actor';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-listado-actores',
  standalone: true,
  templateUrl: './listado-actores.component.html',
  styleUrls: ['./listado-actores.component.scss'],
  imports: [CommonModule]
})
export class ListadoActoresComponent implements OnInit {
  actores: Actor[] = [];

  @Output() actorSeleccionado = new EventEmitter<Actor>();


  constructor(private actoresService: ActoresService) {}

  ngOnInit(): void {
    this.obtenerActores(); // Llamar al servicio para obtener actores al iniciar
  }

  obtenerActores(): void {
    this.actoresService.obtenerActores().subscribe((actores) => {
      this.actores = actores; // Asignar actores obtenidos
    });
  }

  eliminarActor(id: string | undefined): void {
    if (id) {
      this.actoresService.eliminarActor(id).then(() => {
        alert('Actor eliminado con éxito');
        this.obtenerActores(); // Recargar lista tras eliminar
      });
    }
  }

  editarActor(actor: Actor): void {
    // Lógica de edición: aquí podrías redirigir a un formulario de edición
    console.log('Editar actor:', actor);
    // Puedes implementar la lógica de edición o redirigir al componente de alta
  }

  seleccionarActor(actor: Actor) {
    this.actorSeleccionado.emit(actor);
  }

}
