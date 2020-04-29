import { Component, OnInit } from '@angular/core';
import { EventoService } from '../services/evento.service';
import { Evento } from '../models/evento';
import { IngressoService } from '../services/ingresso.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss']
})
export class CarrinhoComponent implements OnInit {

  itens = [];

  constructor(
    private eventoService: EventoService,
    private ingressoService: IngressoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getItems();
  }

  getItems() {
    var itens = JSON.parse(localStorage.getItem('carrinho'));
    for (let index = 0; index < itens.length; index++) {
      this.eventoService.getEvento(itens[index].evento).subscribe((resposta) => {
        let itemCarrinho = new ItemCarrinho();
        itemCarrinho.evento = resposta;
        itemCarrinho.quantidade = itens[index].quantidade;
        this.itens.push(itemCarrinho);
      });
    }
  }

  finalizaCompra(){
    if(localStorage.getItem('carrinho') != undefined){
      var idCliente = JSON.parse(localStorage.getItem("usuarioAutenticado")).id;
      var carrinho = JSON.parse(localStorage.getItem('carrinho'));
      for (let index = 0; index < carrinho.length; index++) {
        var element = carrinho[index];
        this.ingressoService.setIngressoComprado(element.evento, element.quantidade, idCliente).subscribe((resposta) => {
          carrinho.splice(index, 1);
          localStorage.setItem('carrinho', JSON.stringify(carrinho));
          carrinho = JSON.parse(localStorage.getItem('carrinho'));
          this.router.navigate(['/cliente/home']);
        }, (error) => {
          console.error(error);
        });
      }
      this.itens = [];
    }
  }

}
export class ItemCarrinho {
  evento: Evento;
  quantidade: number;
}