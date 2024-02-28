// Utilizando o array numeros utilizado nos exercícios anteriores, crie um novo array chamado quadrados que contenha o quadrado de cada número do array numeros. Imprima o array quadrados no console. Use o método map para realizar a criação de um novo array.

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

let quadrados = numeros.map (function (numero) {
    return numero * 2;
});

console.log(quadrados);