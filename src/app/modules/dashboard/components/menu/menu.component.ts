import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToCategories() {
    this.router.navigate(['dashboard/categorias']);
  }

  goToPlaces() {
    this.router.navigate(['dashboard/lugares-turisticos']);
  }

  goToAddCat() {
    this.router.navigate(['dashboard/categorias/agregar']);
  }

  goToAddPlace() {
    this.router.navigate(['dashboard/lugares-turisticos/agregar']);
  }

}
