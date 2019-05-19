import { PlacesService } from './../../../core/services/places/places.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Places } from 'src/app/modules/core/interfaces/places.interface';

@Component({
  selector: 'app-places-list',
  templateUrl: './places-list.component.html',
  styleUrls: ['./places-list.component.scss']
})
export class PlacesListComponent implements OnInit {
  placesList$: Observable<Places[]>;
  constructor(private placesService: PlacesService ) { }

  ngOnInit() {
    this.placesList$ = this.placesService.getPlaces();
    this.placesList$.subscribe( response =>
      console.log(response)
    );
  }

}
