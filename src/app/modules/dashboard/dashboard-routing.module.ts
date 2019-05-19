import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardLayoutComponent } from './components/dashboard-layout/dashboard-layout.component';
import { MenuComponent } from './components/menu/menu.component';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { PlacesListComponent } from './components/places-list/places-list.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardLayoutComponent,
    children: [
      {
        path: 'inicio',
        component: MenuComponent
      },
      {
        path: 'categorias',
        component: CategoriesListComponent
      },
      {
        path: 'lugares-turisticos',
        component: PlacesListComponent
      },
      {
        path: '',
        redirectTo: 'inicio',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
