function parimpar(n){
    if(n%2 == 0){
        return "Número par!";
    }else{
        return "Número impar!";
    }
}

let res = parimpar(4);
console.log(res);