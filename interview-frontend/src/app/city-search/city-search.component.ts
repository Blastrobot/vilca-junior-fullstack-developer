import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

interface City {
  uuid: string | number;
  name: string;
  count: number;
}

@Component({
  selector: 'app-city-search',
  templateUrl: './city-search.component.html',
  styleUrls: ['./city-search.component.scss']
})

export class CitySearchComponent implements OnInit {
  searchQuery: string = "";
  cities: City[] = [];
  currentPage: number = 1;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {

  }

  searchCities(): void {
    this.currentPage = 1;
    this.fetchCities();
  }
}