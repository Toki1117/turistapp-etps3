import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardLayoutComponent } from './components/dashboard-layout/dashboard-layout.component';
import { MenuComponent } from './components/menu/menu.component';
import { SharedModule } from '../shared/shared.module';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { PlacesListComponent } from './components/places-list/places-list.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [DashboardLayoutComponent, MenuComponent, CategoriesListComponent, PlacesListComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
