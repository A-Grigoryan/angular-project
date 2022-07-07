import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Menu {
  menuName: string;
  path: string
}

@Component({
  selector: 'app-second-head',
  templateUrl: './second-head.component.html',
  styleUrls: ['./second-head.component.scss']
})
export class SecondHeadComponent implements OnInit {

  menu: Menu[] = [
    {
      menuName: "Home",
      path: ""
    },
    {
      menuName: "Products",
      path: "/products"
    },
    {
      menuName: "About Us",
      path: "/about-us"
    },
    {
      menuName: "Stores",
      path: "/stores"
    },
    {
      menuName: "How It's Made",
      path: "/how-its-made",
    },
    {
      menuName: "Contact Us",
      path: "/contact-us"
    }
  ]

  ngOnInit(): void {
  }

  constructor(private router: Router) { }
  navigate(path: string) {
    this.router.navigate([path])
  }

}
