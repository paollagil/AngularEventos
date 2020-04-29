import { Component, OnInit } from '@angular/core';
import { Administrador } from '../models/administrador';
import { AdministradorService } from '../services/administrador.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-administrador-listagem',
  templateUrl: './administrador-listagem.component.html',
  styleUrls: ['./administrador-listagem.component.scss']
})
export class AdministradorListagemComponent implements OnInit {

  administradores: Administrador[];

  constructor(private administradorService: AdministradorService, private router: Router) {}

  ngOnInit(): void {
    this.listarAdministradores();
  }

  listarAdministradores(){
    this.administradorService.getAdministradores().subscribe((resposta)=>{
      this.administradores = resposta;
      console.log(this.administradores);
    });
  }

  deletarAdmin(id: number){
    this.administradorService.deletaAdmin(id).subscribe((resposta) => {
      console.log(resposta);
      this.router.navigateByUrl('/admin/admin-listagem', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/admin/administradores']);
      });
    });
  }

}
