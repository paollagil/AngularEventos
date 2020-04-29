import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-carrinho',
  templateUrl: './item-carrinho.component.html',
  styleUrls: ['./item-carrinho.component.scss']
})
export class ItemCarrinhoComponent implements OnInit {

  @Input('itemCarrinho') itemCarrinho;
  quantidade = new FormControl('');

  constructor(
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.quantidade.setValue(this.itemCarrinho.quantidade);
  }

  maisIngresso() {
    let valorAtual = this.quantidade.value;
    if (valorAtual < 4) {
      this.atualizarQuantidade(true);
      this.quantidade.setValue(valorAtual + 1);
    }
  }

  menosIngresso() {
    let valorAtual = this.quantidade.value;
    if (valorAtual > 0) {
      this.atualizarQuantidade(false);
      this.quantidade.setValue(valorAtual - 1);
    }
  }

  private atualizarQuantidade(adicionar = true) {
    var carrinho = JSON.parse(localStorage.getItem('carrinho'));

    for (let index = 0; index < carrinho.length; index++) {
      let itemCarrinho = carrinho[index];

      if (itemCarrinho['evento'] == this.itemCarrinho.evento.idEvento) {

        if (adicionar) {
          console.log(itemCarrinho['quantidade'] + 1);
          itemCarrinho['quantidade'] = itemCarrinho['quantidade'] + 1;
          break;
        }
        else {
          itemCarrinho['quantidade'] = itemCarrinho['quantidade'] - 1;
          break;
        }
      }
    }
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
  }

  getTotalIngresso() {
    return this.itemCarrinho.evento.valorIngresso * this.quantidade.value;
  }

  removerIngressoEvento() {
    var carrinho = JSON.parse(localStorage.getItem('carrinho'));

    for (let index = 0; index < carrinho.length; index++) {
      let itemCarrinho = carrinho[index];

      if (itemCarrinho['evento'] == this.itemCarrinho.evento.idEvento) {
        carrinho.splice(index, 1);
        localStorage.setItem('carrinho', JSON.stringify(carrinho));
        this.router.navigateByUrl('/cliente/item-carrinho', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/cliente/carrinho']);
        });
      }
    }
  }
}
