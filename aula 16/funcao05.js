/*
Entendendo um pouco mais sobre fatorial de um número

5! = 5 * 4 * 3 * 2 * 1
5! = 5 * 4!

ou seja, o fatorial de um número n qualquer é expresso pela 
fórmula:

n! = n * (n-1)!

Já o fatorial de 1 é sempre 1:

1! = 1

*/

// Exemplo de recursividade
function fatorial(n){
    if(n == 1){
        return 1;
    }else{
        return n * fatorial(n-1);
    }
}

console.log(fatorial(5));