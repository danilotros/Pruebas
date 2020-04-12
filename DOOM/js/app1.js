//Obtener un solo elemento
let elemento;

elemento=document.getElementById('hero');

console.log(elemento);
//Obtener un solo atributo
elemento=document.getElementById('hero').id;

console.log(elemento);

let encabezado;

encabezado=document.getElementById('encabezado').className;

console.log(encabezado);

encabezado=document.getElementById('encabezado').innerText;

console.log(encabezado);

//Modificar probiedades del estilo
encabezado=document.getElementById('encabezado');
encabezado.style.background='#333';
encabezado.style.color='#fff'

//Cambiar texto
encabezado.textContent="los mejores cursos";


