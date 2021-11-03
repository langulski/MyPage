const notas= [7.7, 6.5, 9.8, 4.3, 10, 3.5]

//sem callback

let notasBaixas=[]
for(i in notas){
    if (notas[i]< 7) {
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

//com callback

notasBaixas2 = notas.filter(function(nota){
    return nota < 7
})
console.log(notasBaixas2)

const notasBaixas3 = notas.filter(nota=> nota<7)
console.log(notasBaixas3)
