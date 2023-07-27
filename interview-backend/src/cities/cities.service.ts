import { Injectable, NotFoundException } from '@nestjs/common';
import * as fs from 'fs';


@Injectable()
export class CitiesService {

    private readonly data: any[]; // Assuming the data is an array of objects

    constructor() {
      this.data = this.loadDataFromFile();
    }
  
    private loadDataFromFile(): any[] {
      try {
        const rawData = fs.readFileSync('cities.json', 'utf8');
        return JSON.parse(rawData);
      } catch (error) {
        console.error('Error loading data from file:', error.message);
        return [];
      }
    }

  getCities(searchedCity: string) {
    const filteredCities = this.data.filter((city) =>
    city.cityName.toLowerCase().includes(searchedCity),
    );
    if (!filteredCities || (filteredCities && filteredCities.length === 0)) {
      throw new NotFoundException("No cities found!");
    }
    return [...filteredCities.slice(0,5)];
  }
}
