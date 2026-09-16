/**
 * Questão 5: Modificadores de acesso
 * Enunciado: Crie uma classe ContaBancaria com o atributo saldo como privado. 
 * Implemente os métodos depositar(valor) e consultarSaldo(), sem permitir que o saldo seja alterado diretamente.
 */

class ContaBancaria {
    // O modificador 'private' impede que o saldo seja alterado de fora da classe (ex: conta.saldo = 100000)
    private saldo: number;

    constructor(saldoInicial: number) {
        this.saldo = saldoInicial;
    }

    // Método público para alterar o saldo de forma controlada e segura
    depositar(valor: number): void {
        if (valor > 0) {
            this.saldo += valor;
            console.log(`✅ Depósito de R$${valor.toFixed(2)} realizado com sucesso!`);
        } else {
            console.log("❌ Valor de depósito inválido.");
        }
    }

    // Método público para ler o saldo sem permitir alteração
    consultarSaldo(): number {
        return this.saldo;
    }
}

const minhaConta = new ContaBancaria(500.00);

console.log("=========================================");
console.log("         OPERAÇÕES BANCÁRIAS             ");
console.log("=========================================");
console.log(`Saldo Inicial: R$${minhaConta.consultarSaldo().toFixed(2)}`);

// Realizando um depósito
minhaConta.depositar(250.50);

// Consultando o saldo atualizado
console.log(`Saldo Atualizado: R$${minhaConta.consultarSaldo().toFixed(2)}`);
console.log("=========================================");

// Nota técnica: Se tentássemos fazer 'minhaConta.saldo = 0;', o TypeScript geraria um erro de compilação.

