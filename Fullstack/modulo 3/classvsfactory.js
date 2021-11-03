class Pessoa {

    constructor(nome){
        this.nome = nome

    }
    falar(){
    console.log(`meu nome é ${this.nome}`)
    }
}


const p1 = new Pessoa("Joao")
p1.falar()


const criarPessoa = nome =>{
    return{
        falar: ()=>console.log(`meu nome é ${nome}`)
    }
}
const p2 = criarPessoa("joaozinho")
p2.falar()

//construtora

function Person(nome) {
    this.nome = nome
        this.falar = function(){

    console.log(`meu nome é ${this.nome}`)
    }
}
const p3 = new Person("macaquinho")
p3.falar()