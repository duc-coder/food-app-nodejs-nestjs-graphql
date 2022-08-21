import { Args, Query, Resolver } from '@nestjs/graphql';
import { UserModel } from './models/user.model';
import { UserService } from './user.service';

@Resolver((of) => UserModel)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query((returns) => [UserModel])
  async users(): Promise<UserModel[]> {
    return this.userService.findUsers();
  }

  @Query((returns) => UserModel)
  async userById(@Args('id') user_id: number): Promise<UserModel> {
    return this.userService.findUserById(user_id);
  }
}
