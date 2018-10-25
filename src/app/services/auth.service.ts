import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http , Response } from '@angular/http';
import { Config } from '../config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:Http) { }

  signupUser(input):Observable<any>
  {
    return this.http.post(Config.AWS_API_CREATE_USER,input);
  }

}
