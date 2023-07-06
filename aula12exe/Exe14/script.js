function carregar() {
    
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    var segundos = data.getSeconds()
    //var hora = 20
    msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos.`
    if (hora >= 0 && hora < 12) {
        ///bom dia
        img.src = 'imagens/fotomanha.png'
        document.body.style.background = '#ecac6c'
    } else if (hora >= 12 && hora < 18) {
        //boa tarde
        img.src = 'imagens/fototarde.png'
        document.body.style.background = '#fa7102'
    } else {
        //boa noite
         img.src = 'imagens/fotonoite.png'
         document.body.style.background = '#032e56'
    }
}
