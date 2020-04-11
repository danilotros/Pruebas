//Recorrer un arreglo con foreach
const pendientes=['Tarea','Comer','Proyecto','Aprende'];
pendientes.forEach(function(pendiente){
console.log(`${pendiente}`);
});
//Recorrer un arreglo con Map
const carrito=[
    {id:1,producto:'libro'},
    {id:2,producto:'camisa'},
    {id:3,producto:'guitarra'},
    {id:4,producto:'disco'},
    
];
const nombreProducto=carrito.map(function(carrito){
    return carrito.producto;
});

//Imprimir con el for un objeto
const automovil={
    modelo:'Camaro',
    motor:6.1,
    anio:1969,
    marca:'chevrolet'
};
for(let auto in automovil){
    console.log(`${auto}:${automovil[auto]}`);
}