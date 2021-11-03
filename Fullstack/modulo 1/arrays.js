let nomes =  ['batata',"arroz","feijao","brocolis"];
console.log(nomes);

//push

nomes.push('laranja');
console.log(nomes);

//unshift coloca no começo da array

nomes.unshift('banana');
console.log(nomes);


//ellimina o primeiro elemento de uma array nao recebe parametro
nomes.shift();
console.log(nomes);

//index
console.log(nomes.indexOf('arroz'));


//last index of
console.log(nomes.lastIndexOf('banana'));

//join
console.log(nomes.join(" "));

let meusPais = {
    nome:"Brasil",
    Clima:"Tropical",
    anos:500,
    continente:"America do Sul",
    ligar: function(){
        console.log(this.nome +" esta na america latina")
    }

}

//acessando as chaves
console.log(meusPais)

console.log(meusPais.nome + " e seu ano é " + meusPais.anos)
meusPais.ligar()


function Carro (aMarca,Omodelo){
    this.marca = aMarca;
    this.modelo = Omodelo;

}

let gol = new Carro ("VW","GOLS")
console.log(gol)
