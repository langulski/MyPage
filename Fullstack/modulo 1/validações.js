let dia = "terça";

let resultado = dia =="domingo" ?"vou a praia":"Fico em casa";

console.log(resultado);

switch(dia) {
    case "segunda":
        console.log("vou tomar cafe");
        break
    case "terça":
        console.log("cinema");
        break
    default:
        console.log("farei nada");
        break

}

for(let i=0; i <=4 ; i++){
    console.log(i)
}

//spread
let frutasum = ['maça','limao','banana'];

let frutasdois = ['pera','uva','mamao'];

let listaCompleta = [...frutasum,...frutasdois]

console.log(listaCompleta)
