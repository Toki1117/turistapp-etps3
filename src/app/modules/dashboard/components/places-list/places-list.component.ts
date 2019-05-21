import { Municipality } from './../../../core/interfaces/municipality.interface';
import { LocationPlaceService } from './../../../core/services/location/location-place.service';
import { EditAddPlacesComponent } from './../edit-add-places/edit-add-places.component';
import { PlacesService } from './../../../core/services/places/places.service';
import { Observable, of } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Place } from 'src/app/modules/core/interfaces/places.interface';
import { MatDialog } from '@angular/material/dialog';
import { EditAddCategoriesComponent } from '../edit-add-categories/edit-add-categories.component';
import { Department } from 'src/app/modules/core/interfaces/department.interface';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';

const ELEMENT_DATA: Place[] = [
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
  placesList$: Observable<Place[]>;
  displayedColumns: string[] = ['id', 'name', 'description', 'img_src', 'location', 'lat', 'lon', 'website', 'tel', 'actions'];
  dataSource: MatTableDataSource<Place>;

  constructor(
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
    private placesService: PlacesService ) { }

  ngOnInit() {
    //this.placesList$ = this.placesService.getPlaces();
    this.placesList$ = of(ELEMENT_DATA);
    this.placesList$.subscribe( response => {
      this.dataSource = new MatTableDataSource(response);
      console.log(this.dataSource.data);
    });
  }

  deletePlace(placeId: number) {
    console.log(placeId);
    this.placesService.deletePlace(placeId)
    .subscribe( reponse => {
      this.snackBar.open('Registro borrado exitosamente', '', {
        duration: 3000,
      });
    }, error => {
      this.snackBar.open('ERROR: no se pudo borrar el registro', '', {
        duration: 5000,
      });
    });
  }

  editPlace(place: Place) {
    console.log(place);
    const  dialogRef = this.dialog.open(EditAddPlacesComponent, {
      data: place
    });

    dialogRef.afterClosed().subscribe( result => {
      if(result !== undefined) {
        console.log(result);
        //CODE HERE
      }
    });
  }

  addPlace() {
    const  dialogRef = this.dialog.open(EditAddPlacesComponent, {
      data: {}
    });
  }
}
