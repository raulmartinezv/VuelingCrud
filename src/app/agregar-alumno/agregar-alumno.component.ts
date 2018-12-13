import { Component, OnInit } from '@angular/core';

import { AlumnoService } from '../alumno/alumno.service';
import { Alumno } from '../alumno/alumno';

@Component({
  selector: 'app-agregar-alumno',
  templateUrl: './agregar-alumno.component.html',
  styleUrls: ['./agregar-alumno.component.css']
})
export class AgregarAlumnoComponent implements OnInit {
  alumno = new Alumno('', '', '');
  constructor(private alumnoService: AlumnoService) { }

  ngOnInit() {
  }


  public add() {
    console.log('Entra en el modo add');
    console.log('Add alumno' + this.alumno.nombre);
    this.alumnoService.addAlumno(this.alumno);
  }
}
