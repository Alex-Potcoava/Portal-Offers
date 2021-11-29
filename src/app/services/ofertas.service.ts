import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppEndPoint } from '../endpoints.component';

@Injectable({
    providedIn: 'root'
})
export class OfertasService {

    constructor(private http: HttpClient) {
   
    }

    public getOfertasDetalle(id: string): Observable<any> {
        const url = `${AppEndPoint.ENDPOINT}/${id}`; 
        return this.http.get(url);
    }
}