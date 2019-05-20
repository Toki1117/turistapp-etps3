import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Municipality } from '../../interfaces/municipality.interface';
import { Observable } from 'rxjs';
import { Department } from '../../interfaces/department.interface';

@Injectable({
  providedIn: 'root'
})
export class LocationPlaceService {
  url = `${environment.baseUrl}`;

  constructor(private http: HttpClient) { }

  getMunicipalities(): Observable<Municipality[]> {
    return this.http.get<Municipality[]>(this.url + '/Municipios');
  }

  getDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>(this.url + '/Departamentos');
  }
}
