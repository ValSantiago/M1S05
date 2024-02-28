// Crie um array chamado pares que contenha apenas os números pares do array numeros criado nos exercícios anteriores. Em seguida, imprima esse novo array no console. Utilize o método filter para realizar a operação de filtragem.

const prompt = require('prompt-sync')();

const numeros = [];

for (let i = 0; i < 5; i++) {
    const numero = parseInt (prompt (`Digite o ${i + 1}º número inteiro: `));
    numeros.push (numero);
}

console.log("Números no array:");

for (let i = 0; i < numeros.length; i++) {
    console.log (numeros[i]);
}

const pares = [];
pares = numeros.filter (function (numero) {
    return numero % 2 === 0;
});

console.log (pares);