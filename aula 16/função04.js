

function fatorial(n){ // a função recebe o número 5
    let fat= 1 // o fatorial recebe o número 1 
    for ( let c = n; c > 1; --c){ //a variável c recebe o valor dado para o parâmetro. Enquanto o mesmo for maior que 1 será decrescido do mesmo uma unidade
        fat *= c // o fatorial passa a ser a variável c vezes ele mesmo 
    }
    return fat // será retornado o valor de fat no ponto que o c seja menor do que 1
}

console.log(fatorial(5))


//vamos cálcular o fatorial de determinado número.
// nesse caso o número passado será o número 5.