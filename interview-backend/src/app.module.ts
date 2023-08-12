import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { CitySearchController } from './city-search/city-search.controller';
import { CityDto } from './city-search/city.dto';

@Module({
  imports: [],
  controllers: [CitySearchController],
  providers: [CityDto],
})
export class AppModule {}
