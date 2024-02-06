import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './resources/users/users.module';
import { AuthModule } from './resources/auth/auth.module';
import { JobsModule } from './resources/jobs/jobs.module';

@Module({
  imports: [UsersModule, AuthModule, JobsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
