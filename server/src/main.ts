import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as compression from 'compression';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({ origin: 'http://localhost:5173', credentials: true });
  app.use(cookieParser());
  app.use(compression());
  await app.listen(3000);
}
bootstrap();
