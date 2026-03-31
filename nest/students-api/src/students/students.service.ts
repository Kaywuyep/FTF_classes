// src/students/students.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
// A simple in-memory store (we will replace with a database later)
interface Student {
id: number;
name: string;
email: string;
age: number;
}
@Injectable()
export class StudentsService {
private students: Student[] = [];
private nextId = 1;
findAll(): Student[] {
return this.students;
}
findOne(id: number): Student {
const student = this.students.find(s => s.id === id);
if (!student) {
throw new NotFoundException(`Student with id ${id} not found`);
}
return student;
}
create(data: Partial&lt;Student&gt;): Student {
const student = { id: this.nextId++, ...data } as Student;
this.students.push(student);
return student;
}
remove(id: number): void {
const index = this.students.findIndex(s => s.id === id);
if (index === -1) throw new NotFoundException();
this.students.splice(index, 1);
}
}