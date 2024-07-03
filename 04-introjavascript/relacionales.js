

//operadores racionales en javascript
// > mayor que
let uno = 150;
let dos = 500;

let mayor = uno > dos;

console.log('El numero ' + uno + ' es mayor que ' + dos + ': ' + mayor);

let menor = uno < dos;

console.log('El numero ' + uno + ' es menor que ' + dos + ': ' + menor);

let igual = uno = dos;

console.log('El numero ' + uno + ' es igual que ' + dos + ': ' + igual);

let distinto = uno !== dos;

console.log('El numero ' + uno + ' es distinto que ' + dos + ': ' + distinto);

let mayorIgual = uno >= dos;

console.log('El numero ' + uno + ' es mayor o igual que ' + dos + ': ' + mayorIgual);

let menorIgual = uno <= dos;

console.log('El numero ' + uno + ' es menor o igual que ' + dos + ': ' + menorIgual);

//Condicionales
let octavos = true;
if (octavos) {
    console.log('El partido de octavos de final se juega el 4 de julio');
}

console.log('======================');

let edad = 18;
let inscripto = true;
let argentino = true;

if (edad >= 18) {
    if (argentino) {
        if (inscripto) {
            console.log('1. Puedes votar');
        } else {
            console.log('2. No puedes votar');
        }
        }
        }


        //operadores logicos (and) (or) (not)

        
        console.log('=========================');
        
        let email = 'pepe@gmail.com';
        let password = '1234';
        
        if(email == 'pepe@gmail.com' && password == '1234')
            {console.log('Bienvenido a la plataforma');  

            } 
            