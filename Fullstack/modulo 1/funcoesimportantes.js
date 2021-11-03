const Pessoa = {
    nome:'lucas',
    idade:24,
    peso:509
}

console.log(Object.keys(Pessoa))
console.log(Object.values(Pessoa))
console.log(Object.entries(Pessoa))


Object.entries(Pessoa).forEach(([chave,valor])=> {console.log(`${chave}:${valor}`)})

Object.defineProperty(Pessoa,'DataNascimento', {
    enumerable: true,
    writable:false,
    value:'10/12/2012'

})

Pessoa.DataNascimento = '01/01/2016'
console.log(Pessoa.DataNascimento)
console.log(Object.keys(Pessoa))

//objec.assign

const dest = {a:1}
const o1 = {b:2}
const o2 = {c:3, a:4}
const obj = Object.assign (dest,o1,o2)

console.log(obj)

Object.freeze(obj)
obj.c =1234
console.log(obj)

