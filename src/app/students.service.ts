import { Injectable } from '@angular/core';
import { Students, estudantes } from './components/insert-student/students';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  lista: Students[] = estudantes;
  id = 0;

  getAll() {
    return this.lista
  }

  calcularMedia(nota1: number, nota2: number) {
    return (nota1 + nota2) / 2;
  }

  adicionarEstudante(nome: string, nota1: number, nota2: number) {
    this.id++;
    this.lista.push({ id: this.id, nome: nome, nota1: nota1, nota2: nota2, media: this.calcularMedia(nota1, nota2) })
    alert("Estudante adicionado com sucesso na lista.")
  }

}
