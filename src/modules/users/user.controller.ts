import { Controller, Get, Param } from '@nestjs/common';
import { UserModel } from './models/user.model';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findUsers(): Promise<Pick<UserModel[], any>> {
    return this.userService.findUsers();
  }

  @Get(':id')
  findUserById(@Param('id') id: number): Promise<Pick<UserModel, any>> {
    return this.userService.findUserById(Number(id));
  }
}
