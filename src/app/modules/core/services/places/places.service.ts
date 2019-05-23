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
    return this.http
    .post<Place>(
      `${this.url}/lugares/mod?idLugar=${data.idLugar}&name=${data.name}&description=${data.description}&img_src=${data.img_src}&location=${location}&lat=${data.lat}&lon=${data.lon}&idMunicipio=${data.idMunicipio}&website=${data.website}&tel=${data.tel}&idCateg=${data.idCateg}`,
       {}
    );
  }

  deletePlace(id: number): Observable<Place[]> {
    return this.http.get<Place[]>(this.url + '/Lugares/Save?idLugar=' + id);
  }
}
