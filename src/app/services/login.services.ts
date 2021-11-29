import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppEndPoint } from '../endpoints.component';

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    constructor(private http: HttpClient) {
    }

    login(username: string, password: string, rememberMe: boolean): Observable<any> {
        const headers = { 'Content-Type': 'application/json', 'Authorization': 'Bearer id_token' }
        let url = AppEndPoint.ENDPOINTADMIN;
        return this.http.post<any>(url, { username, password, rememberMe }, {headers} )
    }

    public postOffersData(titulo:string, descripcion: string, empresa: string, salario: string, ciudad: string, email: string): Observable<any>{
        let headers: HttpHeaders = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.getToken()
        });
        console.log(headers);
        let url = AppEndPoint.ENDPOINT;
        let body = {"titulo": titulo, "descripcion": descripcion, "empresa": empresa, "salario": salario, "ciudad": ciudad, "email": email};
        return this.http.post(url, body, {headers: headers});
    }

    public deleteOferta(id: string): Observable<any>{
            let url = AppEndPoint.ENDPOINT + '/' + id;
            let headers: HttpHeaders = new HttpHeaders('Authorization: Bearer ' + this.getToken());
            return this.http.delete(url, { headers: headers });
    }

    setToken(token: string) {
        localStorage.setItem('id_token', token);
    }

    getToken() {
        return localStorage.getItem('id_token');

    }

    logout() {
        localStorage.removeItem('id_token');
        console.log(this.getToken());
    }

    loginTrue(): boolean {
        if (this.getToken() !== null){
            return true;
        } else {
            return false;
        }
    }
}