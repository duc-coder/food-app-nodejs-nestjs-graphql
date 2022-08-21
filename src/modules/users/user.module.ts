import { Module } from '@nestjs/common';
import { PrismaModule } from 'nestjs-prisma';
import { UserController } from './user.controller';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';
@Module({
  imports: [PrismaModule.forRoot()],
  // controllers: [UserController],
  providers: [UserResolver, UserService],
})
export class UserModule {}
