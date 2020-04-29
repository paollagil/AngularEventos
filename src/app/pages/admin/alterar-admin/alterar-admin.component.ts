import { Component, OnInit } from '@angular/core';
import { AdministradorService } from '../services/administrador.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Administrador } from '../models/administrador';

@Component({
  selector: 'app-alterar-admin',
  templateUrl: './alterar-admin.component.html',
  styleUrls: ['./alterar-admin.component.scss']
})
export class AlterarAdminComponent implements OnInit {

  admin: Administrador = new Administrador();

  formAdmin = new FormGroup({
    "nome": new FormControl(),
    "email": new FormControl(),
    "senha": new FormControl()
  });

  constructor(private adminService: AdministradorService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getParam();
    this.adminService.getAdmin(this.admin.idAdministrador).subscribe((resposta) => {
      this.admin = resposta;
      console.log(this.admin);
    });
  }

  private getParam(): void {
    this.route.params.subscribe(
      (data) => {
        this.admin.idAdministrador = data.id;
      }
    );
  }

  alteraAdmin(){
    if(this.formAdmin.value.nome == null){
      this.formAdmin.value.nome = this.admin.nome
    }
    if(this.formAdmin.value.email == null){
      this.formAdmin.value.email = this.admin.email
    }
    if(this.formAdmin.value.senha == null){
      this.formAdmin.value.senha = this.admin.senha
    }
    this.adminService.alteraAdmin(this.formAdmin.value, this.admin.idAdministrador).subscribe((resposta) => {
      console.log(resposta);
      this.router.navigate(['admin/administradores']);
    });
  }

}
