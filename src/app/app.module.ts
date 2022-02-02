import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PriceComponent } from './components/price/price.component';
import {dataService} from "./servises/dataService.service";
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    PriceComponent
  ],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    TableModule,
    ButtonModule
  ],
  providers: [dataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
