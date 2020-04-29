import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LocalService } from '../services/local.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-local',
  templateUrl: './form-local.component.html',
  styleUrls: ['./form-local.component.css']
})
export class FormLocalComponent implements OnInit {

  formLocal = new FormGroup({
    "nome": new FormControl(''),
    "endereco": new FormControl(''),
    "cep": new FormControl(''),
    "capacidade": new FormControl('')
  });

  constructor(private localService: LocalService, private router: Router) { }

  ngOnInit(): void {
  }

  salvarLocal(){
    this.localService.salvaLocal(this.formLocal.value).subscribe((resposta) => {
      console.log(resposta);
      this.router.navigate(['admin/locais']);
    });
  }

}
