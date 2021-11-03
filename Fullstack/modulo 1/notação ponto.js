//definir um produto interno de uma função

console.log(Math.ceil(6.1))


const obj1 = {}
obj1.nome = 'Bola'
//ob1['nome'] = 'bola2' mesma coisa
console.log(obj1.nome)


function Obj(nome) {
    this.nome = nome
    //visivel, publico usando this ou seja escopo global
}
const obj2 = new Obj('Cadeira')

const obj3 = new Obj('mesa')
console.log(obj2.nome)
console.log(obj3.nome)



class solution {
    publick
}