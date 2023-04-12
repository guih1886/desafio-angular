import { Component, Input } from '@angular/core';
import { StudentsService, } from 'src/app/students.service';

@Component({
  selector: 'app-insert-student',
  templateUrl: './insert-student.component.html',
  styleUrls: ['./insert-student.component.less']
})

export class InsertStudentComponent {
  @Input() nome: string = "";
  @Input() nota1: string = "";
  @Input() nota2: string = "";

  constructor(
    private estudades: StudentsService
  ) { }

  adicionarEstudante() {
    //faz a verificação se o nome está vazio
    if (this.nome != "") {
      if (this.nota1 === "") {
        alert("Nota 1 vazia");
      } else if (this.nota2 === "") {
        alert("Nota 2 vazia");
      } else {
        //faz a verificação e substrituição se a string tem , para não ter erro no parse
        if (this.nota1.includes(",")) {
          this.nota1 = this.nota1.replace(",", ".");
        }
        if (this.nota2.includes(",")) {
          this.nota2 = this.nota2.replace(",", ".");
        }
        //se o digitado não for um número, apresenta um erro, se sim faz o parse e chama o service
        if (!isNaN(parseFloat(this.nota1)) && !isNaN(parseFloat(this.nota2))) {
          if ((parseFloat(this.nota1) || parseFloat(this.nota2)) > 10 || (parseFloat(this.nota1) || parseFloat(this.nota2)) < 0) {
            alert("Notas com valores incorretos, por favor digite uma nota entre 0 e 10")
          } else {
            this.estudades.adicionarEstudante(this.nome, parseFloat(this.nota1), parseFloat(this.nota2));
            this.nome = ""
            this.nota1 = ""
            this.nota2 = ""
          }
        } else {
          alert("Um ou mais notas não são números.")
        }
      }
    } else {
      alert("Nome do aluno é obrigatório!")
    }


  }

}
