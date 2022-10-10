import { Component, OnInit, OnDestroy } from '@angular/core';
import { WeatherService } from './weather.service';
import { takeUntil, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  temperature: number = 1;
  title = 'WeatherApp';
  currentLocationInput: string = '';
  currentWeatherData: any = {};

  _onDestroy : Subject<any> = new Subject();

  constructor(private _weather: WeatherService) { }

  ngOnInit(): void {
    this.currentWeatherData = this._weather.getData();

    // if weather data is not saved initially then give some dummy data, for dev purpose only
    if (!this.currentWeatherData || Object.keys(this.currentWeatherData).length === 0) {
      this.currentWeatherData = {
        current: {
          temp_c: 21,
          min_temp_c: 17,
          max_temp_c: 28,
          humidity: 90,
          wind_kph: 11
        },
        location : {
          name : "Tomorrow Land"
        }
      }
    }
  }

  getWeatherData(): void {
    if (this.currentLocationInput.length >= 1) {
      this._weather.getWeatherDataByName(this.currentLocationInput).pipe(takeUntil(this._onDestroy)).subscribe((val: any) => {
        this.currentWeatherData = val;
        this._weather.storeData(this.currentWeatherData);
        this.currentLocationInput = "";
      },
        (err: any) => {
          console.log(err);
          // this.currentWeatherData ={}
          alert('Not Found, Try Entering Other Region')
          this.currentLocationInput = '';
        })
    }
  }

  ngOnDestroy(): void {
    this._onDestroy.next(true);
    this._onDestroy.complete();
  }
  
}
