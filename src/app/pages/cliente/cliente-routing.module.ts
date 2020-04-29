import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { HomeComponent } from './home/home.component';
import { EventoComponent } from './evento/evento.component';
import { HistoricoComponent } from './historico/historico.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { AutenticacaoGuard } from 'src/app/autenticacao.guard';
import { ItemCarrinhoComponent } from './item-carrinho/item-carrinho.component';


const routes: Routes = [
    {
        path: '',
        redirectTo: 'home'
    },
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [AutenticacaoGuard]
    },
    {
        path: 'cadastro',
        component: CadastroComponent,
        canActivate: [AutenticacaoGuard]
    },
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [AutenticacaoGuard]
    },
    {
        path: 'evento/:id',
        component: EventoComponent,
        canActivate: [AutenticacaoGuard]
    },
    {
        path: 'historico',
        component: HistoricoComponent,
        canActivate: [AutenticacaoGuard]
    },
    {
        path: 'carrinho',
        component: CarrinhoComponent,
        canActivate: [AutenticacaoGuard]
    },
    {
        path: 'item-carrinho',
        component: ItemCarrinhoComponent,
        canActivate: [AutenticacaoGuard]
    },
    {
        path: '**',
        redirectTo: '/home'
      },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
