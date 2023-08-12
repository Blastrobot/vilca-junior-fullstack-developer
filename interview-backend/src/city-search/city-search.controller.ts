import { Controller, Get, Query } from '@nestjs/common';
// import citiesData from "../cities.json";
import { CityDto } from './city.dto';
import * as fs from "fs-extra";
import * as path from "path";

@Controller("cities")
export class CitySearchController{
  @Get()
  getCities(@Query("search") searchQuery: string, @Query("page") page: number): CityDto[] {
    const citiesDataPath = path.join(__dirname, "../cities.json");

    try{
        const citiesData = fs.readJsonSync(citiesDataPath) as CityDto[];
        
        const perPage = 5;
        const startIndex = (page - 1) * perPage;
        const endIndex = startIndex + perPage;
    
        const filteredCities = citiesData.filter(city => city.cityName.toLowerCase().includes(searchQuery.toLowerCase()));
        console.log("Filtered Cities:", filteredCities);
        const paginatedCities = filteredCities.slice(startIndex, endIndex);
        console.log("The fetch is working!", paginatedCities);
        return paginatedCities;
    }
    catch (error) {
        console.error("Error reading the file cities.json", error);
        return [];
    }
  }
}
