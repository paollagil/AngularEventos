import { Component, OnInit } from '@angular/core';
import { LocalService } from '../services/local.service';
import { Local } from '../models/local';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-local-listagem',
  templateUrl: './local-listagem.component.html',
  styleUrls: ['./local-listagem.component.scss']
})
export class LocalListagemComponent implements OnInit {

  locais: Local[];

  constructor(private localService: LocalService, private router: Router) { }

  ngOnInit(): void {
    this.listarLocais();
  }

  listarLocais() {
    this.localService.getLocais().subscribe((resposta) => {
      this.locais = resposta;
      console.log(this.locais);
    });
  }

  deletarLocal(id: number) {
    this.localService.deletaLocal(id).subscribe((resposta) => {
      console.log(resposta);
      this.router.navigateByUrl('/admin/local-listagem', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/admin/locais']);
      });
    });
  }

}
