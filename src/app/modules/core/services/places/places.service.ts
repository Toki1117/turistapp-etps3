import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Places } from '../../interfaces/places.interface';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  url = `${environment.baseUrl}`;

  constructor(private http: HttpClient) { }

  getPlaces(): Observable<Places[]> {
    return this.http.get<Places[]>(this.url + '/Lugares');
  }
}
