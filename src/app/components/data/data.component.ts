import { Validator } from 'codelyzer/walkerFactory/walkerFn';
import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

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
    correo: "spg@jomare.com",
    pasatiempos: ["Boxeo", "Ver series", "Gym"]
  }

  constructor() { 

    console.log(this.user);

    this.forma = new FormGroup({

      'fullname': new FormGroup({
        'nombre': new FormControl('', [Validators.required, Validators.minLength(4)]),
        'apellido': new FormControl('', Validators.required),
      }),
      'correo': new FormControl('', [Validators.required,
         Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]),
     
         'pasatiempos': new FormArray([
        new FormControl('Boxeo', Validators.required)
      ])   

    });

    // this.forma.setValue(this.user); //Cargar por defecto
  }

  addHobbie() {
    (<FormArray>this.forma.controls['pasatiempos']).push(
      new FormControl('', Validators.required)
    )
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
