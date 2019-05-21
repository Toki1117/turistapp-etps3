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
  selector: 'app-places-list',
  templateUrl: './places-list.component.html',
  styleUrls: ['./places-list.component.scss']
})
export class PlacesListComponent implements OnInit {
  placesList$: Observable<Place[]>;
  displayedColumns: string[] = ['id', 'name', 'description', 'img_src', 'location', 'lat', 'lon', 'website', 'tel', 'actions'];
  dataSource = ELEMENT_DATA;

  constructor(
    public dialog: MatDialog,
    private placesService: PlacesService ) { }

  ngOnInit() {
    this.placesList$ = this.placesService.getPlaces();
  }

  deletePlace(placeId: number) {
    console.log(placeId);
  }

  editPlace(place: Place) {
    console.log(place);
    const  dialogRef = this.dialog.open(EditAddPlacesComponent, {
      data: place
    });

    dialogRef.afterClosed().subscribe( result => {
      console.log(result);
      if(result.result) {
        
      }
    });
  }

  addPlace() {
    const  dialogRef = this.dialog.open(EditAddPlacesComponent, {
      data: {}
    });
  }
}
