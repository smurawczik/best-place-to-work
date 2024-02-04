import {
  Body,
  Controller,
  Post,
  HttpCode,
  HttpStatus,
  Res,
  Get,
  UseGuards,
  Request,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { Response } from 'express';
import { AuthGuard } from './auth.guard';
import { DefaultSuccessResponse } from 'src/utils/http.utils';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(
    @Body() signInDto: { email: string; password: string },
    @Res({ passthrough: true }) response: Response,
  ) {
    return this.authService.login(
      signInDto.email,
      signInDto.password,
      response,
    );
  }

  @UseGuards(AuthGuard)
  @Post('logout')
  logout(@Res({ passthrough: true }) response: Response) {
    this.authService.logout(response);
    return DefaultSuccessResponse;
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Request() req: Record<string, any>) {
    if (!req.user) {
      throw new Error('User not found');
    }
    return this.authService.profile(req.user.id);
  }
}
