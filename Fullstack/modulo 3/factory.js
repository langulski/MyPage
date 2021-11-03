function criarProduto(nome,preco) {
    return{
    nome,
    preco,
    desconto: 0.1
    }
}

console.log(criarProduto('notebook',3000))
console.log(criarProduto('iphone',6000))