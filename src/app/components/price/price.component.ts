import {Component, OnInit} from '@angular/core';
import {dataService} from "../../servises/dataService.service";
import {priceItem} from "./priceModel";

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit {
  priceList: priceItem[] = [];
  date1: priceItem = <priceItem>{};
  date2: priceItem = <priceItem>{};
  date3: priceItem = <priceItem>{};
  date4: priceItem = <priceItem>{};
  first = 0;

  rows = 10;


  constructor(private service: dataService) {
  }

  ngOnInit(): void {
    this.service.getData('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=IBM&apikey=demo')
      .subscribe((data: any) => {
        let list = data['Time Series (Daily)'];
        for (var key in list) {
          let newP: priceItem = <priceItem>{};
          for (var item in list[key]) {
            debugger
            newP.date =new Date( key);
            switch (item) {
              case '1. open':
                newP.open = list[key][item];
                break;
              case '2. high':
                newP.high = list[key][item];
                break;
              case '3. low':
                newP.low = list[key][item];
                break;
              case '4. close':
                newP.close = list[key][item];
                break;
              case '5. adjusted close':
                newP.adjusted_close = list[key][item];
                break;
              case '6. volume':
                newP.volume = list[key][item];
                break;
              case '7. dividend amount':
                newP.dividend_amount = list[key][item];
                break;
              case '8. split coefficient':
                newP.split_coefficient = list[key][item];
                break;
            }
          }
          newP.difference = Math.abs(newP.open - newP.close);
          this.priceList.push(newP);
        }

      })
  }

  maxDiff(array: any[], size: number, fieldName: string) {
    let max_diff = array[1][fieldName] - array[0][fieldName];
    for (let i = 0; i < size; i++) {
      for (let j = i + 1; j < size; j++) {
        if (array[j][fieldName] - array[i][fieldName] > max_diff) {
          max_diff = array[j][fieldName] - array[i][fieldName];
          this.date1 = array[i];
          this.date2 = array[j];
        }
      }
    }
    return max_diff;
  }

  maxDiffNotSort(array: any[], size: number, fieldName: string) {
    let max_diff = array[1][fieldName] - array[0][fieldName];
    for (let i = 0; i < size; i++) {
      for (let j = i + 1; j < size; j++) {
        if (array[j][fieldName] - array[i][fieldName] > max_diff) {
          if (array[i][fieldName] < array[j][fieldName]) {
            max_diff = array[j][fieldName] - array[i][fieldName];
            this.date3 = array[i];
            this.date4 = array[j];
          }
        }
      }
    }
    return max_diff;
  }

  next() {
    this.first = this.first + this.rows;
  }

  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }

  isLastPage(): boolean {
    return this.priceList ? this.first === (this.priceList.length - this.rows) : true;
  }

  isFirstPage(): boolean {
    return this.priceList ? this.first === 0 : true;
  }

}



