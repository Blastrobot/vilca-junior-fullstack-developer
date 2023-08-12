import { Component, OnInit } from '@angular/core';
import { CitySearchService } from '../city-search.service';
import { City } from "../city.interface";

@Component({
  selector: 'app-city-search',
  templateUrl: './city-search.component.html',
  styleUrls: ['./city-search.component.scss']
})

export class CitySearchComponent implements OnInit {
  searchQuery: string = "";
  citiesResults: City[] = [];
  currentPage: number = 1;

  constructor(private citySearchService: CitySearchService) {}

  ngOnInit(): void {

  }

  searchCities(): void {
    this.currentPage = 1;
    this.fetchCities();
  }

  loadMore(): void {
    this.currentPage++;
    this.fetchCities();
  }

  private fetchCities(): void {
    this.citySearchService.searchCities(this.searchQuery, this.currentPage)
      .subscribe({
        next: (data) => {
          if (this.currentPage === 1) {
            this.citiesResults = data;
          } else {
            this.citiesResults = [...this.citiesResults, ...data];
          }
        },
        error: (error) => {
          console.error("Error fetching cities:", error);
        },
        complete: () => console.info("complete")
      }
      )
  }
}