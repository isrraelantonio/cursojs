// lembrando que se verificarmos qual  o tipo do array e o tipo de um objeto ambos irão ser iguais pois ambos tem básicamente a mesma origem.

let amigo = [] // Aqui criamos um array 
amigo.push(546)// adicionamos um valor para esse vetor
console.log(typeof amigo) // identificaremos de que tipo é esse elemento 
console.log(amigo) // no console será apresntado os valores presentes dentro dos arrays

let amigos = { nome:"josé",  // aqui criamos um objeto e seus elementos com suas respectivas nomeações 
 sexo: "masculino",
 peso: 15,
engordar(p = 0 ){ // dentro do próprio objeto temos uma função. A mesma  recebe o nome de engordar e para ela é passado  o parâmetro p lembrando que é bom pré definir esse parâmetro pois na falta do mesmo o valor de peso passará a ser NAM, ou seja, não é um númer e para esse caso essa não é a intenção .
   
    this.peso += p // nesse caso o this está se referenciando ao paeso informado dentro do objeto e indica que o mesmo será igual ao própio peso mais o valor de p que será repassado no parâmetro abaixo.
}
}
amigos.engordar() // Aqui passamos o parãmetro da função presente no objeto amigos por isso do amigos.engordar, nesse caso o parâmetro será de valor 2 
 console.log( amigos) // Aqui será apresentado os elementos do objeto amigos 
console.log(typeof amigos)// Aqui verificamos de que tipo é o objeto amigos 
console.log( ` ${amigos.nome} pesa ${amigos.peso} kg`) // Aqui serão apresentada a mesagem com as variáveis, veja que ao usar o placeholders dentro do mesmo indicamos o objeto e o nome do seu elemento a que estamos nos referindo 

// Perceba que conseguimos usar funções dentro das variáveis 