import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  navItems = [
    { label: 'Video Games', route: '', shadow: 'Video' },
    { label: 'Contact', route: 'contact', shadow: 'Contact' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
