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
    console.log(this.navbarData);
    this.selectedNavItem = this.navbarData.navItem[0].title
  }

  scrolled: boolean = false;

  @HostListener("window:scroll", [])
  onWindowScroll() {
      this.scrolled = window.scrollY > 0;
  }



}
