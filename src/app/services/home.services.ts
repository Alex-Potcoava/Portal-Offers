import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { AppEndPoint } from '../endpoints.component';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class HomeService {

    

    constructor(private http: HttpClient) {
    
    }

    public getOfertas(): Observable<any> {
        let url = AppEndPoint.ENDPOINT;
        return this.http.get(url);
    }
}