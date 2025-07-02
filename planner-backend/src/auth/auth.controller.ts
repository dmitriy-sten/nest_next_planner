import { Controller, Get, Post, Body, UsePipes, ValidationPipe, HttpCode, Res, Req, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import { Request, Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }


  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Post('login')
  async login(@Body() dto: AuthDto, @Res({ passthrough: true }) response: Response) {

    const { refreshToken, ...res } = await this.authService.login(dto)
    this.authService.addRefreshTokenToResponse(response, refreshToken)
    return res
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Post('register')
  async register(@Body() dto: AuthDto, @Res({ passthrough: true }) response: Response) {
    const { refreshToken, ...res } = await this.authService.register(dto)
    this.authService.addRefreshTokenToResponse(response, refreshToken)
    return res
  }



  @HttpCode(200)
  @Post('login/access-token')
  async getNewToken(@Req() req: Request, @Res({ passthrough: true }) res: Response) {

    const refreshTokenFromCookies = req.cookies[this.authService.REFRESH_TOKEN_NAME]

    if (!refreshTokenFromCookies) {
      this.authService.removeRefreshTokenToResponse(res)
      throw new UnauthorizedException('Refresh token not passed')
    }


    const { refreshToken, ...response } = await this.authService.getNewTokens(refreshTokenFromCookies)


    return response
  }

  @HttpCode(200)
  @Post("logout")
  async logout(@Res({ passthrough: true }) res: Response) {
    this.authService.removeRefreshTokenToResponse(res)
    return true
  }
}
