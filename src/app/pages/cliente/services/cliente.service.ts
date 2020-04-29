import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  autenticar(json){
    return this.http.post(`${environment.apiUrl}cliente/login/`, json);
  }
}
