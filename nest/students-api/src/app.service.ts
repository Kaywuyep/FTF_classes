import { Injectable } from '@nestjs/common';

// this contains your business logic, and is injected into the controller
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
