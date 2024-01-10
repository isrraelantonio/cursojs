

function fatorial(n){ 
    if(n == 1){
        return 1
    }else{
        return n * fatorial(n - 1)
    }

    }
    


console.log(fatorial(5))


/*vamos cálcular o fatorial de determinado número de uma forma diferente seguindo o que foi aprendido em matemática discritiva. 
n! = n * n-1 -- O fatorial de qualquer número é ele vezes ele menos 1 
1! = 1 --- o um fatorial será sempre 1
o número passado como parâmetro para ser o nosso fatorial será o número 5
 */