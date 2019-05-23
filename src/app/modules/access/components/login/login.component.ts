import { Credentials } from './../../../core/interfaces/credentials.interface';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/modules/core/services/auth.service';
import { finalize } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private snackBar: MatSnackBar,
    private authservice: AuthService,
    private fb: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      usuario: ['', Validators.required],
      clave: ['', Validators.required]
    });
  }

  get usuario() {
    return this.loginForm.get('usuario');
  }

  get clave() {
    return this.loginForm.get('clave');
  }

  onSubmit() {
    this.loginForm.markAsPending();
    /* if (this.usuario.value === 'diana' && this.clave.value === '123' ) {
      console.log('SUCCESS');
      this.router.navigate(['dashboard']);
    } */
    const credentials: Credentials = {
      user: this.usuario.value.trim(),
      pass: this.clave.value.trim()
    }
    this.authservice.logIn(credentials)
    .pipe( finalize( () => this.loginForm.setErrors(null) ) )
    .subscribe( response => {
      console.log(response.username);
      if (response.username) {
        localStorage.setItem('user', JSON.stringify(response));
        this.snackBar.open('Acceso concedido');
        this.router.navigate(['dashboard']);
      } else {
        this.snackBar.open('Debes registrate');
      }
    }, error => {
      this.snackBar.open('Tenemos problemas para loguearte');
    });
  }
}
