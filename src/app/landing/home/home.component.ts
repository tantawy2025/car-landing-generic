import { DataService } from './../0-data-service/data-service.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Input() backImgData: any;

  constructor(public dataService: DataService) { }

  ngOnInit() {
  }

}
