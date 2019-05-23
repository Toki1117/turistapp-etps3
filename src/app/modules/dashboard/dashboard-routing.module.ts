import { EditAddPlacesComponent } from './components/edit-add-places/edit-add-places.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardLayoutComponent } from './components/dashboard-layout/dashboard-layout.component';
import { MenuComponent } from './components/menu/menu.component';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { PlacesListComponent } from './components/places-list/places-list.component';
import { EditAddCategoriesComponent } from './components/edit-add-categories/edit-add-categories.component';
import { DashboardGuard } from 'src/app/guards/dashboard.guard';

const routes: Routes = [
  {
    path: '',
    component: DashboardLayoutComponent,
    canActivate: [DashboardGuard],
    canActivateChild: [DashboardGuard],
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
        path: 'lugares-turisticos/editar',
        component: EditAddPlacesComponent
      },
      {
        path: 'lugares-turisticos/agregar',
        component: EditAddPlacesComponent
      },
      {
        path: 'categorias/editar',
        component: EditAddCategoriesComponent
      },
      {
        path: 'categorias/agregar',
        component: EditAddCategoriesComponent
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
