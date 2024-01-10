let valores = [1,4, 5, 2, 6, 3]
valores.sort() 
console.log(valores)
let pos = valores.indexOf(2)
console.log (pos)
if(pos == -1){
    console.log(`Não encontramos o valor digitado dentro da lista `)
}else{
    console.log(`O valordigitado está no indice ${pos} da lista`)
}