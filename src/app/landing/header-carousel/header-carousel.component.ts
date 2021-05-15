import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-carousel',
  templateUrl: './header-carousel.component.html',
  styleUrls: ['./header-carousel.component.scss']
})
export class HeaderCarouselComponent implements OnInit {

  @Input() carouselData: any;

  constructor() { }

  ngOnInit(): void {
  }

}
