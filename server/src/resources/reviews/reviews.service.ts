import { Injectable } from '@nestjs/common';
import { Company } from '@prisma/client';
import { PrismaService } from 'src/services/db.service';

@Injectable()
export class ReviewsService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    const companyReviews = await this.prisma.companyReview.findMany({
      distinct: ['companyId'],
      take: 10,
      orderBy: {
        createdAt: 'desc',
      },
      select: {
        company: true,
        rating: true,
      },
    });

    if (!companyReviews) {
      throw new Error('No reviews found');
    }

    const companyReviewsWithAvgRating: ({ rating: number | null } & {
      company: Company;
    })[] = [];

    for (const review of companyReviews) {
      const rating = await this.getCompanyRating(review.company.id);
      companyReviewsWithAvgRating.push({
        company: review.company,
        rating,
      });
    }

    return companyReviewsWithAvgRating;
  }

  async findReviewsByCompanyId(companyId: string) {
    if (!companyId) {
      throw new Error('Company ID is required');
    }

    const rating = await this.getCompanyRating(companyId);

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
      rating,
      reviews,
    };
  }

  async getCompanyRating(companyId: string) {
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

    return avg._avg.rating;
  }
}
