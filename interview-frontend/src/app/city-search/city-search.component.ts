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
    this.fetchCities([this.searchQuery]);
  }

  searchCities(event: Event): void {
    event.preventDefault();
    this.currentPage = 1;
    // const cityNames = this.searchQuery.split(",").map(city => city.trim());
    this.fetchCities([this.searchQuery]);
  }

  loadMore(): void {
    this.currentPage++;
    this.fetchCities([this.searchQuery]);
  }

  private fetchCities(cityNames: string[]): void {
    for (const cityName of cityNames) {
      this.citySearchService.searchCities(cityName, this.currentPage)
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
          complete: () => console.info("City properly fetched!")
        }
        )
    }
    }
}