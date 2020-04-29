import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from '../services/cliente.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Cliente } from '../models/cliente';

@Component({
  selector: 'app-alterar-cliente',
  templateUrl: './alterar-cliente.component.html',
  styleUrls: ['./alterar-cliente.component.scss']
})
export class AlterarClienteComponent implements OnInit {

  cliente: Cliente = new Cliente();

  formCliente = new FormGroup({
    "nome": new FormControl(),
    "email": new FormControl(),
    "senha": new FormControl(),
    "cpf": new FormControl()
  });
  constructor(private clienteService: ClienteService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getParam();
    this.clienteService.getCliente(this.cliente.idCliente).subscribe((resposta) => {
      this.cliente = resposta;
      console.log(this.cliente);
    });
  }

  private getParam(): void {
    this.route.params.subscribe(
      (data) => {
        this.cliente.idCliente = data.id;
      }
    );
  }

  alterarCliente(){
    if(this.formCliente.value.nome == null){
      this.formCliente.value.nome = this.cliente.nome
    }
    if(this.formCliente.value.email == null){
      this.formCliente.value.email = this.cliente.email
    }
    if(this.formCliente.value.cpf == null){
      this.formCliente.value.cpf = this.cliente.cpf
    }
    if(this.formCliente.value.senha == null){
      this.formCliente.value.senha = this.cliente.senha
    }
    this.clienteService.alteraCliente(this.formCliente.value, this.cliente.idCliente).subscribe((resposta) => {
      console.log(resposta);
      this.router.navigate(['admin/clientes']);
    });
  }

}
