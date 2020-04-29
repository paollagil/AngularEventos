import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { EventoService } from '../services/evento.service';
import { Router, ActivatedRoute } from '@angular/router';
import { LocalService } from '../services/local.service';
import { Local } from '../models/local';
import { Evento } from '../models/evento';

@Component({
  selector: 'app-form-evento',
  templateUrl: './form-evento.component.html',
  styleUrls: ['./form-evento.component.css']
})
export class FormEventoComponent implements OnInit {

  formEvento = this.novoEventoForm();
  // formEvento = new FormGroup({
  //   "nome": new FormControl(''),
  //   "descricao": new FormControl(''),
  //   "dataHora": new FormControl(''),
  //   "local": new FormControl(''),
  //   "valorIngresso": new FormControl(''),
  //   "quantidadeIngresso": new FormControl(''),
  //   "indicador": new FormControl(0),
  //   "dataLimite": new FormControl('')
  // });

  locais: Local[];
  local: any;
  eventoAntes: any;
  id: number;

  constructor(
    private route: ActivatedRoute,
    private eventoService: EventoService, private localService: LocalService, private router: Router) { }

  ngOnInit(): void {
    this.listarLocais();
    this.getParam();
    console.log(this.id);
    if (this.id == undefined) {
      // Novo Evento
      this.formEvento = this.novoEventoForm();
    }
    else {
      // Editar Evento
      this.eventoService.getEvento(this.id).subscribe((resposta) => {
        console.log(resposta);
        this.formEvento = this.editarEventoForm(resposta);
      });
    }
  }

  private novoEventoForm() {
    return new FormGroup({
      "nome": new FormControl(''),
      "descricao": new FormControl(''),
      "dataHora": new FormControl(''),
      "local": new FormControl(''),
      "valorIngresso": new FormControl(''),
      "quantidadeIngresso": new FormControl(''),
      "indicador": new FormControl(0),
      "dataLimite": new FormControl('')
    });
  }

  private editarEventoForm(evento: any) {

    return new FormGroup({
      "nome": new FormControl(evento.nome),
      "descricao": new FormControl(evento.descricao),
      "dataHora": new FormControl(new Date(evento.dataHora).toISOString().substring(0, 16)),
      "local": new FormControl(evento.local.idLocal),
      "valorIngresso": new FormControl(evento.valorIngresso),
      "quantidadeIngresso": new FormControl(evento.quantidadeIngresso),
      "indicador": new FormControl(0),
      "dataLimite": new FormControl(new Date(evento.dataLimite).toISOString().substring(0, 16))
    });
  }

  private getParam(): void {
    this.route.params.subscribe(
      (data) => {
        this.id = data.id;
      }
    );
  }

  salvarEvento() {

    this.localService.buscaLocal(this.formEvento.value.local).subscribe((resposta) => {
      this.formEvento.value.local = resposta;
      this.formEvento.value.indicador = parseInt(this.formEvento.value.indicador);
      this.formEvento.value.valorIngresso = parseFloat(this.formEvento.value.valorIngresso);
      this.eventoAntes = this.formEvento.value;
      console.log(JSON.stringify(this.formEvento.value));
      if (this.id == undefined) {
        this.eventoService.salvaEvento(this.eventoAntes).subscribe((resposta) => {
          console.log(resposta);
          this.router.navigate(['admin/eventos']);
        });
      } else {
        this.eventoService.alteraEvento(this.eventoAntes, this.id).subscribe((resposta) => {
          this.router.navigate(['admin/eventos']);
        });
      }
    });

  }

  listarLocais() {
    this.localService.getLocais().subscribe((resposta) => {
      this.locais = resposta;
      console.log(this.locais);
    });
  }

}
