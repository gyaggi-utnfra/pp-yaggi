import { Routes } from '@angular/router';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { AltaPeliculaComponent } from './alta-pelicula/alta-pelicula.component';
import { ActoresComponent } from './actores/actores.component';
import { AltaActorComponent } from './alta-actor/alta-actor.component';

export const routes: Routes = [
  { path: 'peliculas', component: PeliculasComponent },
  { path: 'altaPelicula', component: AltaPeliculaComponent },
  { path: 'actores', component: ActoresComponent },
  { path: 'altaActor', component: AltaActorComponent },
  { path: '', redirectTo: '/peliculas', pathMatch: 'full' },
];