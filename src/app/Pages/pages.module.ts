import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NofertaComponent } from './noferta/noferta.component';
import { OfertasComponent } from './ofertas/ofertas.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { LoginService } from '../services/login.services';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    NofertaComponent,
    OfertasComponent,
    AdminComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    HomeComponent,
    LoginComponent,
    NofertaComponent,
    OfertasComponent,
    AdminComponent
  ],
  providers: [LoginService]
})
export class PagesModule { }
