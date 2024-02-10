import { Controller, Get, Param } from '@nestjs/common';
import { ReviewsService } from './reviews.service';

@Controller('reviews')
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}

  @Get()
  findAll() {
    return this.reviewsService.findAll();
  }

  @Get(':companyId')
  findReviewsByCompanyId(@Param('companyId') companyId: string) {
    return this.reviewsService.findReviewsByCompanyId(companyId);
  }
}
