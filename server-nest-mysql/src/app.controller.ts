import { Controller, Get, Res, HttpStatus } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  root(@Res() response: Response): void {
    // the homepage will load our index.html which contains angular logic
    response.status(HttpStatus.CREATED).sendFile(__dirname + '/client/index.html');
  }

  @Get('test')
  testApi(): string {
    // Some api data, can be an object also
    return 'my great api';
  }
}
