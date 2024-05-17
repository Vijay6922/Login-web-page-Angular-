import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Logindata } from './logindata';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginuserService {

  constructor(public http:HttpClient) { }

  url="http://localhost:8000/api/v1"
  loginUser(l:Logindata): Observable<Logindata>
  {
     return this.http.post<Logindata>(this.url+"/addlogin",l)
  }

  GetUser(): Observable<Logindata[]>{
    return this.http.get<Logindata[]>(this.url+"/logins");
  }
}
