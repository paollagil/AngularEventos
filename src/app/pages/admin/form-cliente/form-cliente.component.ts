import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../services/cliente.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-cliente',
  templateUrl: './form-cliente.component.html',
  styleUrls: ['./form-cliente.component.css']
})
export class FormClienteComponent implements OnInit {

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
      this.router.navigate(['admin/clientes']);
    });
  }

}
