import { Observable, of } from 'rxjs';
import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { Category } from 'src/app/modules/core/interfaces/category.interface';
import { CategoriesService } from 'src/app/modules/core/services/categories/categories.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { EditAddCategoriesComponent } from '../edit-add-categories/edit-add-categories.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { tap, finalize } from 'rxjs/operators';

const ELEMENT_DATA = [
  {idCateg: 1, nombre: 'Hydrogen'},
  {idCateg: 1, nombre: 'Hydrogen'},
  {idCateg: 1, nombre: 'Hydrogen'},
  {idCateg: 1, nombre: 'Hydrogen'},
  {idCateg: 1, nombre: 'Hydrogen'},
  {idCateg: 1, nombre: 'Hydrogen'},
  {idCateg: 1, nombre: 'Hydrogen'},
  {idCateg: 1, nombre: 'Hydrogen'},
  {idCateg: 1, nombre: 'Hydrogen'},
  {idCateg: 1, nombre: 'Hydrogen'},
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
export class CategoriesListComponent implements OnInit, AfterViewInit {
  isLoading: boolean;
  categoriesList$: Observable<Category[]>;
  displayedColumns: string[] = ['idCateg', 'nombre', 'actions'];
  dataSource: MatTableDataSource<Category> = new MatTableDataSource([]);
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  constructor(
    private detectChanges: ChangeDetectorRef,
    private snackBar: MatSnackBar,
    public dialog: MatDialog,
    private categoriesService: CategoriesService) { }

  ngOnInit() {
    this.getData();
  }
  
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  getData() {
    this.isLoading = true;
    // Mocking Data
    /* this.categoriesList$ = of(ELEMENT_DATA);
    this.categoriesList$.subscribe( response => {
      this.dataSource.data = response;
    }); */

    // Real Data
    this.categoriesService.getCategories()
    .subscribe( response => {
      this.isLoading = false;
      this.dataSource.data = response;
      this.detectChanges.detectChanges();
      this.dataSource.paginator = this.paginator;
    });
  }

  addCategory() {
    const  dialogRef = this.dialog.open(EditAddCategoriesComponent, {
      data: {}
    });

    dialogRef.afterClosed()
    .pipe( finalize( () => this.getData() ) )
    .subscribe( result => {
      if (result !== undefined) {
        if (result === 1) {
          this.paginator.firstPage();
        }
      }
    });
  }

  deleteCategory(id: number) {
    this.categoriesService.deleteCategories(id)
    .pipe( finalize( () => this.getData() ) )
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

    dialogRef.afterClosed()
    .pipe( finalize( () => this.getData() ) )
    .subscribe( result => {
      if (result !== undefined) {
        if (result === 1) {
          // CODE
        }
      }
    });
  }
}
