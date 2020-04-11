const hora=20;
if(hora<=12){
    console.log("BUENOS DIAS!");
}
//Si no se cumple verifica esta condicion y has esto si se cumple esa condicion
else if(hora>12 && hora<=18){
    console.log("BUENAS TARDES!");
}else{
    console.log("BUENAS NOCHES!");
}
//AGREGAR CONDICIONES PARA RESTRINGIR VALORES
if(hora>0&&hora<=12){
    console.log("BUENOS DIAS!");
}
//Si no se cumple verifica esta condicion y has esto si se cumple esa condicion
else if(hora>12 && hora<=18){
    console.log("BUENAS TARDES!");
}else if(hora>18 && hora<=24){
    console.log("BUENAS NOCHES!");
}else{
    console.log("Hora no valida");
}


//operador || condicion o otra
let efectivo=300,
    credito=300,
    totalCarrito=500;
//Distintas condiciones pero hacen lo mismo se pueden + por un OR
if(totalCarrito<efectivo || totalCarrito<credito){
    console.log('Puedo pagar');
}else{
    console.log('No presupuesto');
}


//Tres condiciones de control en un if
let efectivo=300,
    credito=300,
    totalCarrito=500,
    disponible=efectivo+credito;
if(totalCarrito<efectivo || totalCarrito<credito || totalCarrito<disponible){
    console.log('Puedo pagar');
}else{
    console.log('No puedo pagar')
}

//Ternario o terna 
/* llaves if => ? =>se cumple condicion, no se cumple else  llaves=>: no se cumple haga*/
const logueado=true;
console.log( logueado===true ? 'Si se logueo':'No se logue');