import { Component, OnInit } from '@angular/core';
import { EventoService } from '../services/evento.service';
import { Evento } from '../models/evento';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})
export class EventoComponent implements OnInit {
  
  eventos: Evento[];

  constructor(private eventoService: EventoService) {}

  ngOnInit(): void {
    this.listarEventos();
  }

  listarEventos(){
    this.eventoService.getEventos().subscribe((resposta)=>{
      this.eventos = resposta;
      console.log(this.eventos);
    });
  }
}
