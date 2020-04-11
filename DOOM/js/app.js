//Asignacion de la informacion de la pagina
let elemento;
elemento=document;
console.log(elemento);
//Nos regresa informacion en forma de arreglo
elemento=document.all;
console.log(elemento);
//Obtener un elemento de la pagina or indice
elemento=document.all[10];
console.log(elemento);
//Dividir por secciones
elemento=document.head;
console.log(elemento);

elemento=document.body;
console.log(elemento);

elemento=document.characterSet;
console.log(elemento);

elemento=document.forms;
console.log(elemento);

elemento=document.domain;
console.log(elemento);

elemento=document.URL;
console.log(elemento);

//Devolver informacion de un elemento form
elemento=document.forms[0].id;
console.log(elemento);

elemento=document.forms[0].classList;
console.log(elemento);

elemento=document.forms[0].className;
console.log(elemento);

//Retorna informacion de una imagen
elemento=document.images;
console.log(elemento);

elemento=document.images[0].src;
console.log(elemento);

elemento=document.images[0].getAttribute('src');
console.log(elemento);

//Retorna informacion de script
elemento=document.scripts;
console.log(elemento);

//Ejercicio converitir a arreglo un elemento del DOOM
let imagenes=document.images;
let imagenesArr=Array.from(imagenes);
imagenesArr.forEach(function(imagen){
console.log(imagen);
});
