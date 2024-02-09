import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/db.service';

@Injectable()
export class JobsService {
  constructor(
    // Inject the PrismaService into the JobsService
    private prisma: PrismaService,
  ) {}

  create() {
    return 'This action adds a new job';
  }

  findAll() {
    return `This action returns all jobs`;
  }

  findOne(id: string) {
    return this.prisma.job.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        title: true,
        description: true,
        createdAt: true,
        updatedAt: true,
        company: true,
        salary: true,
        location: true,
      },
    });
  }

  update(id: number) {
    return `This action updates a #${id} job`;
  }

  remove(id: number) {
    return `This action removes a #${id} job`;
  }

  async getLatest() {
    return this.prisma.job.findMany({
      take: 5,
      orderBy: {
        createdAt: 'desc',
      },
      select: {
        id: true,
        title: true,
        description: true,
        createdAt: true,
        updatedAt: true,
        company: true,
        salary: true,
        location: true,
      },
    });
  }
}
