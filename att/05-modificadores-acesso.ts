class contaBancaria{
    private saldo: number;

    constructor(){
        this.saldo = 0
    }

    depositar(valor:number): void{
        this.saldo += valor
    }

    consultarConta(): number{
        return this.saldo
    }
}

const conta1 = new contaBancaria();

conta1.depositar(500);

console.log("valor de conta:",conta1.consultarConta())
