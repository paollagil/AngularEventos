import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministradorComponent } from './administrador/administrador.component';
import { ClienteComponent } from './cliente/cliente.component';
import { EventoComponent } from './evento/evento.component';
import { LocalComponent } from './local/local.component';
import { IngressoComponent } from './ingresso/ingresso.component';
import { MenuComponent } from './menu/menu.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FormLocalComponent } from './form-local/form-local.component';
import { FormEventoComponent } from './form-evento/form-evento.component';
import { FormClienteComponent } from './form-cliente/form-cliente.component';
import { FormAdminComponent } from './form-admin/form-admin.component';
import { FormIngressoComponent } from './form-ingresso/form-ingresso.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LocalListagemComponent } from './local-listagem/local-listagem.component';
import { EventosListagemComponent } from './eventos-listagem/eventos-listagem.component';
import { ClientesListagemComponent } from './clientes-listagem/clientes-listagem.component';
import { AdministradorListagemComponent } from './administrador-listagem/administrador-listagem.component';
import { AlterarLocalComponent } from './alterar-local/alterar-local.component';
import { AlterarEventoComponent } from './alterar-evento/alterar-evento.component';
import { AlterarClienteComponent } from './alterar-cliente/alterar-cliente.component';
import { AlterarAdminComponent } from './alterar-admin/alterar-admin.component';



@NgModule({
  declarations: [
    AdministradorComponent,
    ClienteComponent,
    EventoComponent,
    LocalComponent,
    IngressoComponent,
    MenuComponent,
    HomeComponent,
    LoginComponent,
    FormLocalComponent,
    FormEventoComponent,
    FormClienteComponent,
    FormAdminComponent,
    FormIngressoComponent,
    LocalListagemComponent,
    EventosListagemComponent,
    ClientesListagemComponent,
    AdministradorListagemComponent,
    AlterarLocalComponent,
    AlterarEventoComponent,
    AlterarClienteComponent,
    AlterarAdminComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
