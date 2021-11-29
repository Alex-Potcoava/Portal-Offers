import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './Pages/admin/admin.component';
import { HomeComponent } from './Pages/home/home.component';
import { LoginComponent } from './Pages/login/login.component';
import { NofertaComponent } from './Pages/noferta/noferta.component';
import { OfertasComponent } from './Pages/ofertas/ofertas.component';

const routes: Routes = [
  { 
    path: '',
    redirectTo: 'app-home',
    pathMatch: 'full'
  },
  {
    path: 'app-home',
    component: HomeComponent
  },
  {
    path: 'app-login',
    component: LoginComponent
  },
  {
    path: 'app-noferta',
    component: NofertaComponent
  },
  {
    path: 'app-oferta/:id',
    component: OfertasComponent
  },
  {
    path: 'app-admin',
    component: AdminComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
