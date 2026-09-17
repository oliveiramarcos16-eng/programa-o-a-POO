class retangulo {
    largura: number;
    altura: number;

    constructor(largura: number, altura: number){
        this.largura = largura;
        this.altura = altura;
    }

    CalcularPerimetro(): number {
        return 2* (this.largura + this.altura)
    }
}

const retangulo1 = new retangulo(10, 5);

console.log("perimetro:", retangulo1.CalcularPerimetro())
