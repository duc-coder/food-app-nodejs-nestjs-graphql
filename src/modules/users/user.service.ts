import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { CreateUserInput } from './dto/createUser.arg';
import { UpdateUserInput } from './dto/updateUser.arg';
import { UserModel } from './models/user.model';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async deleteUserById(user_id: number): Promise<UserModel> {
    await this.prisma.users.findFirstOrThrow({
      where: {
        user_id,
        is_remove: false,
      },
    });
    return await this.prisma.users.update({
      where: {
        user_id,
      },
      data: { is_remove: true },
    });
  }

  async updateUserById(
    user_id: number,
    data: UpdateUserInput,
  ): Promise<UserModel> {
    await this.prisma.users.findFirstOrThrow({
      where: {
        user_id,
        is_remove: false,
      },
    });
    const checkExistEmail = await this.prisma.users.findFirst({
      where: {
        email: data.email,
      },
    });
    if (checkExistEmail) {
      throw new Error('Email is existing, please try other email!');
    }
    return await this.prisma.users.update({
      where: {
        user_id: user_id,
      },
      data,
    });
  }

  async createUser(data: CreateUserInput): Promise<UserModel> {
    const checkUser = await this.prisma.users.findFirst({
      where: {
        email: data.email,
        is_remove: false,
      },
    });
    if (checkUser) {
      throw new Error('Email is existing, please try other email!');
    }
    return await this.prisma.users.create({ data });
  }

  async findUsers(): Promise<UserModel[]> {
    return await this.prisma.users.findMany({
      where: { is_remove: false },
    });
  }

  async findUserById(user_id: number): Promise<UserModel> {
    const user = await this.prisma.users.findFirst({
      where: {
        user_id: user_id,
        is_remove: false,
      },
      include: {
        Like_res: true,
      },
    });
    return user;
  }
}
