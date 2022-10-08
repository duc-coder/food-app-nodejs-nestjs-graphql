import { Module } from '@nestjs/common';
import { PrismaModule } from 'nestjs-prisma';
import { RestaurantController } from './restaurant.controller';
import { RestaurantResolver } from './restaurant.resolver';
import { RestaurantService } from './restaurant.service';

@Module({
  imports: [PrismaModule.forRoot()],
  controllers: [RestaurantController],
  providers: [RestaurantResolver, RestaurantService],
})
export class RestaurantModule {}
