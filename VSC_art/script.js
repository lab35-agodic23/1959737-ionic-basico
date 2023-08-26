const inputUser = document.getElementById('user');
const inputPassword = document.getElementById('password');

const buttonLogin = document.getElementById('login');
const buttonRegister = document.getElementById('registrar');

const messageStatus = document.getElementById('mensaje');
const bold = document.getElementById('bold');


function login(){
    messageStatus.textContent='';
    bold.textContent='';
    if(inputUser.value != '' || inputPassword.value!=''){
        messageStatus.textContent = 'Login correcto '; 
        bold.textContent=inputUser.value;
        inputPassword.value = '';
    }

}
function register(){
    messageStatus.textContent = '';
    bold.textContent='';
    if(inputUser.value != '' || inputPassword.value!=''){
        messageStatus.textContent = 'Registro con exito ';
        bold.textContent=inputUser.value;
        inputPassword.value = '';
    }
}
buttonLogin.addEventListener('click', login);
buttonRegister.addEventListener('click',register);