import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoGuard implements CanActivate {
  constructor(private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.isAutenticado(state.url);
    //return true;
  }

  private isAutenticado(url: string): boolean {
    console.log(url);
    if (localStorage.getItem("usuarioAutenticado") == undefined) {
      console.log("NÃO");
      if (url == '/cliente/cadastro') {
        return true;
      } 
      else if (url != '/cliente/login') {
        this.router.navigate(['/cliente/login']);
        return false;
      } else {
        return true;
      }
    } else {
      console.log("SIM");
      if (url == '/cliente/login' || url == '/cliente/cadastro') {
        this.router.navigate(['/cliente/home']);
        return true;
      }
      return true;
    }
  }
}
