function clicou(){
    //Abaixo foram criadas as variáveis para coletar os números inseridos dentro dos inputs no nosso HTML coletanndo apartir do ID. Aqui abaixo na verdade deveriamos usar o let para criação de variáveis por questão de escopo pois a mesma some ao sair do bloco de execução
    var ini = document.getElementById("numero1")
    var fini = document.getElementById("numero2")
    var pul = document.getElementById("pulando")
    var result = document.getElementById("resulte")
  // nessee caso para verificação quando se coleta pelo name não funciona, agora quando se faz pelo Id funciona. Sofri bastante para descobrir. Tive que assistir a aula e não me desafiei infelizmente. 
    if (ini.value.length == 0 || fini.value.length == 0 || pul.value.length == 0 ){
        // Aqui no if fiz a verificação se foi inserido o valor dentro dos campos. O que está sendo verificado é se o valor dentro das variáveis tem o comprimento igual a zero, pois se não, haverá o alerta para o preenchimento correto
        //window.alert("Preencha tudo corretamente")
        result.innerHTML = " Impossível contar. Insira todos os dados "
    }else{
        result.innerHTML = "Contando.... : <br>" // se as informações estão inseridas de forma correta serão criadas novas variáveis que receberão as anteriores e as trnsformando em números para fazer os cálculos adequados
        var i = Number(ini.value)
        var f = Number(fini.value)
        var p = Number(pul.value)
        if(p <= 0){ //se o valro a ser pulado for igual a zero podemos ter problemas na execução da página. logo para esse caso para que não haja travamentos na página será exibido um alerta para a correção do erro.
            window.alert('Passo inválido. Considerando  o pulando de como sendo de  1 em 1')
            p = 1 // nesse caso após  o alerta o pulo será configurado para ser igual a 1 e o código rodar normalmente.
        }
            if(i < f){ // se tudo ok tá na hora de fazer as contagem usando o for 
                for(var c = i; c <= f; c+=p  ){// Nesse primeiro caso são para a orden crescente 
                    result.innerHTML += `${c} 🌞 `// O emoj é conseguido no emoj pédia aqui apenas colei o emoj mais mo caso pode-se por o código \u{1f3c1} assim como para exibir a variável com o pleaseholders deverá fazer uso das crases
                }
            }else{
                 
                for(var c = i; c >= f; c-=p  ){// Nesse primeiro caso são para a orden decrescente 
                    result.innerHTML += `${c} 🌞 `
                }   
            }
            result.innerHTML += `⚡ `
        }

            
    
    
   
}