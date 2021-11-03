const aprovados = ['Ana','joao','Daneil','Raquel']


aprovados.forEach(function( nome, indice) {
    console.log(`${indice+1}  ${nome}`)
})

aprovados.forEach(nome => console.log(nome))



const exibirAprovados = aprovado => console.log(aprovado)

aprovados.forEach(exibirAprovados)

aprovados.forEach(function( nome,indice /*,array*/) {
    console.log(`${indice+1}  ${nome}`)
    // console.log(array)
})

//for each parte dois 


Array.prototype.ForEach2= function(callback){
    for (let i=0; i< this.length;i++){
        callback(this[i],i,this) //this referencia o Array
    }
}
aprovados.ForEach2(function( nome,indice /*,array*/) {
    console.log(`${indice+1}  ${nome}`)
    // console.log(array)
})

// ciar um array em outro // terao o mesmo tamanho

const nums =[1,2,3,4,5,6]
//map é um for com proposito

let resultado = nums.map(function(e){
    return e*2
})
//gera um array novo
console.log(resultado)

const soma10 = e =>e +10

const triplo = e=> e*3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`
resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)



//parte 2 map

const carrinho = [
    '{"nome":"Borracha","preco":3.45}',
    '{"nome":"Carderno","preco":13.90}',
    '{"nome":"Kit de lapis","preco":41.5}',
    '{"nome":"caneta","preco":7.45}'

]

const paraObject = json =>JSON.parse(json)
resultado3=carrinho.map(paraObject)
console.log(resultado3)
const apenasPreco = produto =>produto.preco
const resultado2 = carrinho.map(paraObject).map(apenasPreco)


console.log(resultado2)


//parte 3 map

Array.prototype.map2 = function(callback){
    const newArray = []
    for(i=0; i<this.length;i++){
        newArray.push(callback(this[0],i,this))
    }
    return newArray
}

const paraObject1 = json =>JSON.parse(json)
resultado4=carrinho.map2(paraObject)
console.log(resultado4)
const apenasPreco1 = produto =>produto.preco
const resultado5 = carrinho.map2(paraObject1).map2(apenasPreco1)


console.log(resultado5)
