

var agora = new Date()// a função new Date serve para coletar a hora do seu servidor no caso a hora que tem em seu computador 
var hora = agora.getHours()// nesse caso coletamos a hora com o getHours porém existe a opção para coletar outras informações como data, minutos, segundos, dentre outros.
console.log(`São exatamente ${hora} horas`)

if (hora < 12){
    console.log("Tenha um ótimo dia")
}
else if(hora >= 12 && hora <18){
    console.log("Boa tarde")
}
    else{
        console.log('Boa noite')
    }
    // Obs: Se o seu script estiver rodando na sua máquina será apresentada a hora da mesma se estiver rodando na do seu usuário será a hora da máquina do mesmo. e se estiver rodando no servidor será a hora do servidor.
