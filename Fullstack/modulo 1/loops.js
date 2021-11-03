for (var i=0; i<10; i++){
    console.log(i)
}
console.log('i=',i)
// var variavel global

for (let i=0; i<10; i++){
    console.log(i)
}
console.log('i=',i)

// let variavel interna 

var funcs = [];
for (let i =  0; i<10; i++){
    funcs.push(function(){
        console.log(i)
    })

}
funcs[2]()
funcs[8]()