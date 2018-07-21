import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  menus = [
    {
      name: "Home",
      link: "#"
    },
    {
      name: "Google",
      link: "www.google.com"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
