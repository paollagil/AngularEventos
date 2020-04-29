import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin = new FormGroup({
    "email": new FormControl(''),
    "senha": new FormControl('')
  });

  constructor() { }

  ngOnInit(): void {
  }

  mostraValores(){
    console.log(this.formLogin.value.email);
    console.log(this.formLogin.value.senha);
  }

}
