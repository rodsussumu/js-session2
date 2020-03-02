function Pessoa(nome, sobrenome) {
    //Atributos ou metodos privados, nao podem ser utilizados fora da notação
    const ID = 123456;
    const metodoInterno = function() {

    };

    // Atributos ou metodos publicos, podem ser utilizado fora da notação
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log(this.nome + 'Sou um metodo')
    }
}

const p1 = new Pessoa('rodrigo', 'tanaka')
p1.metodo();