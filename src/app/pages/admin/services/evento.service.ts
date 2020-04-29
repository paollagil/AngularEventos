import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Evento } from "../models/evento";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  constructor(private http: HttpClient) { }

  getEventos(){
    return this.http.get<Evento[]>(`${environment.apiUrl}eventos`);
  }

  salvaEvento(json){
    return this.http.post(`${environment.apiUrl}/evento/`, json);
  }

  deletaEvento(id: number){
    return this.http.delete(`${environment.apiUrl}/evento/${id}`);
    
  }

  getEvento(id:number){
    return this.http.get<Evento>(`${environment.apiUrl}/evento/${id}`);
  }

  alteraEvento(json, id:number){
    return this.http.put(`${environment.apiUrl}evento/${id}`, json);
  }
}
