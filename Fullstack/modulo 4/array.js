console.log(typeof Array, typeof new Array, typeof [])


let aprovados = new Array('Bia','Carlos','Ana')

console.log(aprovados)

aprovados= ['Bia','Carlos','Ana']

console.log(aprovados[0])

console.log(aprovados[1])
console.log(aprovados[3])

aprovados[3] = 'Paulo'

// adicionar novo elemento no final
aprovados.push('Abia')

console.log(aprovados.length)
aprovados[9] = 'jauao'

console.log(aprovados.length)
console.log(aprovados[8]===undefined)

console.log(aprovados)
aprovados.sort()
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia','Carlos','Ana']
aprovados.splice(1,1,'element1','elemento2')
console.log(aprovados)
