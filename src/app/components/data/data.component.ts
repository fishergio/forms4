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
        'apellido': new FormControl('', [
                                        Validators.required,
                                      this.noHerrera]),
      }),
      'correo': new FormControl('', [Validators.required,
         Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]),
     
         'pasatiempos': new FormArray([
        new FormControl('Boxeo', Validators.required)
      ]),
      'username': new FormControl('', Validators.required),            
      'password1': new FormControl('', Validators.required),      
      'password2': new FormControl()      

    });

    // this.forma.setValue(this.user); //Cargar por defecto

    this.forma.controls['password2'].setValidators([
      Validators.required, this.noIgual.bind(this.forma)
    ])
  }

  addHobbie() {
    (<FormArray>this.forma.controls['pasatiempos']).push(
      new FormControl('', Validators.required)
    )
  }

  noHerrera(control: FormControl): {[s:string]:boolean} {
    if(control.value === "herrera"){
      return{
        noherrera:true
      }
    }
    return null;

  }

  noIgual(control: FormControl): {[s:string]:boolean} {
    let forma:any = this;
    if(control.value !== forma.controls['password1'].value ){
      return{
        noiguales:true
      }
    }
    return null;

  }

  saveChanges(){
    console.log(this.forma.value);
    console.log(this.forma);

    //this.forma.reset(this.user) /Resetear formulario

    /*this.forma.reset( {
      fullname: {
        nombre: "",
        apellido: ""
      },
      correo: ""
    })*/
  }
}
