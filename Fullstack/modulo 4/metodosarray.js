const pilotos = ['vettel','alonso','raikkonen','Massa']

pilotos.pop() // massa querou o carro

console.log(pilotos)

pilotos.push('vertasppen')

console.log(pilotos)

pilotos.shift() // remove o primeiro da lista

console.log(pilotos)

pilotos.unshift('hamilton')
console.log(pilotos)

pilotos.splice(2,0,'Bottas','Massa')
console.log(pilotos)

pilotos.splice(3,1) // removendo a quarta posição
console.log(pilotos)


const algunsPilotos = pilotos.slice(2)

console.log(algunsPilotos)
const algunsPilotos1 = pilotos.slice(1,4)

console.log(algunsPilotos1)