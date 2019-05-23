import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Credentials } from '../interfaces/credentials.interface';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = environment.baseUrl;

  constructor(private http: HttpClient) { }

  logIn(credentials: Credentials): Observable<User> {
    return this.http.post<User>(`${this.url}/login`, credentials);
  }
}
