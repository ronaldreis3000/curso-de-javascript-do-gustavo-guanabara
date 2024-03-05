let valores = [8, 1, 7, 4, 2, 9];

console.log(`\n Total de elementos do array valores: ${valores.length} \n`);

for(let pos = 0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`);
}

console.log(`\n Outra maneira de fazer que resulta no mesmo resultado: \n`);

for(let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`);
}

console.log(`\n ${valores} \n O índice do valor 4 é: ${valores.indexOf(4)} \n`);