import { Component, Input } from '@angular/core';
import { StudentsService } from 'src/app/students.service';

@Component({
  selector: 'app-insert-student',
  templateUrl: './insert-student.component.html',
  styleUrls: ['./insert-student.component.less']
})

export class InsertStudentComponent {
  @Input() nome: string = "";
  @Input() nota1: number = 0;
  @Input() nota2: number = 0;

  constructor(
    private estudades: StudentsService
  ) { }

  adicionarEstudante() {
    if (this.nome != "") {
      if ((this.nota1 || this.nota2) > 10 || (this.nota1 || this.nota2) < 0) {
        alert("Notas com valores incorretos, por favor digite uma nota entre 0 e 10")
      } else {
        this.estudades.adicionarEstudante(this.nome, this.nota1, this.nota2);
        this.nome = ""
        this.nota1 = 0
        this.nota2 = 0
      }
    } else {
      alert("Insira o nome do aluno!")
    }


  }

}
