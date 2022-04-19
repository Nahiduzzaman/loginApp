import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  getData(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  getDataById(id:number): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts/' + id);
  }
  login(email:string, password:string): Observable<any> {
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Origin': 'https://reqres.in' //unsafe origin
    });

    const body = {
      email: email,
      password: password
    };

    return this.http.post('https://reqres.in/api/login', body, { headers: header });
  }
}
