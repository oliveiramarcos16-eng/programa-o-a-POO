class aluno{
    nome: string;
    nota: number;

    constructor(nome:string, nota:number){
        this.nome = nome;
        this.nota = nota;
    }

    aprovado(): boolean{
        return this.nota >=6;
    }

}

const aluno1 = new aluno ("maria", 9)

console.log (aluno1.nome);
console.log (aluno1.nota)
console.log ("aprovado?", aluno1.aprovado());
