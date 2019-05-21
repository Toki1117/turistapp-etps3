import { Observable, of } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/modules/core/interfaces/category.interface';
import { CategoriesService } from 'src/app/modules/core/services/categories/categories.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { EditAddCategoriesComponent } from '../edit-add-categories/edit-add-categories.component';

const ELEMENT_DATA = [
  {idCateg: 1, nombre: 'Hydrogen'},
  {idCateg: 1, nombre: 'Hydrogen'},
  {idCateg: 1, nombre: 'Hydrogen'},
  {idCateg: 1, nombre: 'Hydrogen'},
  {idCateg: 1, nombre: 'Hydrogen'},
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
    this.categoriesList$ = of(ELEMENT_DATA);
    /* this.categoriesList$ = this.categoriesService.getCategories(); */
    /* this.categoriesList$.subscribe( response =>
      console.log(response)
    ); */
  }

  addCategory() {
    const  dialogRef = this.dialog.open(EditAddCategoriesComponent, {
      data: {}
    });

    dialogRef.afterClosed().subscribe( result => {
      if (result !== undefined) {
        console.log(result);
        //ADD CODE HERE
      }
    });
  }

  deleteCategory(id: number) {
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

  editCategory(cat: Category) {
    const  dialogRef = this.dialog.open(EditAddCategoriesComponent, {
      data: cat
    });

    dialogRef.afterClosed().subscribe( result => {
      if (result !== undefined) {
        console.log(result);
        //ADD CORE HERE
      }
    });
  }
}
