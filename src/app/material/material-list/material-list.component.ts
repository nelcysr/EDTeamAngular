import { Component, OnInit } from '@angular/core';
import { Estudiante } from 'src/app/shared/model/estudiante';

@Component({
  selector: 'ed-material-list',
  templateUrl: './material-list.component.html',
  styleUrls: ['./material-list.component.css']
})
export class MaterialListComponent implements OnInit {

  estudiante1: Estudiante;
  estudiante2: Estudiante;

  constructor() { }

  ngOnInit() {
    console.log("Inicializando componente MaterialList");

    this.estudiante1 = {
      id: 1,
      nombre: "Nelcy Sierra",
      ciudad: "Bogotá",
      fotoURL: "https://img.icons8.com/color/420/edit-user-female.png"
    };


    this.estudiante2 = {
      id: 1,
      nombre: "Pepito Pérez",
      ciudad: "Cali",
      fotoURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI5TDjHkXbNGlduL7AEVMwGn4bc-QosNt7IRcp9fBJ4qN6N0pmHg"
    };

    setTimeout(() => {
      this.estudiante2.ciudad = "Bucaramanga";

      this.estudiante1 = {
        
        id: 7,
        nombre: 'Deyanira',
        ciudad: 'Leticia',
        fotoURL: "https://img.icons8.com/color/420/edit-user-female.png"
      }
    }, 7000);
    
  }

}
