import { Component, OnInit } from '@angular/core';
import { AdministradorService } from '../services/administrador.service';
import { Administrador } from '../models/administrador';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {

  administradores: Administrador[];

  constructor(private administradorService: AdministradorService) {}

  ngOnInit(): void {
  }

}
