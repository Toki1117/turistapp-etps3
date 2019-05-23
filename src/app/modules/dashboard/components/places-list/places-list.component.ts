import { EditAddPlacesComponent } from './../edit-add-places/edit-add-places.component';
import { PlacesService } from './../../../core/services/places/places.service';
import { Observable, of } from 'rxjs';
import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { Place } from 'src/app/modules/core/interfaces/places.interface';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { finalize, tap } from 'rxjs/operators';

const ELEMENT_DATA: Place[] = [
  {id: 1, name: 'Hydrogen', description: '1.0079', img_src: 'Hsakkkkkkkkkkkkkkkkkk',location: 'sadasdsad', lat: '1212', lon: '1235', website: 'sdsad', tel: '7887878', idMunicipio: 1, idCateg: 1 },
  {id: 1, name: 'Hydrogen', description: '1.0079', img_src: 'Hsakkkkkkkkkkkkkkkkkk',location: 'sadasdsad', lat: '1212', lon: '1235', website: 'sdsad', tel: '7887878', idMunicipio: 1, idCateg: 1 },
  {id: 1, name: 'Hydrogen', description: '1.0079', img_src: 'Hsakkkkkkñññññññññññññññññññññññññññññññññññññññññññññññññññkkkkkkkkkkkk',location: 'sadasdsad', lat: '1212', lon: '1235', website: 'sdsad', tel: '7887878', idMunicipio: 1, idCateg: 1 },
  {id: 1, name: 'Hydrogen', description: '1.0079', img_src: 'Hsakkkkkkkkkkkkkkkkkk',location: 'sadasdsad', lat: '1212', lon: '1235', website: 'sdsad', tel: '7887878', idMunicipio: 1, idCateg: 1 },
  {id: 1, name: 'Hydrogen', description: '1.0079', img_src: 'Hsakkkkkkkkkkkkkkkkkk',location: 'sadasdsad', lat: '1212', lon: '1235', website: 'sdsad', tel: '7887878', idMunicipio: 1, idCateg: 1 },
  {id: 1, name: 'Hydrogen', description: '1.0079', img_src: 'Hsakkkkkkkkkkkkkkkkkk',location: 'sadasdsad', lat: '1212', lon: '1235', website: 'sdsad', tel: '7887878', idMunicipio: 1, idCateg: 1 },
  {id: 1, name: 'Hydrogen', description: '1.0079', img_src: 'Hsakkkkkkkkkkkkkkkkkk',location: 'sadasdsad', lat: '1212', lon: '1235', website: 'sdsad', tel: '7887878', idMunicipio: 1, idCateg: 1 },
  {id: 1, name: 'Hydrogen', description: '1.0079', img_src: 'Hsakkkkkkkkkkkkkkkkkk',location: 'sadasdsad', lat: '1212', lon: '1235', website: 'sdsad', tel: '7887878', idMunicipio: 1, idCateg: 1 },
  {id: 1, name: 'Hydrogen', description: '1.0079', img_src: 'Hsakkkkkkkkkkkkkkkkkk',location: 'sadasdsad', lat: '1212', lon: '1235', website: 'sdsad', tel: '7887878', idMunicipio: 1, idCateg: 1 },
  {id: 1, name: 'Hydrogen', description: '1.0079', img_src: 'Hsakkkkkkkkkkkkkkkkkk',location: 'sadasdsad', lat: '1212', lon: '1235', website: 'sdsad', tel: '7887878', idMunicipio: 1, idCateg: 1 },
  {id: 1, name: 'Hydrogen', description: '1.0079', img_src: 'Hsakkkkkkkkkkkkkkkkkk',location: 'sadasdsad', lat: '1212', lon: '1235', website: 'sdsad', tel: '7887878', idMunicipio: 1, idCateg: 1 },
  {id: 1, name: 'Hydrogen', description: '1.0079', img_src: 'Hsakkkkkkkkkkkkkkkkkk',location: 'sadasdsad', lat: '1212', lon: '1235', website: 'sdsad', tel: '7887878', idMunicipio: 1, idCateg: 1 },
  {id: 1, name: 'Hydrogen', description: '1.0079', img_src: 'Hsakkkkkkkkkkkkkkkkkk',location: 'sadasdsad', lat: '1212', lon: '1235', website: 'sdsad', tel: '7887878', idMunicipio: 1, idCateg: 1},
  {id: 1, name: 'Hydrogen', description: '1.0079', img_src: 'Hsakkkkkkkkkkkkkkkkkk',location: 'sadasdsad', lat: '1212', lon: '1235', website: 'sdsad', tel: '7887878', idMunicipio: 1, idCateg: 1 },
  {id: 1, name: 'Hydrogen', description: '1.0079', img_src: 'Hsakkkkkkkkkkkkkkkkkk',location: 'sadasdsad', lat: '1212', lon: '1235', website: 'sdsad', tel: '7887878', idMunicipio: 1, idCateg: 1 },
  {id: 1, name: 'Hydrogen', description: '1.0079', img_src: 'Hsakkkkkkkkkkkkkkkkkk',location: 'sadasdsad', lat: '1212', lon: '1235', website: 'sdsad', tel: '7887878', idMunicipio: 1, idCateg: 1 },
];

