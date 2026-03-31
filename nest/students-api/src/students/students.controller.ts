// src/students/students.controller.ts
import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { StudentsService } from './students.service';

@Controller('students') // All routes here are prefixed /students
export class StudentsController {
// NestJS injects the service automatically (DI magic)
constructor(private readonly studentsService: StudentsService) {}

@Get() // GET /students
findAll() {
return this.studentsService.findAll();
}

@Get(':id') // GET /students/:id
findOne(@Param('id') id: string) {
return this.studentsService.findOne(+id); // +id converts string to number
}

@Post() // POST /students
create(@Body() body: any) {
return this.studentsService.create(body);
}
}
