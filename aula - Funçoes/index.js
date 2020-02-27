// Declaração de função (function hoisting)
// Declaração de função normal
function falaOi() {
    console.log('oi');
}

// First-class objeto (objeto de primeira classe);
// Function expression
const souUmDado = function() {
    console.log("sou um dado");
}
souUmDado();

// Arrow function
const arrowFunc = () => {

}

// Dentro de um objeto 
const obj = {
    falar() {
        console.log("Estou falando")
    }
}
obj.falar();
