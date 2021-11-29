import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/services/home.services';
import { LoginService } from 'src/app/services/login.services';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public ofertasArray!: Array<any>;

  constructor(
    private router: Router,
    private homeService: HomeService,
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
    this.getOfertas();
  }

  public getOfertas(): void{
    this.homeService.getOfertas().subscribe(
      response => {
        this.ofertasArray = response;
      },
      error => {
        console.log('Error' + JSON.stringify(error));
      }
    )
  }

  public eliminarOferta(id: string){
    this.loginService.deleteOferta(id).subscribe(
      response => {
        window.location.reload();
      },error => {
        console.log(error);
      }
    )
  }

  public moreInfo(id: string): void {
    this.router.navigate(['app-oferta', id]);
  }

  public cerrar(){
    this.loginService.logout();
  }
}