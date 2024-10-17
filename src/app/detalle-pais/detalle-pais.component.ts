import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalle-pais',
  templateUrl: './detalle-pais.component.html',
  styleUrls: ['./detalle-pais.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class DetallePaisComponent {
  @Input() pais: string | null = null; // Cambiado a string

  get nombrePais(): string | null {
    return this.pais; // Retorna el nombre del país
  }
}
