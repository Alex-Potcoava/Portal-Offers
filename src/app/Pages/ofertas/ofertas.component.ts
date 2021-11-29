import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.services';
import { OfertasService } from 'src/app/services/ofertas.service';
import { Oferta } from '../models/oferta.models';

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.css'],
  providers: [OfertasService]
})
export class OfertasComponent implements OnInit {

  public ofertasArray!: Array<any>;

  public subscribe: any;

  public ofertaDetalle: Oferta = new Oferta();

  constructor(
    private router: Router,
    private ofertasService: OfertasService,
    private activatedRouter: ActivatedRoute,
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
    this.detalle();
  }

  public goBackHome(): void {
    if(this.loginService.loginTrue()){
      this.router.navigate(['/app-admin']);
      console.log(this.loginService.getToken())
    }else{
      this.router.navigate(['/app-home']);
    }
  }

  public detalle(){
      this.subscribe = this.activatedRouter.paramMap.subscribe((params: ParamMap) =>{
      let id = params.get('id');
      this.ofertasService.getOfertasDetalle(id).subscribe(
        response =>{
          this.ofertaDetalle = response;
        },
        error => {
          console.log('Error ' + JSON.stringify(error));
        }
      )
    });
  }
}
