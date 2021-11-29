import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/services/home.services';
import { LoginService } from 'src/app/services/login.services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [HomeService]
})
export class HomeComponent implements OnInit {

  public ofertasArray!: Array<any>;

  constructor(
    private router: Router,
    private homeService: HomeService,
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

  public moreInfo(id: string): void {
    this.router.navigate(['app-oferta', id]);
  }
}
