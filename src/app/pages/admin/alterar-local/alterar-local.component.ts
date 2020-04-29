import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LocalService } from '../services/local.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Local } from '../models/local';


@Component({
  selector: 'app-alterar-local',
  templateUrl: './alterar-local.component.html',
  styleUrls: ['./alterar-local.component.scss']
})
export class AlterarLocalComponent implements OnInit {

  local: Local = new Local();

  formLocal = new FormGroup({
    "nome": new FormControl(),
    "endereco": new FormControl(),
    "cep": new FormControl(),
    "capacidade": new FormControl()
  });

  constructor(private localService: LocalService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getParam();
    this.localService.getLocal(this.local.idLocal).subscribe((resposta) => {
      this.local = resposta;
      console.log(this.local);
    });
  }

  private getParam(): void {
    this.route.params.subscribe(
      (data) => {
        this.local.idLocal = data.id;
      }
    );
  }

  alterarLocal(){
    if(this.formLocal.value.nome == null){
      this.formLocal.value.nome = this.local.nome
    }
    if(this.formLocal.value.endereco == null){
      this.formLocal.value.endereco = this.local.endereco
    }
    if(this.formLocal.value.cep == null){
      this.formLocal.value.cep = this.local.cep
    }
    if(this.formLocal.value.capacidade == null){
      this.formLocal.value.capacidade = this.local.capacidade
    }
    this.localService.alteraLocal(this.formLocal.value, this.local.idLocal).subscribe((resposta) => {
      console.log(resposta);
      this.router.navigate(['admin/locais']);
    });
  }

}
