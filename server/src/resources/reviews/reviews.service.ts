import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/db.service';

@Injectable()
export class ReviewsService {
  constructor(private readonly prisma: PrismaService) {}

  async findReviewsByCompanyId(companyId: string) {
    if (!companyId) {
      throw new Error('Company ID is required');
    }

    const avg = await this.prisma.companyReview.aggregate({
      where: {
        companyId,
      },
      _avg: {
        rating: true,
      },
    });

    const reviews = await this.prisma.companyReview.findMany({
      take: 10,
      where: {
        companyId,
      },
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        rating: true,
        title: true,
        description: true,
        company: true,
      },
    });

    return {
      rating: avg._avg.rating,
      reviews,
    };
  }
}
