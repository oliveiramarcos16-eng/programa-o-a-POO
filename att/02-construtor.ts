/**
 * Questão 2: Construtor
 * Enunciado: Crie uma classe Produto com os atributos nome, preco e estoque, 
 * inicializados por um construtor. Crie dois produtos diferentes e exiba seus dados.
 */

class Produto {
    nome: string;
    preco: number;
    estoque: number;

    // O construtor garante que nenhum produto seja criado sem esses 3 dados essenciais
    constructor(nome: string, preco: number, estoque: number) {
        this.nome = nome;
        this.preco = preco;
        this.estoque = estoque;
    }
}

// Instanciando dois produtos completamente diferentes
const produto1 = new Produto("Teclado Mecânico", 250.00, 15);
const produto2 = new Produto("Mouse Gamer", 120.50, 30);

console.log("=========================================");
console.log("          PRODUTOS CADASTRADOS           ");
console.log("=========================================");
console.log(`Produto 1: ${produto1.nome} | Preço: R$${produto1.preco.toFixed(2)} | Estoque: ${produto1.estoque} un`);
console.log(`Produto 2: ${produto2.nome} | Preço: R$${produto2.preco.toFixed(2)} | Estoque: ${produto2.estoque} un`);
console.log("=========================================");

