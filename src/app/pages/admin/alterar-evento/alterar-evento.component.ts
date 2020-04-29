import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { EventoService } from '../services/evento.service';
import { LocalService } from '../services/local.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Evento } from '../models/evento';
import { Local } from '../models/local';

@Component({
  selector: 'app-alterar-evento',
  templateUrl: './alterar-evento.component.html',
  styleUrls: ['./alterar-evento.component.scss']
})
export class AlterarEventoComponent implements OnInit {

  formEvento = new FormGroup({
    "nome": new FormControl(),
    "descricao": new FormControl(),
    "dataHora": new FormControl(),
    "local": new FormControl(),
    "valorIngresso": new FormControl(),
    "quantidadeIngresso": new FormControl(),
    "indicador": new FormControl(0),
    "dataLimite": new FormControl()
  });

  evento: Evento = new Evento();
  eventoAntes: any;
  locais: Local[];
  local: any;

  constructor(private eventoService: EventoService,
    private localService: LocalService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getParam();
    this.listarLocais();
  }

  private getParam(): void {
    this.route.params.subscribe(
      (data) => {
        this.evento.idEvento = data.id;
      }
    );
  }

  listarLocais() {
    this.localService.getLocais().subscribe((resposta) => {
      this.locais = resposta;
      console.log(this.locais);
    });
  }

  montaLocal() {
    this.localService.buscaLocal(this.formEvento.value.local).subscribe((resposta) => {
      this.formEvento.value.local = resposta;
      this.formEvento.value.indicador = parseInt(this.formEvento.value.indicador);
      this.formEvento.value.valorIngresso = parseFloat(this.formEvento.value.valorIngresso);
      this.eventoAntes = this.formEvento.value;
      console.log(JSON.stringify(this.formEvento.value));
    });
  }

  alterarEvento() {
    this.montaLocal();
    if (this.formEvento.value.nome == null) {
      this.formEvento.value.nome = this.evento.nome
    }
    if (this.formEvento.value.descricao == null) {
      this.formEvento.value.descricao = this.evento.descricao
    }
    this.eventoService.alteraEvento(this.formEvento.value, this.evento.idEvento).subscribe((resposta) => {
      console.log(resposta);
      this.router.navigate(['admin/locais']);
    });
  }

}
