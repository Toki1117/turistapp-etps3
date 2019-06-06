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
    const peticion = `${this.url}/lugares/save?name=${data.name}&description=${data.description}&img_src=${data.img_src}&location=${data.location}&lat=${data.lat}&lon=${data.lon}&idMunicipio=${data.idMunicipio}&website=${data.website}&tel=${data.tel}&idCateg=${data.idCateg}`;
    console.log(peticion);
    return this.http.post<Place>(
      `${this.url}/lugares/save?name=${data.name}&description=${data.description}&img_src=${data.img_src}&location=${data.location}&lat=${data.lat}&lon=${data.lon}&idMunicipio=${data.idMunicipio}&website=${data.website}&tel=${data.tel}&idCateg=${data.idCateg}`, {});
  }

  editPlace( data: Place): Observable<Place> {
    const peticion = `${this.url}/lugares/mod?idLugar=${data.idLugar | data.id}&name=${data.name}&description=${data.description}&img_src=${data.img_src}&location=${location}&lat=${data.lat}&lon=${data.lon}&idMunicipio=${data.idMunicipio}&website=${data.website}&tel=${data.tel}&idCateg=${data.idCateg}`;
    console.log(peticion);
    return this.http
    .post<Place>(`${this.url}/lugares/mod?idLugar=${data.idLugar | data.id}&name=${data.name}&description=${data.description}&img_src=${data.img_src}&location=${location}&lat=${data.lat}&lon=${data.lon}&idMunicipio=${data.idMunicipio}&website=${data.website}&tel=${data.tel}&idCateg=${data.idCateg}`,
       {}
    );
  }

  deletePlace(id: number): Observable<Place[]> {
    return this.http.get<Place[]>(this.url + '/Lugares/Save?idLugar=' + id);
  }
}
