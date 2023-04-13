import { Component, Input, OnInit } from '@angular/core';
import { StudentsService, } from 'src/app/students.service';
import { Students } from './students';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insert-student',
  templateUrl: './insert-student.component.html',
  styleUrls: ['./insert-student.component.less']
})

export class InsertStudentComponent implements OnInit {
  @Input() nome: string = "";
  @Input() nota1: string = "";
  @Input() nota2: string = "";
  lista: Students[] = [];
  estado = ""
  idEstudante: number = 0;
  aluno: Students[] = []

  ngOnInit(): void {
    this.estado = this.estudades.getEstado();
    this.idEstudante = this.estudades.getidEstudante();
    if (this.estado === "Alterar") {
      const estudante = this.estudades.alterarEstudante(this.idEstudante)
      this.aluno = [{ id: estudante.id, nome: estudante.nome, media: estudante.media, nota1: estudante.nota1, nota2: estudante.nota2, situacao: estudante.situacao }]
      this.lista = this.estudades.getAll();
      //removendo o estudante da lista
      this.lista = this.lista.filter(item => item.id !== estudante.id);
      //alterando na lista 
      this.nome = estudante.nome
      this.nota1 = JSON.stringify(estudante.nota1)
      this.nota2 = JSON.stringify(estudante.nota2)
    }
    //pegando o ultimo id que foi cadastrado do localstorage
    if (this.estudades.getAll().length != 0) {
      let maxId = -Infinity;
      for (const aluno of this.estudades.getAll()) {
        if (aluno.id > maxId) {
          maxId = aluno.id;
        }
      }
      this.estudades.id = maxId
    } else {
      this.estudades.id = 0
    }
  }

  constructor(
    private estudades: StudentsService,
    private route: Router
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

  alterarEstudante() {
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
            this.lista.push({ id: this.aluno[0].id, nome: this.nome, nota1: parseFloat(this.nota1), nota2: parseFloat(this.nota2), media: this.estudades.calcularMedia(parseFloat(this.nota1), parseFloat(this.nota2)), situacao: this.estudades.calcularSituacao(parseFloat(this.nota1), parseFloat(this.nota2)) })
            console.log(this.lista)
            this.aluno = []
            localStorage.setItem("estudantes", JSON.stringify(this.lista));
            alert("Estudante alterado com sucesso.")
            this.nome = ""
            this.nota1 = ""
            this.nota2 = ""
            this.estado = 'Inserir'
            this.estudades.estado = 'Inserir'
            this.route.navigate(['show-students'])
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
