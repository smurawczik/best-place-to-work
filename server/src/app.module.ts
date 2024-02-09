import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './resources/users/users.module';
import { AuthModule } from './resources/auth/auth.module';
import { JobsModule } from './resources/jobs/jobs.module';
import { ReviewsModule } from './resources/reviews/reviews.module';

@Module({
  imports: [UsersModule, AuthModule, JobsModule, ReviewsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
