/**
 * Questão 3: Métodos
 * Enunciado: Crie uma classe Aluno com os atributos nome e nota. 
 * Implemente o método aprovado(), que deve retornar true quando a nota for maior ou igual a 6.
 */

class Aluno {
    nome: string;
    nota: number;

    constructor(nome: string, nota: number) {
        this.nome = nome;
        this.nota = nota;
    }

    // Método que executa uma lógica de verificação e retorna um booleano (true/false)
    aprovado(): boolean {
        return this.nota >= 6;
    }
}

// Criando dois alunos com notas diferentes para testar o método
const alunoA = new Aluno("Carlos", 7.5);
const alunoB = new Aluno("Mariana", 4.5);

console.log("=========================================");
console.log("          RESULTADOS DOS ALUNOS          ");
console.log("=========================================");
console.log(`Aluno: ${alunoA.nome} | Nota: ${alunoA.nota} | Aprovado? ${alunoA.aprovado() ? "Sim 🎉" : "Não ❌"}`);
console.log(`Aluno: ${alunoB.nome} | Nota: ${alunoB.nota} | Aprovado? ${alunoB.aprovado() ? "Sim 🎉" : "Não ❌"}`);
console.log("=========================================");

