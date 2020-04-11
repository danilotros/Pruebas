//Ejecutar algo que puede dañar el comportamiento del programa
//Se usa try catch

//Funcion que no existe para este caso
//Finally no le importa si hay o no error ejecuta la operacion igualmente
try{
    algo();
}catch(error){
    console.log(error);
}finally{
    console.log('No le importa, ejecuta de todos mods');
}; 

function obtenerCliente(){
   console.log('Descargando.....');
   setTimeout(function(){
       console.log('Completo');
   },3000);
}