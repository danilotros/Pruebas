//En el caso del while el incremento se realiza fuera de los corchetes
let i=0;
while(i<10){
    console.log(`El numero es: ${i}`);
    i++;
}
//Implementacion con condicionales
while(i<10){
    if(i===5){
        console.log('Cinco');
        continue;
        i++;
    }
    console.log(`El numero es: ${i}`);
    i++;
}
//Arreglo
const musica=['BABY'];
while(i<musica.length){
    console.log(`Se esta reproducioendo la cancion ${musica[i]}`);
    i++;
}
//El do while realiza la operacion por lo menos una vez antes de revisar la condicion
const musica1=[];
do{
    console.log(`Se esta reproducioendo la cancion ${musica1[i]}`);
    i++;
}while(i<musica1.length);