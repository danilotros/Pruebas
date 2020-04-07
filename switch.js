//Estrutura de javascript switch
const metodopago='efectivo';
switch(metodopago){
    case 'efectivo':
        console.log(`El usuario pago on ${metodopago}`);            
        break;
    case 'cheque':
        console.log(`El usuario pago on ${metodopago}`);  
        break;
    case 'targeta':
        console.log(`El usuario pago on ${metodopago}`);  
        break;   
    //Cuando un caso no cumple ninguna de las condiciones anteriores    
    default:
          console.log('Metodo de pago no soportado');  
          break;      
        }


let mes;

switch(new Date().getMonth()){
    case 0:
        mes='ENERO';
        break;
    case 1:
        mes='FEBRERO';
        break;
    case 2:
        mes='MARZO';
        break;
    case 3:
        mes='ABRIL';
        break;
    case 4:
        mes='MAYO';
        break;
    case 5:
        mes='JUNIO';
        break;
    case 6:
        mes='JULIO';
        break;
    case 7:
        mes='AGOSTO';
        break;
    case 8:
        mes='SEPTIEMBRE';
        break;
    case 9:
        mes='OCTUBRE';
        break;
    case 10:
        mes='NOVIEMBRE';
        break;
    case 11:
        mes='DICIEMBRE';
        break;
    default:
        console.log('No es un mes valido');
        break;
}
console.log(`Estamos en el mes: ${mes}`);
