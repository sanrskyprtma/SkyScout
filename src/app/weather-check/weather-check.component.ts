import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-weather-check',
  templateUrl: './weather-check.component.html',
  styleUrls: ['./weather-check.component.css']
})
export class WeatherCheckComponent implements OnInit {
  weatherResult: string = '';

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.backgroundImage = 'url("/assets/img/gambar-langit.jpg")';
    }
  }

  searchWeather(): void {
    const inputKeyword = (document.querySelector('.input-keyword') as HTMLInputElement).value;
    const apiKey = '1fe5f03e8b679377cbc41601289edfdd';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${inputKeyword}&appid=${apiKey}&units=metric`;

    this.http.get(apiUrl).subscribe((response: any) => {
      this.weatherResult = `
        <h2 style="margin-bottom: 15px;">${response.name}, ${response.sys.country}</h2>
        <h5>
            <span class="temp">${response.main.temp}°С</span>
            <span class="temp">${response.weather[0].description}</span>
        </h5>
        <p style="margin-bottom: 17px;">Temperature from ${response.main.temp_min}°С to ${response.main.temp_max}°С</p>
        <h5>Wind Speed: ${response.wind.speed} m/s</h5>
        <h5 style="margin-bottom: 17px;">Clouds: ${response.clouds.all}%</h5>
        <h4 style="color: #012443;">Geo Coordinates: [${response.coord.lat}, ${response.coord.lon}]</h4>
      `;
    });
  }
}
