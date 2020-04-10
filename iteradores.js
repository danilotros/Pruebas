const ciudades=['Londres','New york','Madrid'];
const ordenes =new Set(123,231,131,102); /* Coleccion de valores que se iteran en 
orden de inserccion*/
const datos=new Map();
datos.set('nombre','Juan');
datos.set('Profesion','Desarrallodores web');

//Entries iterador para el arreglo ==>Muestra un arreglo 

for(let entrada of ciudades.entries()){
    console.log(entrada);
};
//Entries para el Set
for(let entradas of ordenes.entries()){
    console.log(entradas);
};
//Entries para el MAP
for(let entrada of datos.entries()){
    console.log(entrada);
};
//Values iterador arreglo ==>Muestra los valores
for(let entrada of ciudades){
    console.log(entrada);
};
//Values iterador para el Set
for(let entradas of ordenes.values()){
    console.log(entradas);
};
//Values iterador para el Map
for(let entrada of datos.values()){
    console.log(entrada);
};

//Keys iterador arreglo ==>Nos regresa las llaves
for(let entrada of ciudades.keys()){
    console.log(entrada);
};
//Keys iterador para el Set
for(let entradas of ordenes.keys()){
    console.log(entradas);
};
//Keys iterador para el Map
for(let entrada of datos.keys()){
    console.log(entrada);
};

//default devuelve valores except para map que es lo mismo que el entries


for(let entrada of ciudades){
    console.log(entrada);
};

for(let entradas of ordenes){
    console.log(entradas);
};

for(let entrada of datos){
    console.log(entrada);
};
//Iteradores para String
let mensaje='Aprendiendo Javascript';
for(let letra of mensaje){
    console.log(letra);
}
//Iterador de enlaces en el HTML
const enlaces=document.getElementsByTagName('a');
for(let enlace of enlaces){
    console.log(enlace);
};