import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Evento } from '../models/evento';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  constructor(private http: HttpClient) { }

  getEventos(){
    return this.http.get<Evento[]>(`${environment.apiUrl}eventos`);
  }

  getEvento(id: number){
    return this.http.get<Evento>(`${environment.apiUrl}evento/${id}`);
  }

  getEventosDisponiveis(){
    return this.http.get<Evento[]>(`${environment.apiUrl}eventos/disponiveis`);
  }
}
