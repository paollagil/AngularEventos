import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IngressosDisponiveis } from '../models/ingressos-disponiveis';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IngressoService {

  constructor(private http: HttpClient) { }

  getIngressosDisponiveis(id: number) {
    return this.http.get<IngressosDisponiveis>(`${environment.apiUrl}ingresso/disponiveis/${id}`);
  }

  setIngressoComprado(evento: number, qt: number, cliente: number){
    return this.http.post(`${environment.apiUrl}ingresso/compra/`, {
      idEvento: evento,
      qt: qt,
      idCliente: cliente
    });
  }

}
