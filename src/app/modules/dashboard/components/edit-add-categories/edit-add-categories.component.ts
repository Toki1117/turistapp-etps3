import { Component, OnInit, Inject, Output, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Category } from 'src/app/modules/core/interfaces/category.interface';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoriesService } from 'src/app/modules/core/services/categories/categories.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-edit-add-categories',
  templateUrl: './edit-add-categories.component.html',
  styleUrls: ['./edit-add-categories.component.scss']
})
export class EditAddCategoriesComponent implements OnInit {
  editCatForm: FormGroup;
  title: string;
  
  constructor(
    private fb: FormBuilder,
    private catService: CategoriesService,
    private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<EditAddCategoriesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Category ) { }

  ngOnInit() {
    this.editCatForm = this.fb.group({
      name: [this.data.nombre || '', [Validators.required]]
    });

    if (this.data.idCateg !== undefined) {
      this.title = `Editar categoría ${this.data.nombre}`;
    } else {
      this.title = 'Agregar nueva categoría';
    }
  }

  get name() {
    return this.editCatForm.get('name');
  }

  submit() {
    this.editCatForm.markAsPending();

    const cat: Category = {
      idCateg: this.data.idCateg,
      nombre: this.name.value.trim()
    };

    if (this.data.idCateg !== undefined) {
      
      //MOCK DATA
      /* this.snackBar.open('Categoria ACTUALIZADA exitosamente', '', {
        duration: 2000
      }); */

      this.catService.editCategories(cat)
      .pipe( finalize( () => this.editCatForm.setErrors(null)) )
      .subscribe( response => {
        this.snackBar.open('Categoria ACTUALIZADA exitosamente', '', {
          duration: 2000
        });
        this.dialogRef.close({result: 1});
      }, error => {
        this.snackBar.open('ERROR: el registro no pudo actualizarse', '', {
          duration: 5000
        });
        this.dialogRef.close({result: 0});
      });
      
    } else {

      // MOCK DATA
      /* this.snackBar.open('Categoria GUARDADA exitosamente', '', {
        duration: 2000
      }); */

      this.catService.addCategories(this.name.value)
      .pipe( finalize( () => this.editCatForm.setErrors(null)) )
      .subscribe( response => {
        this.snackBar.open('Categoria GUARDADA exitosamente', '', {
          duration: 2000
        });
        this.dialogRef.close({result: 1});
      }, error => {
        this.snackBar.open('ERROR: el registro no pudo guardarse', '', {
          duration: 5000
        });
        this.dialogRef.close({result: 0});
      });
    }
  }

}
