//Visibilidad que tiene una funcion
//Variables globales
var a='a';
let b='b';
const c='c';
//Scope de la funcion
function fuctionScope(){
 //Variables locales   
    var a='A';
    let b='B';
    const c='C';
    console.log('Funcion'+a,b,c);
}
fuctionScope();
if(true){
    //Variables detro de un bloque de codigo altera las variables globales si son de tio var
    var a='A';
    let b='B';
    const c='C';
    console.log('Funcion'+a,b,c);
}

console.log('Globales'+a,b,c);
