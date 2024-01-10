
function carregar(){ // aqui temos a função que será chamada ao carregar a página as informações aqui dentro é que permitirão essa interação.

    var msg = window.document.getElementById("msg") // criamos um objeto para coleta da informação presente no id img. Nocaso essa ser´´a a mensagem dentro do layout.
    var data = new Date() // Coleta da data atual 
    var hora = data.getHours() // coleta da hora atual
    //var hora = 19 // usado para testar o funcionamento do código.
    msg.innerHTML = `Agora são exatamente ${hora} horas`// atribuimos nova mensagem ao id msg. 

    if (hora >= 0 && hora < 12){

        // Trabalhando dessa forma eu de fato consegui fazer a tansposição dessas imagens ao documento HTML porém não consegui fazer com o exemplo dado pelo professor Guanabara. que no caso seria dessa forma : dentro dos ifs e elses: img src= 'immgens/rapaz.png' onde, apartir daqui as imagens apresentadas dependendo do horário serão as selecionadas.e em cima dentro da função chamar os parâmetros para coleta dessas imagens para fazer atroca dentro dos seletores de decisão indicando o Id do mesmo:                         var img = window.document.getElementById("imagem") 

        window.document.getElementById("imagem").innerHTML = "<img src= 'immgens/manha.png'>" 
        // imagens sendo adicionadas ao HTML apartir do javascript 
        document.body.style.background = '#f6d3b3' 
        // mudança da cor de fundo segundo as estruturas de ddecisão
    } else if(hora >=12 && hora < 18){
        window.document.getElementById("imagem").innerHTML = "<img src= 'immgens/rapaz.png'>;"
        document.body.style.background = '#fee4ab'
    }else{
        window.document.getElementById("imagem").innerHTML = "<img src= 'immgens/noite.png'>;"
        document.body.style.background = '#a47871'
    }
}


