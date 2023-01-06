import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginAuthDto } from './dto/login-auth.dto';
import { RegisterAuthDto } from './dto/register-auth.dto';

//TODO http://localhost:3000/auth
//TODO http://localhost:3000/login

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  //TODO register
  @Post('register')
  registerCocinero(@Body() cocineroObject: RegisterAuthDto){
    return this.authService.register(cocineroObject)
  }

  //TODO login
  @Post('login')
  loginCocinero(@Body() cocineroObjectLogin: LoginAuthDto){
    return this.authService.login(cocineroObjectLogin)
  }
}
