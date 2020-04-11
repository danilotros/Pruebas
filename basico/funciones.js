//Function declaretion
function saludar() {
    console.log('Hola');
}
//llamar funcion
saludar();

//Pasar parametros
function nombre(nombre) {
    console.log(`Hola ${nombre}`)
}
nombre('Daniel');
//Multiples parametros
function suma(a,b) {
    console.log(a+b);
}
suma(5,4);

//Retorno de valores
function resta(a,b) {
    return a-b;
}
let resta=resta(9,2);
console.log(resta);

//funcion que permite ingresar una cadena
function saludar(nombre) {
    return `hola${nombre}`;
}
//Metodo para dar valor por default si no se ingresa dato
function saludando(nombre='Visitante') {
    return `hola ${nombre}`;
}
//function expression
const producto=function (a=6,b=7) {
    return a*b;
}
//se llama asi
producto(5,5);

//Multiples tipos de entrada
const llamar=function(nombre='visitante',edad=34,trabajo='Developer Master'){
  return `hola ${nombre}, tienes ${edad} y trabajas como ${trabajo} `;
}




//Funciones de declaracion y llamdo imediato IIFE
(function(){
    console.log('hola');
})();

//Pasar parametros funciones IIFE
(function(lenguaje='C++'){
    console.log(`Trabajando con ${lenguaje}`);
})('javascript');


//Metodos de propiedad
//Funciones dentro de un objeto
const musica={
    reproducir:function(){
        console.log('Resproducinedo Musica');
    },
    banda:function(banda='Metallica'){
       console.log(`La banda que escuchas${banda}`);
    }
};


musica.reproducir();
musica.banda('Rock');

//Metodos tambien pueden guardarse o crearse fuera del objeto
musica.tocar=function(cancion='TE QUIERO'){
console.log(`Esta escuchando ${cancion}`);
};