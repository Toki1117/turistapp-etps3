import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Credentials } from '../interfaces/credentials.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = environment.baseUrl;

  constructor(private http: HttpClient) { }

  logIn(credentials: Credentials) {
    return this.http.post(`${this.url}/login`, credentials);
  }
}
