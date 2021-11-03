let dobro = function(a){
    return 2*a
}

dobro = (a) =>{
return 2*a
}

dobro = a => 2*a
console.log(dobro(Math.PI))

let ola = function() {
    return 'ola'
}

ola = () => 'ola'
ola = _ => 'ola'
console.log(ola())



// parte dois

function Pessoa(){
    this.idade=0
    setInterval(() => {
        this.idade++
        console.log(this.idade)
    },1000)
}

new Pessoa 


//this e arrow parte 3

let comparaComThis = function(param){
    console.log(this==param)
}

comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)


//arrow no arrow nao apontara no global

let comparaComThisArrow = param => console.log(this===param)

comparaComThisArrow(global)
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)