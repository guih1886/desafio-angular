import { Component, OnInit } from '@angular/core';
import { Students } from '../insert-student/students';
import { StudentsService } from 'src/app/students.service';

@Component({
  selector: 'app-show-students',
  templateUrl: './show-students.component.html',
  styleUrls: ['./show-students.component.less']
})
export class ShowStudentsComponent implements OnInit {
  list: Students[] = [];

  constructor(
    private estudante: StudentsService
  ) { }

  ngOnInit(): void {
    this.list = this.estudante.getAll();
  }

}
