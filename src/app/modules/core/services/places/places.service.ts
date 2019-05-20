import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Places } from '../../interfaces/places.interface';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  url = `${environment.baseUrl}`;

  constructor(private http: HttpClient) { }

  getPlaces(): Observable<Partial<Places[]>> {
    return this.http.get<Partial<Places[]>>(this.url + '/Lugares');
  }
}
