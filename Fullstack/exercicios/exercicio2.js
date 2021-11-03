function ladoTriangulo (a,b,c) 
{
    if (a==b && b==c){
        console.log("o triangulo é equilatero")
    }
    else if (a==b || b==c || a==c){
        console.log("o triangulo é isoceles")
    }
    else {
        console.log("o triangulo é escaleno")
    }



}


ladoTriangulo(1,2,3)