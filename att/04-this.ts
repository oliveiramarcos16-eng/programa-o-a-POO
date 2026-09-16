/**
 * Questão 4: this/self
 * Enunciado: Crie uma classe Retangulo com os atributos largura e altura. 
 * Utilize this para inicializá-los no construtor e implementar um método calcularPerimetro().
 */

class Retangulo {
    largura: number;
    altura: number;

    constructor(largura: number, altura: number) {
        // O 'this' diferencia o atributo da classe do parâmetro recebido no construtor
        this.largura = largura;
        this.altura = altura;
    }

    // Método que utiliza os atributos internos através do 'this' para calcular o perímetro
    calcularPerimetro(): number {
        return 2 * (this.largura + this.altura);
    }
}

const meuRetangulo = new Retangulo(10, 5);

console.log("=========================================");
console.log("          CÁLCULO DO RETÂNGULO           ");
console.log("=========================================");
console.log(`Largura: ${meuRetangulo.largura}m`);
console.log(`Altura: ${meuRetangulo.altura}m`);
console.log(`Perímetro Total: ${meuRetangulo.calcularPerimetro()}m`);
console.log("=========================================");

