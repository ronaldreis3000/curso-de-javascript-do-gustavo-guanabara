let num = [5, 8, 2, 9, 3];

num.sort();

num.push(7);

console.log(`\n Nosso vetor é o ${num} \n`);




var carros = ['Fiat Punto', 'Fiat Marea', 'Fiat Uno'];

console.log(`\n Carro na primeira posição: ${carros[0]} \n`);

carros[3] = 'Chevrolet Celta';

console.log(`\n Carros: ${carros} \n`);

carros.push('Chevrolet Onix');

console.log(`\n Carros: ${carros} \n`);

console.log(`\n Número de carros: ${carros.length} \n`);

console.log(`\n Carros em ordem alfabética: ${carros.sort()} \n`);



var carros = ['Fiat Punto', 'Fiat Marea', 'Fiat Uno'];

carros.forEach(myFunction);

function myFunction(item, index) {
  console.log(`Vai!! A posição ${index} tem o valor ${item} <br>`);
}