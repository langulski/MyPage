let stringPontuacoes = "10,20,30,10,4,2,10,24,25,27,40"


function avaliacaoPontuacao (stringPontuacoes){
    let pontuacoes = stringPontuacoes.split(",")
    let recorders = 0
    let pior_jogo = 0 
    let melhorpontuacao = pontuacoes[0]
    let menorpontuacao = pontuacoes[0]

    for (let i=0 ; i < pontuacoes.length; i++) {
        if (pontuacoes[i] > melhorpontuacao ) {
            melhorpontuacao = pontuacoes[i]
            recorders++
        }
        else if (pontuacoes[i] < melhorpontuacao){
            menorpontuacao = pontuacoes[i]
            pior_jogo = i+1
        }
    }
    return [recorders,pior_jogo]

}


console.log(avaliacaoPontuacao(stringPontuacoes))