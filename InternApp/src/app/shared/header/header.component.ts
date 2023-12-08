import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent implements OnInit {
  constructor(private route: Router) {}
  ngOnInit(): void {}
  logOut() {
    localStorage.clear();
    this.route.navigate(['/']);
  }
}