@Component({
  selector: 'app-places-list',
  templateUrl: './places-list.component.html',
  styleUrls: ['./places-list.component.scss']
})
export class PlacesListComponent implements OnInit {
  isLoading: boolean;
  placesList$: Observable<Place[]>;
  displayedColumns: string[] = ['id', 'name', 'description', 'img_src', 'location', 'lat', 'lon', 'website', 'tel', 'actions'];
  dataSource: MatTableDataSource<Place> = new MatTableDataSource([]);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  constructor(
    private detectChanges: ChangeDetectorRef,
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
    private placesService: PlacesService ) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.isLoading = true;
    // MOCKING DATA
    /* this.placesList$ = of(ELEMENT_DATA);
    this.placesList$.subscribe( response => {
      this.isLoading = false;
      this.dataSource = new MatTableDataSource(response);
      this.detectChanges.detectChanges();
      this.dataSource.paginator = this.paginator;
    }); */

    this.placesService.getPlaces()
      .subscribe( response => {
      this.isLoading = false;
      this.dataSource.data = response;
      this.detectChanges.detectChanges();
      this.dataSource.paginator = this.paginator;
    });
  }

  deletePlace(placeId: number) {

    //MOCKING DATA
    /* this.snackBar.open('Lugar BORRADO con exito', '', {
      duration: 2000,
    }); */

    this.placesService.deletePlace(placeId)
    .pipe(tap( () =>  this.isLoading = true))
    .subscribe( reponse => {
      this.isLoading = false;
      this.snackBar.open('Registro BORRADO exitosamente', '', {
        duration: 3000,
      });
      this.paginator.firstPage();
    }, error => {
      this.snackBar.open('ERROR: no se pudo borrar el registro', '', {
        duration: 5000,
      });
    }, () => this.getData());
  }

  editPlace(place: Place) {
    const  dialogRef = this.dialog.open(EditAddPlacesComponent, {
      data: place
    });

    dialogRef.afterClosed()
    .pipe( finalize( () => this.getData()) )
    .subscribe( result => {
      if (result !== undefined) {
        if (result === 1) {
          this.getData();
          this.paginator.firstPage();
        }
      }
    });
  }

  addPlace() {
    const  dialogRef = this.dialog.open(EditAddPlacesComponent, {
      data: {}
    });

    dialogRef.afterClosed()
    .subscribe( result => {
      if (result !== undefined) {
        if (result === 1) {
          this.getData();
          this.paginator.firstPage();
        }
      }
    });

  }
}
