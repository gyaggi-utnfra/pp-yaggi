import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActoresService } from '../servicios/actores.service';
import { CommonModule } from '@angular/common';
import { TablaPaisesComponent } from '../tabla-paises/tabla-paises.component'; // Asegúrate de que la ruta sea correcta
import { Actor } from '../../models/actor';

@Component({
  selector: 'app-alta-actor',
  standalone: true,
  templateUrl: './alta-actor.component.html',
  styleUrls: ['./alta-actor.component.scss'],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, TablaPaisesComponent] // Asegúrate de importar el componente aquí
})
export class AltaActorComponent implements OnInit {
  nuevoActor: Actor = {
    nombre: '',
    apellido: '',
    documento: '',
    edad: 0,
    pais: ''  // Inicializa como string vacío
  };

  actores: Actor[] = []; // Lista de actores

  constructor(private actoresService: ActoresService) {}

  ngOnInit(): void {
    this.obtenerActores(); // Cargar actores al iniciar
  }

  obtenerActores() {
    this.actoresService.obtenerActores().subscribe((actores) => {
      this.actores = actores; // Asignar la lista de actores
    });
  }

  agregarActor() {
    this.actoresService.agregarActor(this.nuevoActor).then(() => {
      console.log('Actor agregado:', this.nuevoActor);
      alert('Actor agregado exitosamente');
      this.nuevoActor = { 
        nombre: '', 
        apellido: '', 
        documento: '', 
        edad: 0, 
        pais: ''  // Limpiar el formulario como string vacío
      };
      this.obtenerActores(); // Recargar la lista de actores
    }).catch((error) => {
      alert('Ocurrió un error al agregar el actor. Por favor, intenta nuevamente.');
      console.error(error);
    });
  }

  manejarPaisSeleccionado(pais: string) {  // Cambiado a string
    this.nuevoActor.pais = pais;  // Asignar solo el nombre del país
  }

}
