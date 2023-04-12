import { Injectable } from '@angular/core';
import { Students, estudantes } from './components/insert-student/students';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  lista: Students[] = estudantes;
  id = 0;

  getAll() {
    this.lista = JSON.parse(localStorage.getItem("estudantes") || "[]");
    return this.lista;
  }

  adicionarEstudante(nome: string, nota1: number, nota2: number) {
    this.id++;
    this.lista.push({ id: this.id, nome: nome, nota1: nota1, nota2: nota2, media: this.calcularMedia(nota1, nota2), situacao: this.calcularSituacao(nota1, nota2) })
    localStorage.setItem("estudantes", JSON.stringify(this.lista));
    alert("Estudante adicionado com sucesso na lista.")
  }

  calcularMedia(nota1: number, nota2: number) {
    return (nota1 + nota2) / 2;
  }

  calcularSituacao(nota1: number, nota2: number): string {
    if (this.calcularMedia(nota1, nota2) >= 7) {
      return "Aprovado";
    } else {
      return "Reprovado";
    }
  }

}
