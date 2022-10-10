import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  baseUrl:string = environment.baseUrl;
  XRapidAPIKeyLabel = environment.XRapidAPIKeyLabel;
  XRapidAPIKeyValue = environment.XRapidAPIKeyValue;
  XRapidAPIHostLabel = environment.XRapidAPIHostLabel;
  XRapidAPIHostValue = environment.XRapidAPIHostValue;

  headerOption = new HttpHeaders()
  .set(this.XRapidAPIHostLabel, this.XRapidAPIHostValue)
  .set(this.XRapidAPIKeyLabel, this.XRapidAPIKeyValue)

  constructor(
    private _http : HttpClient
  ) { }

  // get weather data by location name
  getWeatherDataByName(locationName:string):Observable<any> {
    return this._http.get(`${this.baseUrl}/current.json`, {
      headers : this.headerOption,
      params : new HttpParams()
      .set('q', locationName)
    });
  }

  // store latest search result in local storage
  storeData(data:any):void {
    localStorage.setItem('w_data_myapp', JSON.stringify(data));
  }

  getData() {
    return JSON.parse(localStorage.getItem('w_data_myapp') || '{}')
  }
}
