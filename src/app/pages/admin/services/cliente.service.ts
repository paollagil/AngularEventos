import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../models/cliente';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private cliente: Cliente = new Cliente();

  constructor(private http: HttpClient) { }

  getClientes(){
    return this.http.get<Cliente[]>(`${environment.apiUrl}clientes`);
  }

  salvaCliente(json: string){
    return this.http.post(`${environment.apiUrl}/cliente/`, json);
  }

  deletaCliente(id: number){
    return this.http.delete(`${environment.apiUrl}/cliente/${id}`);
  }

  getCliente(id:number){
    return this.http.get<Cliente>(`${environment.apiUrl}/cliente/${id}`);
  }

  alteraCliente(json, id:number){
    return this.http.put(`${environment.apiUrl}cliente/${id}`, json);
  }
}
