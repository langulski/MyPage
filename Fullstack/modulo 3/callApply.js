function getPreco ( imposto=0, moeda="R$"){
return `${moeda} ${this.preco * (1 -this.desc) * (1 + imposto)}`

}

const produto = {
nome: "Notebook",
preco:4999,
desc:0.15,
getPreco

}

global.preco = 20
global.desc = 0.1

console.log(getPreco())
console.log(produto.getPreco())


const carro ={
    nome:"gol",
    preco:20000,
    desc:0.30,
    getPreco


}
console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))
console.log(carro)
console.log(getPreco.apply(carro,[0.18,"$"]))