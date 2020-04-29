import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdministradorComponent } from './administrador/administrador.component';
import { HomeComponent } from './home/home.component';
import { LocalComponent } from './local/local.component';
import { EventoComponent } from './evento/evento.component';
import { ClienteComponent } from './cliente/cliente.component';
import { FormLocalComponent } from './form-local/form-local.component';
import { FormEventoComponent } from './form-evento/form-evento.component';
import { FormClienteComponent } from './form-cliente/form-cliente.component';
import { FormAdminComponent } from './form-admin/form-admin.component';
import { LoginComponent } from './login/login.component';
import { LocalListagemComponent } from './local-listagem/local-listagem.component';
import { EventosListagemComponent } from './eventos-listagem/eventos-listagem.component';
import { ClientesListagemComponent } from './clientes-listagem/clientes-listagem.component';
import { AlterarLocalComponent } from './alterar-local/alterar-local.component';
import { AlterarClienteComponent } from './alterar-cliente/alterar-cliente.component';
import { AlterarAdminComponent } from './alterar-admin/alterar-admin.component';
import { AlterarEventoComponent } from './alterar-evento/alterar-evento.component';
import { AdministradorListagemComponent } from './administrador-listagem/administrador-listagem.component';


const routes: Routes = [{
    path: '',
    component: HomeComponent
},
{
  path: 'administradores',
  component: AdministradorComponent
},
{
    path: 'locais',
    component: LocalComponent
},
{
    path: 'eventos',
    component: EventoComponent
},
{
    path: 'clientes',
    component: ClienteComponent
},
{
    path: 'ingressos',
    component: LocalComponent
},
{
    path: 'form-local',
    component: FormLocalComponent
},
{
    path: 'form-evento',
    component: FormEventoComponent
},
{
    path: 'form-cliente',
    component: FormClienteComponent
},
{
    path: 'form-admin',
    component: FormAdminComponent
},
{
    path: 'login',
    component: LoginComponent
},
{
    path: 'home',
    component: HomeComponent
},
{
    path: 'local-listagem',
    component: LocalListagemComponent
},
{
    path: 'evento-listagem',
    component: EventosListagemComponent
},
{
    path: 'clientes-listagem',
    component: ClientesListagemComponent
},
{
    path: 'admin-listagem',
    component: AdministradorListagemComponent
},
{
    path: 'alterar-local/:id',
    component: AlterarLocalComponent
},
{
    path: 'alterar-cliente/:id',
    component: AlterarClienteComponent
},
{
    path: 'alterar-admin/:id',
    component: AlterarAdminComponent
},
{
    path: 'alterar-evento/:id',
    component: FormEventoComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
