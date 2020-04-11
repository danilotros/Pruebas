
// Arreglo de numeros
const numeros=[13,45,67,89];
//Arreglo texto
const cadena=new Array('ere','puto');
//Arreglo mezclado
const mezcla=new Array('ene',12);   

//Conocer largo del arreglo
console.log(mezcla.length);

// Es arreglo
console.log(Array.isArray(mezcla));

//Acceder elemento por su indice
console.log(mezcla[1]);
//Agregar al arreglo ultima posicion
mezcla.push('Junio');
// Agregar al inicio
mezcla.unshift('puto');
//Encontrar elemento
console.log(mezcla.indexOf('Junio'));
//Eliminar al final
mezcla.pop();
//Eliminar al inicio
mezcla.shift();
//Quitar un rango
mezcla.splice(0,1);
//revertir
mezcla.reverse();
//Unir arreglo
console.log(numeros.concat(mezcla));

//Ordenar un arreglo
const frutas=['Platanos','Manzana'];
frutas.sort();
//Ordenar numeros
numeros.sort(function(x,y){
    return x-y;
}); //mayor a menor
