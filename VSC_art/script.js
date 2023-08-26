const inputUser = document.getElementById('user');
const inputPassword = document.getElementById('password');

const buttonLogin = document.getElementById('login');
const buttonRegister = document.getElementById('registrar');

const messageStatus = document.getElementById('mensaje');
const bold = document.getElementById('bold');

let users = [];
class user{
    constructor(name, password){
        this.name=name;
        this.password=password;
    }
}
function login(){
    messageStatus.textContent='';
    bold.textContent='';
    if(inputUser.value != '' || inputPassword.value!=''){
        for(let i = 0; i<users.length;i++){
            if(users[i].name==inputUser.value &&users[i].password==inputPassword.value){
                messageStatus.textContent = 'Login correcto '; 
                bold.textContent=inputUser.value;
                inputPassword.value = '';
                return
            }
            
        }
        messageStatus.textContent = "login incorrecto";
        
        
    }

}
function register(){
    messageStatus.textContent = '';
    bold.textContent='';
    if(inputUser.value != '' || inputPassword.value!=''){
        newUser = new user(inputUser.value,inputPassword.value);
        users.push(newUser);
        messageStatus.textContent = 'Registro con exito ';
        bold.textContent=inputUser.value;
        inputPassword.value = '';
    }
    else{
        messageStatus.textContent ='faltan campos por llenar';
    }
}
buttonLogin.addEventListener('click', login);
buttonRegister.addEventListener('click',register);