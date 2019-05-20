import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Place } from 'src/app/modules/core/interfaces/places.interface';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-edit-add-categories',
  templateUrl: './edit-add-categories.component.html',
  styleUrls: ['./edit-add-categories.component.scss']
})
export class EditAddCategoriesComponent implements OnInit {
  editForm: FormGroup;
  
  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: Place ) { }

  ngOnInit() {
    this.editForm = this.fb.group({
      name: ['']
    });
  }

}
