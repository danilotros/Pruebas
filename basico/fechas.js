//Javascript Objeto llamado Date
/*Fecha actual*/ 
const diaHoy=new Date();
/*Fecha especifica Mes, Dia y año*/
let navidad2016=new Date('12-25-2016');
//Mes
let mes=diaHoy.getMonth();
//Dia
let dia=diaHoy.getDay();
//Año
let año=diaHoy.getFullYear();
//Minutos hora exacta
let minutos=diaHoy.getMinutes();
//Horas del dia de hoy para este ejemplo
let horas=diaHoy.getHours();
//Milisegundos desde 1970 hasta hoy
let mili=diaHoy.getTime();
//Milisegundos normal
let mili2=diaHoy.getMilliseconds();
//Modificar un valor en este caso año
let año2=diaHoy.setFullYear(2019);
