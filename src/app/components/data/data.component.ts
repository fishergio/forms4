import { Validator } from 'codelyzer/walkerFactory/walkerFn';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent {

  forma: FormGroup;

  user: Object = {
    fullname: {
      nombre: "sarahi",
      apellido: "molina"
    },
    correo: "spg@jomare.com"
  }

  constructor() { 

    console.log(this.user);

    this.forma = new FormGroup({

      'fullname': new FormGroup({
        'nombre': new FormControl('', [Validators.required, Validators.minLength(4)]),
        'apellido': new FormControl('', Validators.required),
      }),
      'correo': new FormControl('', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")])
    });

    // this.forma.setValue(this.user); //Cargar por defecto
  }

  saveChanges(){
    console.log(this.forma.value);
    console.log(this.forma);

    //this.forma.reset(this.user) /Resetear formulario

    this.forma.reset( {
      fullname: {
        nombre: "",
        apellido: ""
      },
      correo: ""
    })
  }
}
