import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/services/db.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  create(userDto: User) {
    this.prisma.user.create({
      data: {
        ...userDto,
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
        firstName: true,
        lastName: true,
        password: true,
      },
    });
  }

  findOne(id: string) {
    try {
      return this.prisma.user.findUnique({
        where: {
          id,
        },
        select: {
          id: true,
          email: true,
          firstName: true,
          lastName: true,
          role: true,
        },
      });
    } catch (error) {
      return null;
    }
  }
}
