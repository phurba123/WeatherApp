import { Component } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  temperature: number = 1;
  title = 'WeatherApp';
  currentLocationInput: string = '';
  currentWeatherData: any = {};

  constructor(private _weather: WeatherService) { }

  ngOnInit(): void {
    this.currentWeatherData = this._weather.getData();
    console.log('data : ', this.currentWeatherData);

    // if weather data is not saved initially then give some dummy data, for dev purpose only
    if (!this.currentWeatherData) {
      console.log('no data saved found');
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
      this._weather.getWeatherDataByName(this.currentLocationInput).subscribe((val: any) => {
        // console.log('val : ', val)
        this.currentWeatherData = val;
      },
        (err: any) => {
          console.log(err)
        })
    }
  }
}
