let age =14;
if(age>=18){
    console.log('vous pouvez entre')
}
else{
    console.log('sorte,vous etes encore minieur')
}


var x=20;
if(x  %2 ==1)
{
    console.log ('le nombre est en pair')

}
else{
    console/log('le nombre est en impair')
}

let x 17;
if(x/x && x/1) {
    console.log('le nombre est premier')
} else{
    console.log('le nombre n est pas le premier')
}


let b=true
let resultat =b &&(1/0)
console.log(resultat)

let b2= false
let result2 =b2 &&(1/0)
    console.log(result2)

let y =null
if(y){
    console.log('la valeur de y existe')
}else{
    console.log('le valeur de y n exite pas')
}
let a =10;
let b =20;
if (a>b ){
    console.log('le max est a')
    }else{
        console.log('le max est b')
    }
let a =10;
let b=20;
let c=30
if(a>b){
    if(b/c)
     console.log('a est max');
}   
//1.determiner le mmax entre let a=19; let b=20; let c=30


let a = prompt("donner la valeur de a");
let b = prompt("donner la valeur de b");
let c = prompt("donner la valeur c")

if(a>b && b < c) {
    console.log("a est max")
    if (b>c && c < a){
        console.log("b est max");
    
}else{
    if(c>a && a<b){
        console.log("c est max")
    }
}
}