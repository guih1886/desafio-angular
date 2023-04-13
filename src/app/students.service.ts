import { Injectable } from '@angular/core';
import { Students, estudantes } from './components/insert-student/students';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  lista: Students[] = estudantes;
  id = 0;
  nome: string | undefined;
  nota1: number | undefined;
  nota2: number | undefined;
  estado = 'Inserir'

  constructor(
    private router: Router
  ) { }

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

  excluirEstudante(id: number) {
    this.lista = this.lista.filter(item => item.id !== id);
    localStorage.setItem("estudantes", JSON.stringify(this.lista));
  }

  alterarEstudante(id: number) {
    this.router.navigate(['insert-students']);
    this.estado = 'Alterar';
    const estudante = this.lista.find((item) => item.id === id);
    this.nome = estudante?.nome;
    this.nota1 = estudante?.nota1;
    this.nota2 = estudante?.nota2;
    this.excluirEstudante(id)
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

  getEstado() {
    return this.estado;
  }

  getNome(): string {
    return JSON.stringify(this.nome)
  }

  getNota1(): string {
    return JSON.stringify(this.nota1)
  }

  getNota2(): string {
    return JSON.stringify(this.nota2)
  }

}
