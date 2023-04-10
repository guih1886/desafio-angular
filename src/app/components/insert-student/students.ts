export interface Students {
    id: number;
    nome: string;
    nota1: number;
    nota2: number;
    media: number | null;
}

export const estudantes: Students[] = []