function AplicacaoFinanceira(capital_inicial,taxa_juros,tempo){

    juros = capital_inicial*taxa_juros*tempo
    montante = juros+capital_inicial

    // composto

    montante_composto  = capital_inicial*((1 + taxa_juros)**tempo)


    console.log(montante)
    console.log(montante_composto)
}


AplicacaoFinanceira(1000,0.11,24)