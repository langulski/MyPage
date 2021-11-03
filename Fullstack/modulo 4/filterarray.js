const produtos = [
{nome:'Notebook',preco:2499,fragil:true},
{nome:'Ipad',preco:5000,fragil:true},
{nome:'copo virdro',preco:36,fragil:true},
{nome:'copo plastico',preco:4,fragil:false},
]

console.log(produtos.filter(function(p){
    return p.preco >210



}))

console.log(produtos.filter(function(p){
    return false



}))
const caro = produto => produto.preco >=500
const fragil = produto => produto.fragil
console.log(produtos.filter(caro).filter(fragil))


Array.prototype.filter2 = function(callback){
    const newArray = []
    for (let i=0; i<this.length;i++ ){
        if(callback(this[i],i,this)){
            newArray.push(this[i])
        }
    }
    return newArray
}
const caro1 = produto => produto.preco >=500
const fragil1 = produto => produto.fragil
console.log(produtos.filter2(caro1).filter2(fragil1))