import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ClienteService } from '../services/cliente.service';
import { Login } from '../models/login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formLogin = new FormGroup({
    "email": new FormControl(''),
    "senha": new FormControl('')
  });

  login: Login = new Login();

  constructor(private clienteService: ClienteService, private router: Router) { }

  ngOnInit(): void {
  }

  logar() {
    this.login.email = this.formLogin.value.email;
    this.login.senha = this.formLogin.value.senha;
    this.clienteService.autenticar(this.login).subscribe((resposta) => {
      if (resposta.autenticado == true) {
        this.login.id = resposta.idCliente;
        console.log(resposta.autenticado);
        localStorage.setItem("usuarioAutenticado", JSON.stringify(this.login));
        this.router.navigate(['/cliente/home']);
      }
    });
  }

}
