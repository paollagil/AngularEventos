import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AdministradorService } from '../services/administrador.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-admin',
  templateUrl: './form-admin.component.html',
  styleUrls: ['./form-admin.component.css']
})
export class FormAdminComponent implements OnInit {

  formAdmin = new FormGroup({
    "nome": new FormControl(''),
    "email": new FormControl(''),
    "senha": new FormControl(''),
  });

  constructor(private adminService: AdministradorService, private router: Router) { }

  ngOnInit(): void {
  }

  salvarAdmin() {
    this.adminService.salvaAdmin(this.formAdmin.value).subscribe((resposta) => {
      this.router.navigate(['admin/administradores']);
    });
  }

}
