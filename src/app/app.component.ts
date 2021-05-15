import { DataService } from './landing/0-data-service/data-service.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'bahreen-cars-landing';

  public landingData: any;

  constructor(private dataService: DataService){

    this.landingData = this.dataService.landingData;
    console.log(this.landingData.navbarData);

  }

  header_paragraph_1: string[] = [
    'Our Features',
    `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa at cumque sunt,
    repudiandae autem ratione voluptas magnam velit porro ipsa?`,
    'right',
    "left",
    '40'
  ]


}
