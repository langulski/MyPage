//novo recurso 2015

const { min } = require("moment")

const pessoa = {

    nome:'ana',
    idade:25,
    endereço:{
        logradouro:'rua abgrkkr',
        numero:1000

    }
}
//retirando variaveis 
const { nome, idade } = pessoa 
//pode-se utlizar em outros lugares
console.log(nome,idade)

//mudando o nome:

const { nome:n, idade:i}= pessoa
console.log(n,i)


const {sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome,bemHumorada)


const{endereço: { logradouro,numero,cep}} = pessoa
console.log(logradouro,numero,cep)


const [a] = [10]
console.log(a)
//atribuição de listas
const[n1,n3,n5,n6] = [10,7,9,8]
console.log(n1,n3,n5,n6)

const [,[, nota]]= [[,8,9],[9,6,8]]

console.log(nota)


//destructioning

function rand( [min=0,max=1000] ){
    if(min>max) [min,max] = [max,min]
    const valor = Math.random() * (max-min) +min
    return Math.floor(valor)

}

console.log(rand([50,40]))