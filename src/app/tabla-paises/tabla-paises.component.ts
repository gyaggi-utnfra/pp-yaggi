import { Component, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

export interface Pais {
  name: {
    common: string;
  };
  flags: {
    png: string; // URL de la bandera
  };
  code: string;  // Propiedad que almacena el código del país
}

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class TablaPaisesComponent {
  @Output() paisSeleccionado = new EventEmitter<string>(); // Emitir solo el nombre del país
  paises: Pais[] = [];

  constructor(private http: HttpClient) {
    this.obtenerPaises(); // Llama a la función para obtener la lista de países
  }

  obtenerPaises() {
    this.http.get<Pais[]>('https://restcountries.com/v3.1/all').subscribe((data) => {
      // Ordenar alfabéticamente por el nombre común
      this.paises = data.sort((a, b) => {
        const nombreA = a.name.common.toLowerCase();
        const nombreB = b.name.common.toLowerCase();
        return nombreA.localeCompare(nombreB); // Método más limpio para comparación
      });
    });
  }

  seleccionarPais(pais: Pais) {
    this.paisSeleccionado.emit(pais.name.common); // Emitir solo el nombre
  }
}
