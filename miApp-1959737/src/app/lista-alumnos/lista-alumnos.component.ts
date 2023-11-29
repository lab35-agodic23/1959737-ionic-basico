import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/alumno.model';





@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.scss'],
})
export class ListaAlumnosComponent  implements OnInit {
  alumnos:any = ["Carlos", "Ximena", "Alberto", "Eduardo", "Baraba", "Georgina", "Kevin"];
  
  constructor() { 
  }
  agregaAlumno():void{
    console.log(this.nuevoAlumno);
    this.listaAlumnos.push(this.nuevoAlumno)
  }

  listaAlumnos:Alumno[]=[];
  nuevoAlumno:Alumno = {nombre:"", presente:false}
  
  ngOnInit() {}

}
