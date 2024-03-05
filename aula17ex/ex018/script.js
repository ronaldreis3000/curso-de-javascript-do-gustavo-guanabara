var numeros = []; // Array utilizado na função adiciona_numeros

var numero = document.querySelector("input#num1"); // Variável utilizada na função adiciona_numeros
var numero_campo = document.querySelector("select#seltab"); // Variável utilizada nas funções adiciona_numeros e mostra_relatorio
var relatorio_final = ''; // Variável utilizada na função mostra_relatorio. Essa variável conterá o relatório a ser exibido para usuário quando ele clicar no botão Finalizar
var soma_numeros; // Variável utilizada na função mostra_relatorio
var init; // Variável utilizada na função mostra_relatorio
var media_numeros; // Variável utilizada na função mostra_relatorio

function adiciona_numeros(){
    if (numero.value.length == 0){ // Verifica se o usuário digitou algum número
        alert("Por favor, digite um número.");
    }else if(Number(numero.value) < 1 || Number(numero.value) > 100){ // Verifica se o número digitado pelo usuário está na faixa aceitável (de 1 a 100)
        alert("Números abaixo de 1 ou acima de 100 não são aceitos.");
    }else if(numeros.length == 0){ // Verifica se o array numeros está vazio
        numeros.push(Number(numero.value)); // Adiciona no array numeros o número digitado pelo usuário

        numero_campo.innerHTML = ''; // Limpa o select que contém os números

        // Adiciona na tela o número digitado pelo usuário
        var item = document.createElement('option');
        item.text = `Valor ${numero.value} adicionado`;
        numero_campo.appendChild(item);
    }else if(numeros.indexOf(numero.value) > -1){ // Verifica se o usuário já informou o número atual anteriormente
        alert("Não são aceitos números já informados anteriormente");
    }else{
        numeros.push(Number(numero.value)); // Adiciona no array numeros o número digitado pelo usuário

        // Adiciona na tela o número digitado pelo usuário
        var item = document.createElement('option');
        item.text = `Valor ${numero.value} adicionado`;
        numero_campo.appendChild(item);

        // Esconde a div de relatório quando um novo número é inserido, pois os cálculos precisarão ser refeitos        
        document.querySelector("div#relatorio").style.display = "none";
    }

    //Limpa o input e coloca nele o foco
    numero.value = '';
    numero.focus();
}

function mostra_relatorio(){
    if(numeros.length == 0 ){
        alert("Por favor, digite algum número");
    }else{
        var maior_numero = Math.max.apply(null, numeros); // Obtém o maior número do array numeros
        var menor_numero = Math.min.apply(null, numeros); // Obtém o menor número do array numeros

        // Obtém a soma de todos os números inseridos pelo usuário
        soma_numeros = 0; // Reset de variável
        for(init = 0; init < numeros.length; init++){
            soma_numeros = soma_numeros + numeros[init];
        }

        // Obtém a média de todos os números inseridos pelo usuário
        media_numeros = soma_numeros / numeros.length;

        relatorio_final = `
        <p> Ao todo temos ${numeros.length} número(s) cadastrado(s). </p>
        <p> O maior valor informado foi ${maior_numero}. </p>
        <p> O menor valor informado foi ${menor_numero}. </p>
        <p> Somando todos os números temos: ${soma_numeros}. </p>
        <p> A média dos valores digitados é ${media_numeros}. </p>
        `;

        document.querySelector("div#relatorio").innerHTML = relatorio_final;
        document.querySelector("div#relatorio").style.display = "block";

    }
}