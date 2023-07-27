import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface CityData {
  uuid: string;
  cityName: string;
  count: number;
}

@Injectable({
  providedIn: 'root',
})
export class CitiesServiceService {
  constructor(private http: HttpClient) {}
  getData(cityInput: string) {
    return this.http.get<CityData[]>(
      `http://localhost:3000/cities/${cityInput}`
    );
  }
}
