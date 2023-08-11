import { Controller, Get, Query, Param, ParseIntPipe } from '@nestjs/common';
// import { AppService } from './app.service';
import { City } from "./city.interface";
import citiesData from "../../cities.json";

@Controller("cities")
export class AppController{
  @Get()
  getCities(@Query("search") searchQuery: string, @Query("page") page: number): any[] {
    const filterCities = citiesData.filter(city => city.cityName.toLowerCase().includes(searchQuery.toLowerCase()));

    const perPage = 5;
    const startIndex = (page - 1) * perPage;
    const endIndex = startIndex + perPage;
    const paginatedCities = filterCities.slice(startIndex, endIndex);

    return paginatedCities;
  }

  @Get(":id")
  getCityById(@Param("id", ParseIntPipe) id: string | number): City {
    const city = citiesData.find(city => city.uuid === id);
    return city;
  }
}
