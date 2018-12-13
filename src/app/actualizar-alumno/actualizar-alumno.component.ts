import { Component, OnInit } from '@angular/core';
import { AlumnoService } from '../alumno/alumno.service';

import {Router} from '@angular/router';
import { Alumno } from '../alumno/alumno';
@Component({
  selector: 'app-actualizar-alumno',
  templateUrl: './actualizar-alumno.component.html',
  styleUrls: ['./actualizar-alumno.component.css']
})
export class ActualizarAlumnoComponent implements OnInit {

  alumno: Alumno;

  constructor(private router: Router, private alumnoService: AlumnoService) { }

  ngOnInit() {
    this.alumno = this.alumnoService.getAlumno(this.alumnoService.id);
  }

  public actualizar() {
    console.log('Entra en actualizar');
    this.alumnoService.modAlumno(this.alumnoService.id, this.alumno);
    this.router.navigate(['/alumno']);
  }

  public volver() {
    console.log('Entra en volver');
    this.router.navigate(['/alumno']);
  }

}
