import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { PlacesService } from 'src/app/modules/core/services/places/places.service';
import { Place } from 'src/app/modules/core/interfaces/places.interface';
import { Response } from 'selenium-webdriver/http';
import { Category } from 'src/app/modules/core/interfaces/category.interface';
import { CategoriesService } from 'src/app/modules/core/services/categories/categories.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { EditAddCategoriesComponent } from '../edit-add-categories/edit-add-categories.component';

const ELEMENT_DATA = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent implements OnInit {
  categoriesList$: Observable<Category[]>;
  displayedColumns: string[] = ['idCateg', 'nombre', 'actions'];
  dataSource = ELEMENT_DATA;
  
  constructor(
    private snackBar: MatSnackBar,
    public dialog: MatDialog,
    private categoriesService: CategoriesService) { }

  ngOnInit() {
    this.categoriesList$ = this.categoriesService.getCategories();
    this.categoriesList$.subscribe( response =>
      console.log(response)
    );
  }

  addCategory() {
    console.log('add');
    const  dialogRef = this.dialog.open(EditAddCategoriesComponent, {
      data: {}
    });

    dialogRef.afterClosed().subscribe( result => {
      console.log(result);
      if(result.result) {
        
      }
    });
  }

  deleteCategory(id: number) {
    console.log(id);
    this.categoriesService.deleteCategories(id)
    .subscribe( response =>  {
      this.snackBar.open('Categoria borrada con exito', '', {
        duration: 2000,
      });
    }, error => {
      this.snackBar.open('ERROR: no se pudo borrar registro', '', {
        duration: 5000,
      });
    });
  }

  /* editCategory(cat: Category) {
    console.log(cat);
  } */
}
