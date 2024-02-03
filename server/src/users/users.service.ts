import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/services/db.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  create(userDto: User, password: string) {
    this.prisma.user.create({
      data: {
        ...userDto,
        password: {
          create: {
            password,
          },
        },
      },
    });
  }

  findByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: {
        email,
      },
      select: {
        id: true,
        email: true,
        name: true,
        password: {
          select: {
            password: true,
          },
        },
      },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }
}
