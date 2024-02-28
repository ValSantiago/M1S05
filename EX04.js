// Utilizando o array numeros do exercício anterior, calcule e imprima a soma de todos os elementos do array. Utilize o reduce para realizar a soma.

const prompt = require ('prompt-sync') ();

const numeros = [];

for (let i = 0; i < 5; i++) {
    const numero = parseInt (prompt (`Digite o ${i + 1}º número inteiro: `));
    numeros.push (numero);
}

console.log ("Números no array:");
for (let i = 0; i < numeros.length; i++) {
    console.log (numeros[i]);
}

const soma = numeros.reduce ((acumulador, numero) => {
    return acumulador + numero;
}, 0);

console.log("Soma dos números:", soma);