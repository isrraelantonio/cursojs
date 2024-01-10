function parimp(n1, n2){
    return n1 + n2
     
}
console.log(parimp(344, 433))
// se ambos os parâmatros forem definidos o resultdo do parimp será o 777, nesse caso, temos os dois valores definidos e não temos uma pré definição para os mesmos. Se por algum motivo, algum deles não for passado, o resultado disso será O NAM, que quer dizer não é um número, já que o mesmo não foi definido logo a soma não ocorrerá.

// vejamos agora o exemplo com parâmetros já  pré definidos. Em caso de alguns dos valores não ser passado os valor do mesmo será o já definido dentro da própria função. Como no caso abaixo onde o valor prédefinido para ambos é igual a zero. caso o valor não seja passado para o número 2 o seu valor será zero mais o valor passado para o parâmetro 1, caso nenhum dos dois seja de fato passado para nehum dos dois, pelo que o código fala o resultado será igual a zero. 
function parimp(n1 = 0, n2 = 0){
    return n1 + n2
     
}
console.log(parimp(344))

function parimp(n1 = 0, n2 = 0){
    return n1 + n2
     
}
console.log(parimp())