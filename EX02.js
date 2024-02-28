// Usando o mesmo array do exercício anterior, adicione mais uma fruta ao array frutas. Em seguida, remova a primeira fruta do array. Imprima o array atualizado no console.

const prompt = require('prompt-sync')();

const frutas = ["banana", "manga", "caqui"];

console.log(`A segunda fruta é: ${frutas[1]}`);

frutas.push("kiwi");

console.log (`Adicionando uma fruta: ${frutas}`);

let removido = frutas.shift();

console.log(`Removendo a primeira fruta: ${frutas}`);