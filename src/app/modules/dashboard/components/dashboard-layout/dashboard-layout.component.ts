import { Router } from '@angular/router';
import { User } from './../../../core/interfaces/user.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss']
})
export class DashboardLayoutComponent implements OnInit {
  showCard = false;
  user: User;
  constructor(private router: Router) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  displayCard() {
    this.showCard = !this.showCard;
  }

  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['access']);
  }

}
