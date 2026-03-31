import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// this is the controller, which handles incoming https/http requests and returns responses to the client.
// It uses the service to get data and perform actions.
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
