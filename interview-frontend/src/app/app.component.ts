import { Component } from '@angular/core';
import { CitiesServiceService } from './service/cities-service.service';


interface CityData {
  uuid:string,
  cityName:string,
  count:number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})


export class AppComponent {
  title = 'interview-frontend';
  cities: CityData[]=[];
  called:Boolean = false;
  constructor(private citiesService: CitiesServiceService) {}

  search(value: string) {
    if(value && value.length>0){
      this.citiesService.getData(value).subscribe(
        (data) => {
          this.cities = data;
          this.called=false
        },
        (error) => {
          this.cities = [];
          console.error(error);
          this.called=true
        }
      );
    }else{
      alert("Please eneter the city name")
    }
  }
}
