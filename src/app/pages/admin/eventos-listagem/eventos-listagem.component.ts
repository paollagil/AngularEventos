import { Component, OnInit } from '@angular/core';
import { EventoService } from '../services/evento.service';
import { Evento } from '../models/evento';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-eventos-listagem',
  templateUrl: './eventos-listagem.component.html',
  styleUrls: ['./eventos-listagem.component.scss']
})
export class EventosListagemComponent implements OnInit {

  eventos: Evento[];

  constructor(private eventoService: EventoService, private router: Router) {}

  ngOnInit(): void {
    this.listarEventos();
  }

  listarEventos(){
    this.eventoService.getEventos().subscribe((resposta)=>{
      this.eventos = resposta;
      console.log(this.eventos);
    });
  }

  deletarEvento(id: number){
    this.eventoService.deletaEvento(id).subscribe((resposta) => {
      console.log(resposta);
      this.router.navigateByUrl('/admin/evento-listagem', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/admin/eventos']);
    }); 
    });
  }
}
