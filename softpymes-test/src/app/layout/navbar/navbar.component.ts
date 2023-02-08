import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor(public router: Router) {}
  logged: boolean = false;

  ngOnInit(): void {
    this.loggedIn();
  }
  goHome() {
    this.router.navigateByUrl('/')
  }

  loggedIn() {
    if(!!localStorage.getItem('token')) {
      this.logged = true;
    } else {
      this.logged = false;
    }
  }

  logOut() {
    localStorage.clear();
    this.goHome();
  }

}
