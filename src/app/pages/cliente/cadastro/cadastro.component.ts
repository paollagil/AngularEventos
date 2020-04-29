import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ClienteService } from '../../admin/services/cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  formCliente = new FormGroup({
    "nome": new FormControl(''),
    "email": new FormControl(''),
    "senha": new FormControl(''),
    "cpf": new FormControl('')
  });

  constructor(private clienteService: ClienteService, private router: Router) { }

  ngOnInit(): void {
  }

  salvarCliente() {
    this.clienteService.salvaCliente(this.formCliente.value).subscribe((resposta) => {
      this.router.navigate(['cliente/login']);
    });
  }

}
