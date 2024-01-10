
function verificar(){
var data = new Date() //coleta da data atual 
var ano = data.getFullYear()//Coleta do ano atual 
var fano = document.getElementById("txtano")// coleta do ano digitado pelo usuário 
var res = document.getElementById("resp")// coleta da mensagem exibida no layout antes da função ser eecutada 

if(fano.value.length == 0 || fano.value > ano){ //se não tiver nada digitado pelo usuário ou ele digitar um ano maior do que o atual 
    window.alert ("Houve algum erro, verifique o ano e digite corretamente")// Caso isso ocora será exibido esse alerta.
}else{ // Do contrário vamos ao else 
    var fsex = document.getElementsByName("radsex") //nesse  caso coletamos o botão selecionado daqui apouco especificaremos se estamos nos referindo ao primeiro ou ao segundo. Lembrando que um é o de número 0 e oo outro o de número 1
    var idade = ano - Number(fano.value)// Calculamos a idade calculando o valor do ano atual menos o valor do ano digitado pelo usuário.
    var genero = "" // temos o genero em branco para substituir depois esse objeto apartir do botão selecionado.
    // Criando um  elemento dentro do HTML pelo própio javascript como o createElement
    //var img = document.createElement("img")
    // Agora setamos o id e também o nome desse id
    //img.setAttribute("id", "foto")

    if(fsex[0].checked){ // na estrutura de decisão verificamos o botão selecionado caso seja o botão de indice zero atribuimos o genero HOMEM  caso o contrário vemos nos códigos abaixo que o genero será MULHER
        genero= "Homem"
            if(idade >= 0 & idade < 10){ // Agora os if e else if e else dentro do mesmo para definirmos a faixa etária do usuário 
                //criança
                window.document.getElementById("foto").innerHTML = "<img src= 'immgens/04anos.png'>"//Aqui temos as imagens sendo inseridas dentro da div especificada dependendo se cumprem com as especificações dessa parte da estrutura de decisão.
            }else if(idade < 21){
                // jovem 
                window.document.getElementById("foto").innerHTML = "<img src= 'immgens/jovem.png'>"
            }else if(idade < 50){
                // Adulto 
                window.document.getElementById("foto").innerHTML = "<img src= 'immgens/040anos.png'>"
            }else{
                // idoso
                window.document.getElementById("foto").innerHTML = "<img src= 'immgens/velhote.png'>"
            }
        
}else if(fsex[1].checked){ // Apenas repetimos o que já fizemos anteriormente agora para o gênero feminino 
        genero = "Mulher"
        if(idade >= 0 & idade < 10){
            //criança
            window.document.getElementById("foto").innerHTML = "<img src= 'immgens/M4anos.png'>"
        }else if(idade < 21){
            // jovem 
            window.document.getElementById("foto").innerHTML = "<img src= 'immgens/M027anos.png'>"
        }else if(idade < 50){
            // Adulto 
            window.document.getElementById("foto").innerHTML = "<img src= 'immgens/M040anos.png'>"
        }else{
            // idoso
            window.document.getElementById("foto").innerHTML = "<img src= 'immgens/M060anos.png'>"
        }
    
    }
    //O alinahmento dentro do javascript não tem funcionado então fiz o mesmo dentro do CSS embora digitado aqui o mesmo não está funcionando de forma alguma.
    resp.style.textAlign = 'center'
    resp.innerHTML = `Detectamos ${genero} com ${idade} ano(s)` // A mensagem que aparece no layout será substtituida por essa onde será coletado o gênero e a idade já calculada so usuário.
}


}


