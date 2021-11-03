function Decimais (valorDecimal) {
    valorEmReais = `R$ ${valorDecimal.toFixed(2).toString().replace('.',',')}`
    console.log(valorEmReais)
}


Decimais(0.242424222424)