function tabuada(){
    var numero = document.querySelector("input#num1");
    var tabuada_campo = document.querySelector("select#seltab");

    if (numero.value.length == 0){
        alert("Por favor, digite um número.");
    }else{
        var num = Number(numero.value);
        var cont = 1;

        tabuada_campo.innerHTML = '';
    
        while(cont <= 10){
            var item = document.createElement('option');
            item.text = `${num} x ${cont} = ${num*cont}`;
            item.value = `tab${cont}`;
            tabuada_campo.appendChild(item);
            cont++
        }
    }
    
}