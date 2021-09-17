import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  userData;
  constructor() {
      this.userData = JSON.parse(localStorage.getItem('user'));
      console.log(this.userData);
  }

  ngOnInit() {
  }

}
