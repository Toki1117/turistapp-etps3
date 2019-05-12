import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatOptionModule, MatLineModule } from '@angular/material/core';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatButtonModule,
    MatDialogModule,
    MatOptionModule,
    MatLineModule,
  ],
  exports: [
    MatFormFieldModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatButtonModule,
    MatDialogModule,
    MatOptionModule,
    MatLineModule,
  ]
})
export class SharedModule { }
