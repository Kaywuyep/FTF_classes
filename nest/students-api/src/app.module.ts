import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentsModule } from './students/students.module';
// this is the entry point for for your application, and is where you import other modules, controllers, and services
@Module({
  imports: [StudentsModule], // ← add it to imports
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
