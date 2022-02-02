import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class dataService {

  private http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }
  getData(url: string): any {
    return (this.http.get( url));

  }

}
