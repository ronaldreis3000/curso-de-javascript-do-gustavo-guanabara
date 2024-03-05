function tabuada(){
    var numero = document.querySelector("input#num1");
    var tabuada_campo = document.querySelector("textarea#tabuada_area");

    if (numero.value.length == 0){
        alert("Por favor, digite um número.");
    }else{
        var num = Number(numero.value);

        tabuada_campo.innerHTML = '';
    
        for (var inicial = 0; inicial <= 10; inicial++){
            calculo = num * inicial;
            tabuada_campo.innerHTML += `${num} x ${inicial} = ${num * inicial} \n`;
        }
    }
    
}