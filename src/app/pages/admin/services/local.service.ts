import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Local } from "../models/local";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  constructor(private http: HttpClient) { }

  getLocais(){
    return this.http.get<Local[]>(`${environment.apiUrl}locais`);
  }

  salvaLocal(json: string){
    return this.http.post(`${environment.apiUrl}/local/`, json);
  }

  deletaLocal(id: number){
    return this.http.delete(`${environment.apiUrl}/local/${id}`);
    
  }

  buscaLocal(id:number){
    return this.http.get(`${environment.apiUrl}/local/${id}`);
  }

  getLocal(id:number){
    return this.http.get<Local>(`${environment.apiUrl}/local/${id}`);
  }

  alteraLocal(json, id:number){
    return this.http.put(`${environment.apiUrl}local/${id}`, json);
  }
}
