import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) { }

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
    if (this.usuario.value === 'diana' && this.clave.value === '123' ) {
      console.log('SUCCESS');
    }
  }
}
