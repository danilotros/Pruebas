//Estructura
for(let i=0;i<10;i++){
 console.log(`Numero${i}`);
}
//Comprobacion de un if
for(let i=0;i<10;i++){
    if(i%5==0){
    console.log(`Numero${i}`);
    }
}
//Comprobacion de un if usando continue
for(let i=0;i<10;i++){
    if(i%5==0){
    console.log('Divisible por 5');
    continue;
    }
    console.log(`Numero${i}`);
}
//Al comprobar un condicional rompe el ciclo for
for(let i=0;i<10;i++){
    if(i==5){
    console.log('Divisible por 5');
    break;
    }
    console.log(`Numero${i}`);
}
//Uso con un arreglo
const arregloProductos=['Camisa','Boleto','Guitarra','Disco'];
for(let i=0;i<arregloProductos.length;i++){
  console.log(`Tu producto ${arregloProductos} fue agregado`);
}