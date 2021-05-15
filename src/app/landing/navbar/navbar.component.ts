import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit, ViewChild, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


  @Input() navbarData: any;

  public selectedNavItem;

  constructor(@Inject(DOCUMENT) document) { }

  ngOnInit(): void {
    this.selectedNavItem = this.navbarData.navItem[0].title
  }

  scrolled: boolean = false;

  @HostListener("window:scroll", [])
  onWindowScroll() {
      this.scrolled = window.scrollY > 0;
  }


  navbarItemClicked(navTitle,href){
    this.selectedNavItem = navTitle
    window.scroll({
      top: document.getElementById(href.substr(1)).offsetTop-70,
      left: 0,
      behavior: 'smooth'
    });

    console.log(document.getElementById(href.substr(1)).offsetTop);

  }


}
