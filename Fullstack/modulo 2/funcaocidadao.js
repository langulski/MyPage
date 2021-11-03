//funcao em js eh first class object
//high-order function

function fun1() {

}

//armazenar 


const fun2 = function () {}

const array = [function(a,b){return a+b },fun1, fun2]

console.log(array[0](2,3))

//passando como objeto
const obj = {}

obj.falar = function () {return 'opa'}

console.log(obj.falar())
//passando funcao como parametro
function run(fun){
    fun()
}

run(function() {console.log('Executando...')})

//uma funcao pode retornar ou conter uma funcao

function soma(a,b){
    return function(c){
        console.log(a+b+c)
    }
}
soma(2,3)(1)
const cincoMais = soma(3,4)
cincoMais(4)