import { Place } from './../../../core/interfaces/places.interface';
import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Municipality } from 'src/app/modules/core/interfaces/municipality.interface';
import { Department } from 'src/app/modules/core/interfaces/department.interface';
import { LocationPlaceService } from 'src/app/modules/core/services/location/location-place.service';
import { PlacesService } from 'src/app/modules/core/services/places/places.service';
import { CategoriesService } from 'src/app/modules/core/services/categories/categories.service';
import { Category } from 'src/app/modules/core/interfaces/category.interface';
import { finalize } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-add-places',
  templateUrl: './edit-add-places.component.html',
  styleUrls: ['./edit-add-places.component.scss']
})
export class EditAddPlacesComponent implements OnInit {
  categList$: Observable<Category[]>;
  municipalitiesList$: Observable<Municipality[]>;
  departmentsList$: Observable<Department[]>;
  editPlaceForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private placesService: PlacesService,
    private categoriesService: CategoriesService,
    private localitationService: LocationPlaceService,
    public dialogRef: MatDialogRef<EditAddPlacesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Place ) { }

  ngOnInit() {
    this.categList$ = this.categoriesService.getCategories();
    this.municipalitiesList$ = this.localitationService.getMunicipalities();
    //this.departmentsList$ = this.localitationService.getDepartments();

    this.editPlaceForm = this.fb.group({
      name: [this.data.name || '', [Validators.required]],
      description: [this.data.description || '', [Validators.required]],
      image: [this.data.img_src || '', [Validators.required]],
      location: [this.data.location || '', [Validators.required]],
      lat: [this.data.lat || '', [Validators.required]],
      lon: [this.data.lon || '', [Validators.required]],
      deptos: [''],
      municipality: ['', [Validators.required]],
      category: ['', [Validators.required]],
      website: [this.data.website || '', [Validators.required]],
      tel: [this.data.tel || '', [Validators.required]]
    });
  }

  get name() {
    return this.editPlaceForm.get('name');
  }

  get description() {
    return this.editPlaceForm.get('description');
  }

  get image() {
    return this.editPlaceForm.get('image');
  }

  get location() {
    return this.editPlaceForm.get('location');
  }

  get lat() {
    return this.editPlaceForm.get('lat');
  }

  get lon() {
    return this.editPlaceForm.get('lon');
  }

  get municipality() {
    return this.editPlaceForm.get('municipality');
  }

  get deptos() {
    return this.editPlaceForm.get('deptos');
  }

  get category() {
    return this.editPlaceForm.get('category');
  }

  get website() {
    return this.editPlaceForm.get('website');
  }

  get tel() {
    return this.editPlaceForm.get('tel');
  }

  submit() {
    this.editPlaceForm.markAsPending();
    const place: Place = {
      name: this.name.value,
      img_src: this.image.value,
      idCateg: this.category.value,
      description: this.description.value,
      location: this.location.value,
      idMunicipio: this.municipality.value,
      lat: this.lat.value,
      lon: this.lon.value,
      website: this.website.value,
      tel: this.tel.value
    };

    if (this.data.id !== undefined) {
      console.log('edit', place, this.data.id);
    } else {
      console.log('add', place.id, place, this.data.id);
      this.placesService.addNewPlace(place)
      .pipe(
        finalize( () =>
          this.editPlaceForm.setErrors(null)
          )
      ).subscribe( (response: Place) => {
        this.snackBar.open('Lugar guardado','', {
          duration: 3000
        });
        this.dialogRef.close({result: 1});
      }, error => {
        this.snackBar.open('ERROR: al guardar','', {
          duration: 3000
        });
      });
    }
  }
}