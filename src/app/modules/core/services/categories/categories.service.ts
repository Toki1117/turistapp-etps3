import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Category } from '../../interfaces/category.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  url = `${environment.baseUrl}`;
  
  constructor(private http: HttpClient) { }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.url + '/Categorias');
  }

  addCategories(catName: string): Observable<Category> {
    return this.http.post<Category>(this.url + '/Categorias/Save', {name: catName});
  }

  deleteCategories(id: number): Observable<Category> {
    return this.http.post<Category>(this.url + '/Categorias//Del?idCat=' + id, {});
  }
}
