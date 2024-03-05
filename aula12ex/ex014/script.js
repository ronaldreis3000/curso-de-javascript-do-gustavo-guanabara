function carregar(){
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');

    var data = new Date();
    var hora = data.getHours();       

    msg.innerHTML = `Agora são ${hora} horas.`;

    if (hora >= 0 && hora < 12){
        // Bom dia!
        img.src = '/aula12ex/ex014/img/cruas/manha.jpg';
        document.body.style.background = '#8c9566';
    }else{
        if (hora >= 12 && hora <= 18){
            // Boa tarde!
            img.src = '/aula12ex/ex014/img/cruas/tarde.jpg';
            document.body.style.background = '#935848';
        }else{
            // Boa noite! 
            img.src = '/aula12ex/ex014/img/cruas/noite.jpg';
            //img.src = '/img/cruas/noite.jpg';
            document.body.style.background = '#013d6b';
        }

    }
}


