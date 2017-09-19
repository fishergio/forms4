import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`

  /*.ng-invalid.ng-touched:not(form) {
    border: 1px solid red;
  }*/

  .invalid-input {
    border: 1px solid red;    
  }

  .invalid {
    color: red;
  }

  .valid {
    border: 1px solid green;
  }
  
  `]
})
export class TemplateComponent implements OnInit {

  constructor() { }

  user:Object = {
    name: null,
    lastname: null,
    email: null,
    country: "",
    sex: "Hombre",
    accept: false
  }


  countries = [
    {
      code: 'MEX', 
      name: 'Mexico'
    },
    {
      code: 'CAN',
      name: 'Canada'
    },
    {
      code: 'ARG',
      name: 'Argentina'
    }
  ]

  sexos: string[] = ['Hombre', 'Mujer', 'Indefinido'];



  ngOnInit() {
  }

  sendForm(forma: any) {
    console.log("Enviar formulario", forma);
    console.log("Valor", forma.value)
    console.log("Usuario", this.user);
  }

}
