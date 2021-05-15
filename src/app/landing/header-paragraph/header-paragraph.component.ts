import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-paragraph',
  templateUrl: './header-paragraph.component.html',
  styleUrls: ['./header-paragraph.component.scss']
})
export class HeaderParagraphComponent implements OnInit {

  @Input() headerText: string;
  @Input() paragraphText: string;
  @Input() headerPosition: string;
  @Input() paragraphPosition: string;
  @Input() paragraphWidth: string;
  @Input() headerColor: string;
  @Input() paragraphColor: string;
  @Input() headerClass: string;
  @Input() paragraphClass: string;
  @Input() headerText_paragraphText_headerPosition_paragraphPosition_width_headerColor_paragraphColor: string[];
  
  constructor() { }

  ngOnInit() {

    if( this.headerText_paragraphText_headerPosition_paragraphPosition_width_headerColor_paragraphColor ){

      this.headerText =  this.headerText_paragraphText_headerPosition_paragraphPosition_width_headerColor_paragraphColor[0]
      this.paragraphText =  this.headerText_paragraphText_headerPosition_paragraphPosition_width_headerColor_paragraphColor[1]
      this.headerPosition =  this.headerText_paragraphText_headerPosition_paragraphPosition_width_headerColor_paragraphColor[2]
      this.paragraphPosition =  this.headerText_paragraphText_headerPosition_paragraphPosition_width_headerColor_paragraphColor[3]
      this.paragraphWidth =  this.headerText_paragraphText_headerPosition_paragraphPosition_width_headerColor_paragraphColor[4]
      this.headerColor =  this.headerText_paragraphText_headerPosition_paragraphPosition_width_headerColor_paragraphColor[5]
      this.paragraphColor =  this.headerText_paragraphText_headerPosition_paragraphPosition_width_headerColor_paragraphColor[6]

    }

    if(!this.headerColor){
      this.headerColor = "black";
    }

    if(!this.paragraphColor){
      this.paragraphColor = "black"
    }



  }

}
