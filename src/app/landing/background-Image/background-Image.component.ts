import { DataService } from './../0-data-service/data-service.service';
import { DOCUMENT } from '@angular/common';
import { Component, OnInit, Inject, Input } from '@angular/core';

@Component({
  selector: 'app-background-Image',
  templateUrl: './background-Image.component.html',
  styleUrls: ['./background-Image.component.scss']
})
export class BackgroundImageComponent implements OnInit {

  @Input() backImgData: any;

  constructor(@Inject(DOCUMENT) document, public dataService:DataService) { }

  ngOnInit() {
    // let bgImgSection = document.getElementById('bg-img')
    // let aboutSection = this.dataService.landingData.aboutSection

    // bgImgSection.style.backgroundImage = aboutSection.bgImg.url
    // bgImgSection.style.backgroundSize = aboutSection.bgImg.backgroundSize
    // bgImgSection.style.backgroundAttachment = aboutSection.bgImg.backgroundAttachment
    // bgImgSection.style.height = aboutSection.bgImg.height


    // let overlaySection = document.getElementById('overlay')
    // overlaySection.style.height = aboutSection.bgImg.height


    let bgImgSection = document.getElementById('bg-img')
    let aboutSection = this.backImgData

    bgImgSection.style.backgroundImage = aboutSection.bgImg.url
    bgImgSection.style.backgroundSize = aboutSection.bgImg.backgroundSize
    bgImgSection.style.backgroundAttachment = aboutSection.bgImg.backgroundAttachment
    bgImgSection.style.height = aboutSection.bgImg.height


    let overlaySection = document.getElementById('overlay')
    overlaySection.style.height = aboutSection.bgImg.height


  }

}
