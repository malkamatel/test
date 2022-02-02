import { Component } from '@angular/core';
import {dataService} from "./servises/dataService.service";
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bursa';
  constructor(private service:dataService) {
  }
}
