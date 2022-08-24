import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { UserModel } from './models/user.model';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  async findUsers(): Promise<Pick<UserModel, any>> {
    return await this.prisma.users.findMany({
      where: { is_remove: false },
    });
  }

  async findUserById(user_id: number): Promise<any> {
    const user = await this.prisma.users.findFirst({
      where: {
        user_id: user_id,
        is_remove: false,
      },
    });
    return user;
  }
}
