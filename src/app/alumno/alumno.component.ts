import { Component, OnInit } from '@angular/core';
import { AlumnoService } from './alumno.service';
import { Alumno } from './alumno';


import { Router } from '@angular/router';
@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent implements OnInit {

  alumnoName: string;
  public listAlumnos: Array<Alumno>;

  constructor(private router: Router, private alumnoservice: AlumnoService) { }

  ngOnInit() {
    this.refreshAlumnos();
  }

  refreshAlumnos() {
    this.alumnoName = '';
    console.log('Entra en el modo refreshAlumnos');
    this.listAlumnos = this.alumnoservice.getAlumnosList();
  }

  delete(alumno: Alumno) {
    this.alumnoservice.delete(alumno);
  }

  goToAlumnoDetails(id: number) {
    this.alumnoservice.id = id;
    this.router.navigate(['/actualizar-alumno']);
  }

  buscarAlumno() {
    console.log('Entra en buscaralumo');
    this.listAlumnos = this.alumnoservice.getAlumnoByName(this.alumnoName);
  }

}
