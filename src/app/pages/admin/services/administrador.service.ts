import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Administrador } from '../models/administrador';

@Injectable({
  providedIn: 'root'
})
export class AdministradorService {

  constructor(private http: HttpClient) { }

  getAdministradores(){
    return this.http.get<Administrador[]>(`${environment.apiUrl}administradores`);
  }

  salvaAdmin(json: string){
    return this.http.post(`${environment.apiUrl}administrador/`, json);
  }

  deletaAdmin(id: number){
    return this.http.delete(`${environment.apiUrl}administrador/${id}`);
  }

  getAdmin(id:number){
    return this.http.get<Administrador>(`${environment.apiUrl}administrador/${id}`);
  }

  alteraAdmin(json, id:number){
    return this.http.put(`${environment.apiUrl}administrador/${id}`, json);
  }
}
