// src/students/students.module.ts
import { Module } from '@nestjs/common';
import { StudentsController } from './students.controller';
import { StudentsService } from './students.service';

@Module({
controllers: [StudentsController], // handles HTTP routing
providers: [StudentsService], // business logic, DI-injectable
exports: [StudentsService], // share with other modules
})
export class StudentsModule {}