   /*Aqui abaixo temos a criação das nossas variáveis tanto para o coleta do número inserido pelo usuário, como também a coleta do select pelo Id  para inserção das listas, depois foi criada uma variável para fazer a inserção das informações desejadas e por último a criação de uma lista vazia para a inserção de valores  */
   
   
   
   let num = document.querySelector("input#fnum")
   let lista = document.querySelector("select#flista")
   let res = document.querySelector("div#res")
   let valores = []
   
   
   function isNumero(n){// Nessa função vamos verificar se os valores passados pelo usuário são maiores e iguais a 1 e menores ou iguais a 100 do contrário a isso a resposta será false, se veridico será true, que no caso é a resposta que a função adicionar precisa para uma das funções chamadas no if funcionarem
        if(Number(n) >= 1 && Number(n) <= 100){//perceba que a variável está sendo transformada em numero para essa tipo de verificação pelo Number()
            return true

        }else{
            return false
        }
   }

   function inLista(n, l){ //Nessa segunda fução que no caso é a de dois parâmetros, queremos verificar se o valor repassado pelo usuário não está na lista.caso esteja sera respondido com true essa resposta será o que faz a segunda função da função adicionar funcionar caso a resposta seja false. a função citada não poderá ser executada.  lenbrando que o método indexOf verifica se um número se encontra na lista e se é diferente de -1 é sinal que já pertence a lista 
        if(l.indexOf(Number(n)) != -1){// perceba que a variável está sendo transformada em numero para essa tipo de verificação pelo Number()
            return true
        }else{
            return false
        }


   }

   function adicionar(){// Essa função é para verificar se os valores adicionados estão presentes na lista, nessa função haverá um if, o mesmo so será executado se as inforamções das duas funções chamadas nele responderem com true, lembrando que os parâmetros repassados para as mesmas são passados na própria função. Na primeira será repassado apenas um valor, que nesse caso  é o valor passado pelo usuário. Na segunda função temos dois parâmetros o valor repassado pelo usuario e a própria lista
        if (isNumero(num.value) && !inLista(num.value, valores)){
          // verificaremos também se a primeira fução estiver na segunda
            valores.push(Number(num.value))// assim que tudo estiver ok o número na variável num será inserido na lista pelo método push
            let item = document.createElement("option") // criaremos agora o item como variável será criado um elemento apartir do método createElement e ele será um option como citado dentro dos parenteses como o seu elemeto
            item.text = `o valor ${num.value} foi adicionado ` //dentro desse mesmo item será inserido um texto a forma que isso acontece está n opresente código 
            lista.appendChild(item)// agora apartir do id lista do select fazemos sua incerção apartir do metodo appendChild e passamos como elemento o item com todas aquelas informações já inseridas anteriormente
            res.innerHTML = "" // aqui é para limpar a div res com as informações sempre que adicionarmos mais um valor a lista para a incerção de novos dados perante a nova mudança 

        }else{
            window.alert("Valor inválido ou já presente na lista") // esse alerta é caso o if acima não funcione. no caso e se o valor não for maior ou igual a um , menor ou igual a cem, caso não seja inserido nada também. 
        }
       
        num.value = "" // aqui é para limpar o campo de inserção dos números 
        num.focus() // aqui é para que o cursor fique piscando dentro do campo de inserção 
    }

    function finalizar(){ // criamos agora a função finalizar 
        if (valores.length == 0 ){ // verificamos se temos valores na lista. Se não o window irá alertar sobre a necessidade dessa adição 
            window.alert("Adicione valores para finalizar")
        } else{// caso se tenha valor na lista iremos para o códigoabaixo
            let tot = valores.length// criamos a variável tot para pegar o comprimento da lista para saber quantos itens ela tem
            let maior = valores[0] // criamos as variáveis maior e menor dentro de valores serão os valores de indice zero 
            let menor = valores[0]
            soma = 0
            for (let pos in valores){ // verifico se o zero está presente na lista de valores se não vamos para o if 
                soma += valores[pos]// fazemos a soma dos valor da variável soma mais o valor do primeiro indice da lista valores e fará com os seus sucessores até fazer a soma de tudo e 
                if(valores[pos] > maior){ // verificamos se o pos que no caso e zero e para o codigo será o indice zero é mair que quem está no indice zero da lista valores se sim a variavel maior recebera esse valor pos do indice dos valores
                    maior = valores[pos]
                }
                if(valores[pos] < menor){  // verificamos se o pos que no caso e zero e para o codigo será o indice zero é menor do que quem está no indice zero da lista valores se sim a variavel menor recebera esse valor pos do indice dos valores
                    menor = valores[pos]

                }
                media = soma/tot// definimos o cálculo para a média e 
                // agora só exibimos as mensagens na tela com o identificador da div res.innerHTML e acada nova informação o mesmo deve conter o += para receber a informação anterior e a nova tambem com suas características HTML pois a variavel res está formatada para funcionar de acordo com esse tipo de escrita. Perceba o uso das tags P que apenas o HTML usa.
            res.innerHTML = "" // é para serar as informações que ele tiver apartir do momento que tiverem valres presentes na lista 
            res.innerHTML += `<p>Ao todo foram ${tot} valores cadastrados</p>`
            res.innerHTML += `<p> o maior valor encontrado foi ${maior}</p>`
            res.innerHTML += `<p> o menor valor encontrado foi ${menor} </p> `
            res.innerHTML += `<p> A soma dos valores adicionados é igual á ${soma} </p>`
            res.innerHTML += `<p>A  média dos valores adicionados é igual á ${media} </p> `
            }
        }
        
    }