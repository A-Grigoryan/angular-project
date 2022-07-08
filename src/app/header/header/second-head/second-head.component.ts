import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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

  activemood = 'sun'

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
  mode: mode = 'light'

  constructor(
    private router: Router,
    @Inject(DOCUMENT) private doc: Document,
    private renderer: Renderer2
  ) { }
  ngOnInit(): void {
    this.renderer.addClass(this.doc.body, this.mode)
  }

  navigate(path: string) {
    this.router.navigate([path])

  }

  changemoon() {
    this.doc.body.classList.replace(this.mode,this.mode = 'dark')
    this.activemood = 'moon'
    let sun = document.querySelector("#sun")
    let moon = document.querySelector("#moon")
    sun.classList.remove("fa-solid")
    sun.classList.add("fa-regular")
    moon.classList.remove("fa-solid")
    moon.classList.add("fa-regular")
  }
  
  changesun() {
    this.doc.body.classList.replace(this.mode,this.mode = 'light')
    this.activemood = 'sun'
    let sun = document.querySelector("#sun")
    let moon = document.querySelector("#moon")
    sun.classList.add("fa-solid")
    moon.classList.add("fa-solid")
    sun.classList.remove("fa-regular")
    moon.classList.remove("fa-regular")
  }
}

export type mode = 'light' | 'dark'