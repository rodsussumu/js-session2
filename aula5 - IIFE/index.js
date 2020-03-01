// IIFE Immediately invoked function expression
(function(idade, peso){
    const sobrenome = 'Tanaka';
        function criaNome(nome) {
            return nome + ' ' + sobrenome
        }
        function falaNome() {
            console.log(criaNome('Rodrigo'))
        }
        falaNome();
        console.log(idade, peso);
}) (19, '54kg');