// Crie um array chamado numeros contendo cinco números inteiros. Utilize um loop for para imprimir cada número do array no console.

// Desafio: utilize a biblioteca prompt-sync para receber cada um dos 5 números.

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