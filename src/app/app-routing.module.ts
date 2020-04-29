import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/admin/login/login.component';
import { AutenticacaoGuard } from './autenticacao.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/cliente',
    pathMatch: 'full'
  },
  {
    path: 'admin',
    loadChildren: () => import('./pages/admin/admin.module').then(mod => mod.AdminModule),
    //canActivate: [AutenticacaoGuard],
    //canActivateChild: [AutenticacaoGuard],
  },
  {
    path: 'cliente',
    loadChildren: () => import('./pages/cliente/cliente.module').then(mod => mod.ClienteModule),
    canActivate: [AutenticacaoGuard],
    //canActivateChild: [AutenticacaoGuard],
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
