import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatOptionModule, MatLineModule } from '@angular/material/core';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import {MatCardModule } from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';
import {MatListModule} from '@angular/material/list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatButtonModule,
    MatDialogModule,
    MatOptionModule,
    MatLineModule,
    MatCardModule,
    MatInputModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatButtonModule,
    MatDialogModule,
    MatOptionModule,
    MatLineModule,
    MatCardModule,
    MatInputModule,
    MatTableModule,
    MatSelectModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatPaginatorModule
  ]
})
export class SharedModule { }
