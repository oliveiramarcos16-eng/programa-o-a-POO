/**
 * Questão 1: Classe e Objeto
 * Enunciado: Crie uma classe Pessoa com os atributos nome e idade. 
 * Crie um objeto e exiba seus atributos.
 */

class Pessoa {
    // Atributos explicitamente tipados em TypeScript
    nome: string;
    idade: number;

    // O construtor é o método inicializador que molda o objeto com seus dados
    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }
}

// Instanciando o objeto real a partir da classe molde
const pessoaExemplo = new Pessoa("Ana Silva", 28);

console.log("=========================================");
console.log("       DADOS DO OBJETO INSTANCIADO       ");
console.log("=========================================");
console.log(`Nome da Pessoa:  ${pessoaExemplo.nome}`);
console.log(`Idade da Pessoa: ${pessoaExemplo.idade} anos`);
console.log("=========================================");

