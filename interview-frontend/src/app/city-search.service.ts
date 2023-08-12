import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { City } from "./city.interface";

@Injectable({
  providedIn: 'root'
})
export class CitySearchService {
  private url = "http://localhost:3000/cities";

  constructor(private http: HttpClient) { }

  searchCities(searchQuery: string, page: number = 1): Observable<City[]> {
    const endpoint = `${this.url}?search=${searchQuery}&page${page}`;
    return this.http.get<City[]>(endpoint);
  }
}
