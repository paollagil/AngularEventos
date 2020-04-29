import { Component, OnInit } from '@angular/core';
import { Cliente } from '../models/cliente';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  clientes: Cliente[];

  constructor(private clienteService: ClienteService) {}

  ngOnInit(): void {
    this.listarClientes();
  }

  listarClientes(){
    this.clienteService.getClientes().subscribe((resposta)=>{
      this.clientes = resposta;
      console.log(this.clientes);
    });
  }
}
