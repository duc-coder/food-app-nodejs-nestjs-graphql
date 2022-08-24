import { Resolver } from '@nestjs/graphql';
import { RestaurantModel } from './models/restaurant.model';
import { RestaurantService } from './restaurant.service';

@Resolver((_of) => RestaurantModel)
export class RestaurantResolver {
  constructor(private restaurantService: RestaurantService) {}
}
