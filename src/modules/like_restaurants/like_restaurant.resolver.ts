import { Resolver } from '@nestjs/graphql';
import { LikeRestaurantService } from './like_restaurant.service';
import { LikeRestaurantModel } from './models/like_restaurant.model';

@Resolver((_of) => LikeRestaurantModel)
export class LikeRestaurantResolver {
  constructor(private likeRestaurantService: LikeRestaurantService) {}
}
