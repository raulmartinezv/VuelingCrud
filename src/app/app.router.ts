import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { AlumnoComponent } from './alumno/alumno.component';
import { AgregarAlumnoComponent } from './agregar-alumno/agregar-alumno.component';
import { ActualizarAlumnoComponent } from './actualizar-alumno/actualizar-alumno.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'alumno', pathMatch: 'full' },
  { path: 'alumno', component: AlumnoComponent },
  { path: 'agregar-alumno', component: AgregarAlumnoComponent },
  { path: 'actualizar-alumno', component: ActualizarAlumnoComponent },
];

export const routing = RouterModule.forRoot(appRoutes);

export class AppRouter { }
