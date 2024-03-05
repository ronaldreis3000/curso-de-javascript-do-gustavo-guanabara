function contar(){
    var inicio = document.querySelector("input#inicio");
    var fim = document.querySelector("input#fim");
    var passo = document.querySelector("input#passo");
    var mensagem = document.querySelector("div#mensagem");
    var correto = true;

    if (inicio.value.length == 0 || fim.value.length == 0){ // O valor inicial ou final não foi informado pelo usuário
        mensagem.innerHTML = "Impossível contar!";
        correto = false;
    }else if (passo.value.length == 0 || Number(passo.value) == 0){
        mensagem.innerHTML = '<p>Passo inválido! Considerando passo como sendo igual a 1</p>';
        passo.value = 1;
        correto = true;
    }

    if (correto){
        mensagem.innerHTML += '<p>Contando:</p>';

        var inicial = Number(inicio.value);
        var final = Number(fim.value);
        var passada = Number(passo.value);

        if(inicial < final){
            // Contagem crescente
            for (inicial; inicial <= final; inicial += passada){
                mensagem.innerHTML += `${inicial}  &#128073; `;
            }
        }else{
            // Contagem regressiva
            for (inicial; inicial >= final; inicial -= passada){
                mensagem.innerHTML += `${inicial}  &#128073; `;
            }
        }


        mensagem.innerHTML += "&#127937";
    }
    
}