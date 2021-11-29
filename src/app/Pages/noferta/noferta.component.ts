import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/services/home.services';
import { LoginService } from 'src/app/services/login.services';
import { NOferta } from '../models/noferta.models';

@Component({
  selector: 'app-noferta',
  templateUrl: './noferta.component.html',
  styleUrls: ['./noferta.component.css'],
  providers:[LoginService, HomeService]
})
export class NofertaComponent implements OnInit {

  constructor(
    private router: Router,
    private formBuilder: FormBuilder, 
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
    
  }

  formularioRegistro = this.formBuilder.group({
    titulo: ['', Validators.compose([Validators.required, Validators.maxLength(100)])],
    descripcion: ['', Validators.compose([Validators.required, Validators.maxLength(300)])],
    empresa:  ['', Validators.compose([Validators.required, Validators.maxLength(50)])],
    salario: ['', Validators.required],
    ciudad: ['', Validators.compose([Validators.required, Validators.maxLength(50)])],
    email: ['', Validators.compose([Validators.email, Validators.required, Validators.maxLength(50)])],
  });
  

  addOfert(){
    let oferta = new NOferta(
      this.formularioRegistro.value.titulo, 
      this.formularioRegistro.value.descripcion, 
      this.formularioRegistro.value.empresa, 
      this.formularioRegistro.value.salario,
      this.formularioRegistro.value.ciudad, 
      this.formularioRegistro.value.email);
      console.log(oferta);
      this.loginService.postOffersData(oferta._titulo, oferta._descripcion, oferta._empresa, oferta._salario, oferta._ciudad, oferta._email).subscribe(oferta => console.log(oferta));
      this.router.navigate(['app-admin']);
  }  
}
