import { Component, OnInit } from '@angular/core';
import { Cliente } from '../models/cliente';
import { ClienteService } from '../services/cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes-listagem',
  templateUrl: './clientes-listagem.component.html',
  styleUrls: ['./clientes-listagem.component.scss']
})
export class ClientesListagemComponent implements OnInit {

  clientes: Cliente[];

  constructor(private clienteService: ClienteService, private router: Router) {}

  ngOnInit(): void {
    this.listarClientes();
  }

  listarClientes(){
    this.clienteService.getClientes().subscribe((resposta)=>{
      this.clientes = resposta;
      console.log(this.clientes);
    });
  }

  deletarCliente(id: number){
    this.clienteService.deletaCliente(id).subscribe((resposta) => {
      console.log(resposta);
      this.router.navigateByUrl('/admin/clientes-listagem', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/admin/clientes']);
      });
    });
  }

}
