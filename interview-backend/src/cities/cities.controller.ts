import { Controller, Get, Param } from '@nestjs/common';
import {CitiesService} from './cities.service'

@Controller('cities')
export class CitiesController {
    constructor(private readonly citiesService: CitiesService) {}

  @Get(':city')
  filterCities(@Param('city') searchedCity: string) {
    return this.citiesService.getCities(searchedCity.toLowerCase());
  }
}
