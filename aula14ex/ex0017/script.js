function tabu(){// nesse momento como de costume criamos as variáveis e fazemos a sua coleta, esses são os IDS  que criamos para o input e o select 
    let num = document.getElementById("digito")
    let tab = document.getElementById("seltab")

    if(num.value.length == 0){ // verificamos se  o valor dentro num existe ou não caso não será exibido um alerta 
        window.alert ("Digite um número !!!!")
    }else{
       // se tudo estiver ok seguiremos o código 
        let n = Number(num.value) // transformamos o valor em número 
        let c = 1 // criamos uma variável c e atribuímos a ela o valor 1
        tab.innerHTML = ""// fazemos a limpeza do select sempre que iniciemos novamente o código para que os dados anteriores não percistam 
        while (c <= 10){
            let item = document.createElement("option")// aqui criamos um item dentro do select 
            item.text = `${n} X ${c} = ${n*c}` // o item receberá essa equação em forma de texto no caso o mesmo seria   o conteúdo de dentro do mesmo
            tab.value = `tab${c}`  // esse tabe seria o value dentro do select para indicar que esse item é um item específico e o mesmmo pode ser selecionado.
            tab.appendChild(item) // nesse caso esse item será inserido pelo appendChilld e aparecera como item dentro do select
            c++// apartir daqui o c recebe seu incremento  
        }
    }
    
}