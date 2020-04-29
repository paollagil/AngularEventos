import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { EventoComponent } from './evento/evento.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { HistoricoComponent } from './historico/historico.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ClienteRoutingModule } from './cliente-routing.module';
import { MenuComponent } from './menu/menu.component';
import { ItemCarrinhoComponent } from './item-carrinho/item-carrinho.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent, 
    EventoComponent, 
    CarrinhoComponent, 
    HistoricoComponent, 
    LoginComponent, 
    CadastroComponent, MenuComponent, ItemCarrinhoComponent],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    ReactiveFormsModule
  ]
})
export class ClienteModule { }
