import { Injectable, Res, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { Response } from 'express';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  async login(
    email: string,
    pass: string,
    @Res({ passthrough: true }) response: Response,
  ) {
    const user = await this.usersService.findByEmail(email);
    if (!user || !bcrypt.compare(pass, user?.password)) {
      throw new UnauthorizedException();
    }

    const payload = { sub: user.id, email: user.email };

    const tokenCookieName = this.configService.get<string>('TOKEN_COOKIE_NAME');

    const signedAccessToken = await this.jwtService.signAsync(payload, {
      secret: this.configService.get<string>('JWT_SECRET'),
    });

    if (!tokenCookieName) {
      throw new UnauthorizedException();
    }

    response.cookie(tokenCookieName, signedAccessToken, {
      httpOnly: true,
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
    });

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...result } = user;

    return result;
  }
}
