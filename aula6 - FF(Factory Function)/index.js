//Factory functions
function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,
        // Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },
        //Setter
        set nomeCompleto(valor) {
            valor = valor.split(' ')
            this.nome = valor.shift()
            this.sobrenome = valor.join();
            console.log(valor)
        },
        fala(assunto) {
            return `${this.nome} está falando sobre ${assunto}`;
            return `E Possui imc ${this.imc}`
        },
        altura: altura,
        peso: peso,
        // Getter
        get imc() {
            const indice = this.peso / this.altura ** 2
            return indice.toFixed(2)
        }
    };
}

// O demorado é criar a função, depois disso é apenas criar os objetos
const p1 = criaPessoa('Rodrigo', 'Tanaka', 1.8, 80)
const p2 = criaPessoa('Marcelo', 'Tanaka', 1.9, 57)
const p3 = criaPessoa('Rafael', 'Tanaka', 1.5, 110)

console.log(p1.imc)
console.log(p2.imc)
console.log(p3.imc)


p1.nomeCompleto = 'Ricardo Souza'
console.log(p1.nomeCompleto)
