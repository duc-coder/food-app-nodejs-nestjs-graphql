import { Module } from '@nestjs/common';
import { PrismaModule } from 'nestjs-prisma';
import { RestaurantResolver } from './restaurant.resolver';
import { RestaurantService } from './restaurant.service';

@Module({
  imports: [PrismaModule.forRoot()],
  providers: [RestaurantResolver, RestaurantService],
})
export class RestaurantModule {}
