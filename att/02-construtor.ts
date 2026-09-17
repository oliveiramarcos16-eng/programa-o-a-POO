class produto{
    nome: string;
    preco: number;
    estoque: number;

    constructor(nome: string, preco: number, estoque: number){
        this.nome = nome;
        this.preco = preco;
        this. estoque = estoque
    }
}

const produto1 = new produto("guitarra", 1200, 6);
const produto2 = new produto("amplificador", 520, 7 );

console.log (produto1);
console.log(produto2);







