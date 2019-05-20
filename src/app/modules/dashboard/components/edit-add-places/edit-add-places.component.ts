import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Place } from 'src/app/modules/core/interfaces/places.interface';

@Component({
  selector: 'app-edit-add-places',
  templateUrl: './edit-add-places.component.html',
  styleUrls: ['./edit-add-places.component.scss']
})
export class EditAddPlacesComponent implements OnInit {
  editPlaceForm: FormGroup;

  constructor(private fb: FormBuilder,
              @Inject(MAT_DIALOG_DATA) public data: Place ) { }

  ngOnInit() {
    this.editPlaceForm = this.fb.group({
      name: [this.data.name || '', [Validators.required]],
      description: [this.data.description || '', [Validators.required]],
      image: [this.data.img_src || '', [Validators.required]],
      location: [this.data.location || '', [Validators.required]],
      lat: [this.data.lat || '', [Validators.required]],
      lon: [this.data.lon || '', [Validators.required]],
      municipality: ['', [Validators.required]],
      category: ['', [Validators.required]],
      website: [this.data.website || '', [Validators.required]],
      tel: [this.data.tel || '', [Validators.required]]
    });

    console.log(this.data);
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

  }


}
