import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Place } from '../../interfaces/places.interface';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  url = `${environment.baseUrl}`;

  constructor(private http: HttpClient) { }

  getPlaces(): Observable<Place[]> {
    return this.http.get<Place[]>(this.url + '/Lugares');
  }

  addNewPlace(data: Place): Observable<Place>  {
    return this.http.post<Place>(this.url + '/Lugares/Save', data);
  }

  editPlace( data: Place): Observable<Place> {
    return this.http.put<Place>(this.url + '/Lugares/Save', data);
  }

  //deletePlace(id: number): Observable<Place>
}
