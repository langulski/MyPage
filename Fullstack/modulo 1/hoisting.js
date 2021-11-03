console.log('a=',a)
var a =2
console.log('a=',a)

//o JS nao para o programa se a variavel nao for declarada antes, ela
//ela continua ate q apareça a variavel

//par nome/valor

const saudacao = 'opa'

function exec() {
const saudacao = 'Falaa' //contexto lexico
    return saudacao

}

//objetos sao grupos aninhados de pares nome/valor

const cliente = {
    nome:'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro:'Rua Muito',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)