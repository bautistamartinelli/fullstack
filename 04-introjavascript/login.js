

let email = 'admin@gmail.com';
let password = '1234';

let emailUser = prompt('Introduce tu email: ')
let passwordUser = prompt('Introduce tu constraseña: ');


if (email == emailUser && password == passwordUser) {
    window.location = './index.html'; 
    //alert('Bienvenido!');
}
