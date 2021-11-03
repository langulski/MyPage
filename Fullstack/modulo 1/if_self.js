/*const imprimirResultado = function(nota) {
if(nota>=7){
    console.log('aprovado')
} else {
    console.log('reprovado')
        }

} 

imprimirResultado(10)
imprimirResultado(4)
imprimirResultado('eeefef') // cuidado 
*/

Number.prototype.entre = function (inicio,fim) {
    return this >= inicio && this <=fim

}
const ImprimiResultado = function (nota) {
    if (nota.entre(9,10)) {
        console.log('quadro de horna')
    }else if (nota.entre (7, 8.99)){
        console.log('aprovado')
    }else if (nota.entre(4,6.99)){
        console.log('recuperação')
    }else if (nota.entre (0, 3.99)){
        console.log('reprovado')
    }else {
        console.log('nota invalida')
    }
    console.log('fim')
} 

ImprimiResultado(10)
ImprimiResultado(8.9)
ImprimiResultado(6.55)
ImprimiResultado(3)
ImprimiResultado('23t13t')
