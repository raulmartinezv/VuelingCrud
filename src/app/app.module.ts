import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { AgregarAlumnoComponent } from './agregar-alumno/agregar-alumno.component';
import { AlumnoComponent } from './alumno/alumno.component';
import { AlumnoService } from './alumno/alumno.service';
import {TableModule} from 'primeng/table';

import { routing } from './app.router';

import { HttpClientModule } from '@angular/common/http';
import { ActualizarAlumnoComponent } from './actualizar-alumno/actualizar-alumno.component';

@NgModule({
  declarations: [
    AppComponent,
    AgregarAlumnoComponent,
    AlumnoComponent,
    ActualizarAlumnoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    TableModule,
    routing
  ],
  providers: [AlumnoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
