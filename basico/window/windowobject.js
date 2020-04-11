//Prompt
const nombre =prompt();
console.log(`${nombre}`);
//confirm
if(confirm('Eliminar?')){
    console.log('Eliminado');
}else{
    console.log('No se borro');
}
//Obtener datos del navegador
let altura,anchura;
altura=window.outerHeight;
anchura=window.outerWidth;
console.log(`La altura es ${altura}`);
console.log(`La anchura es ${anchura}`);

//Obtener datos ventana
altura=window.innerHeight;
anchura=window.innerWidth;
console.log(`La altura  ventana es ${altura}`);
console.log(`La anchura ventana es ${anchura}`);

//ubicacion
let ubicacion;
ubicacion=window.location;
console.log(ubicacion);
//Historial del navegador
window.history.go(-4); //Retroceder en el historia
//Navigator
ubicacion=window.navigator;
console.log(ubicacion);