import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.services';
import { RegistroForm } from '../models/form.models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private loginService: LoginService,
  ) { }

  ngOnInit(): void {
    
  }

  formularioRegistro = this.formBuilder.group({
    usuario: ['', Validators.required],
    password: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
    checkBox: ['']
  });

submitForm(){
  let user: RegistroForm = new RegistroForm(
    this.formularioRegistro.value.usuario,
    this.formularioRegistro.value.password,
    this.formularioRegistro.value.checkBox
    
)

  this.loginService.login(user.usuario, user.password, user.checkBox).subscribe(
    (response) => {
      console.log(response);
      this.loginService.setToken(response.id_token);
      console.log(response.id_token);
      this.router.navigate(['/app-admin']);
    },
    (error) => {
      window.alert('Usuario incorrecto');
      console.log(error);
    }
  );
}
}
