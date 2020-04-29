import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventoService } from '../services/evento.service';
import { Evento } from '../models/evento';
import { IngressoService } from '../services/ingresso.service';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.scss']
})
export class EventoComponent implements OnInit {

  evento: Evento = new Evento();
  temIngressosDisponiveis: boolean = false;
  dataDisponivel: boolean = false;
  ingressosDisponiveis = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private eventoService: EventoService,
    private ingressoService: IngressoService
  ) { }

  ngOnInit(): void {
    this.getParam();
    this.eventoService.getEvento(this.evento.idEvento).subscribe((resposta) => {
      this.evento = resposta;
      console.log(this.evento);
    });
    this.ingressoService.getIngressosDisponiveis(this.evento.idEvento).subscribe((resposta) => {
      this.ingressosDisponiveis = resposta.quantidade;
      this.temIngressosDisponiveis = resposta.quantidade > 0;
    });
  }

  private getParam(): void {
    this.route.params.subscribe(
      (data) => {
        this.evento.idEvento = data.id;
      }
    );
  }

  public getBotaoDisponivel(): boolean {
    if (new Date() >= new Date(this.evento.dataLimite) || this.ingressosDisponiveis == 0) {
      return true;
    }
    return false;
  }
  public adicionarCarrinho() {
    var carrinho: any;
    var novoItemCarrinho = {
      evento: this.evento.idEvento,
      quantidade: 1
    };

    carrinho = localStorage.getItem('carrinho');
    if (carrinho != undefined) {
      carrinho = JSON.parse(carrinho);

      var flags = [], output = [], l = carrinho.length, i: number;
      for (i = 0; i < l; i++) {
        if (flags[carrinho[i].evento]) continue;
        flags[carrinho[i].evento] = true;
        output.push(carrinho[i].evento);
      }

      carrinho.push(novoItemCarrinho);

      if (output.includes(this.evento.idEvento) == false) {
        localStorage.setItem('carrinho', JSON.stringify(carrinho));
      }
    }
    else {
      carrinho = [novoItemCarrinho];
      localStorage.setItem('carrinho', JSON.stringify(carrinho));
    }
    this.router.navigate(['cliente/carrinho']);
  }
}
