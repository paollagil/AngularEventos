import { Component, OnInit } from '@angular/core';
import { Evento } from '../models/evento';
import { EventoService } from '../services/evento.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  eventos: Evento[];

  constructor(private eventoService: EventoService) { }

  ngOnInit(): void {
    this.listarEventos();
  }

  listarEventos(){
    this.eventoService.getEventosDisponiveis().subscribe((resposta)=>{
      this.eventos = resposta;
      console.log(resposta);
    });
  }

  
}
