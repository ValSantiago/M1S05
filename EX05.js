// Crie um novo array chamado numerosOrdenados contendo os mesmos números do array numeros. Em seguida, ordene esse novo array em ordem crescente e imprima-o no console.

const prompt = require('prompt-sync')();

const numeros = [];

for (let i = 0; i < 5; i++) {
    const numero = parseInt(prompt(`Digite o ${i + 1}º número inteiro: `));
    numeros.push(numero);
}

console.log("Números no array:");
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}

const numerosOrdenados = numeros.sort (function (a, b) {
    return a - b;
});

console.log (numerosOrdenados);