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
      name: "sarahi",
      lastname: "molina"
    },
    email: "spg@jomare.com"
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
  }

  saveChanges(){
    console.log(this.forma.value);
    console.log(this.forma)
  }

 

}
