//crar objetos
const persona={
    nombre:'Miguel',
    apellido:'Perez',
    profesion:'Ingenierio',
    email:'correo@correo.com',
    edad:20,
    musica:['Trance','Perreo'],
    hogar:{
        ciudad:'Bogota'
    },
    fechaCumple:function () {
        return new Date().getFullYear-20;
    }
};
//para aceder a los atributos de un onjeto 
console.log(persona.apellido);
console.log(persona.hogar.ciudad);
console.log(persona.fechaCumple());




//Arreglos de personas
const autos=[{modelo:'Mustang',motor:8},{modelo:'Camaro',motor:9}];
for(let i=0;autos.length;i++){
    console.log(autos[i].modelo+"tienen un motor de: "+autos[i].motor);

    //Imprimir dentro del html
    console.log(`${autos[i].modelo} ${autos[i].motor}`)
}

//Modificar valores del arreglo de objetos
autos[0].modelo='Audi';