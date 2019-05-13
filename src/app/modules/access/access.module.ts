import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccessRoutingModule } from './access-routing.module';
import { LoginComponent } from './components/login/login.component';
import { AccessLayoutComponent } from './components/access-layout/access-layout.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [LoginComponent, AccessLayoutComponent],
  imports: [
    CommonModule,
    AccessRoutingModule,
    SharedModule
  ]
})
export class AccessModule { }
