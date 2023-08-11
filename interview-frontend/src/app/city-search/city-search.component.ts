import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

interface City {
  uuid: string;
  name: string;
  count: number;
}

@Component({
  selector: 'app-city-search',
  templateUrl: './city-search.component.html',
  styleUrls: ['./city-search.component.scss']
})

export class CitySearchComponent {
  searchQuery = "";
  cities: City[] = [
    { uuid: "7e8a29e2-62d1-4ec1-ae15-8ff2f777318f", name: "Berlin", count: 523 },
    { uuid: "4a7f5c2d-3a10-4a02-a9b3-450839929e43", name: "Hamburg", count: 267 },
    { uuid: "09a20ce8-eb77-40f9-99c8-aa4e7dbf6a99", name: "München", count: 899 }
  ]
  searchResults: City[] = [];

  // constructor() {}

  // ngOnInit(): void {

  // }

  searchCities(): void {
    this.searchResults = this.cities.filter((city) => city.name.toLowerCase().includes(this.searchQuery.toLowerCase()));
  }
}