import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Actor } from '../../models/actor';

@Component({
  selector: 'app-detalle-actor',
  standalone: true,
  templateUrl: './detalle-actor.component.html',
  imports: [CommonModule]
})
export class DetalleActorComponent {
  @Input() actor: Actor | null = null;
}
