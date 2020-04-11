const edad=18;
//vertifica si es mayor de edad dada la condicion
if(edad>18){
  console.log('Si puedes entrar al sitio');
}else{
 console.log('Sal pinche chamaco');
}
//Comprueban si el valor cumple la condicion
//En este caso se restinge para que solo los que tienen 18 puedan entrar
if(edad==18){
    console.log('Si puedes entrar al sitio');
  }else{
   console.log('Sal pinche chamaco');
  }
//En este caso se restringe para que no entre los de 18
if(edad!=18){
    console.log('Si puedes entrar al sitio');
  }else{
   console.log('Sal pinche chamaco');
  }
//Comprobar si la varieble exite
const puntaje=1000;
if(puntaje){
    console.log(`El puntaje fue de ${puntaje}`);
} else{
    console.log(`No hay puntaje`);
} 
//Comprobacion con typeof
if( typeof puntaje!='undefined'){
    console.log(`El puntaje fue de ${puntaje}`);
} else{
    console.log(`No hay puntaje`);
} 

//Comprobar dos valores
let efectivo=500;
let totalcarrito=300;
if(efectivo>totalcarrito){
   console.log('Pago Correcto');
} else{
  console.log('Fondos insuficiente');
}