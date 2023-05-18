//login//
const inputs = document.querySelectorAll('.input');
const button = document.querySelector('.login_button');

const inputs1 = document.querySelectorAll('.input1');
const button1 = document.querySelector('.criar_button');


const handleFocus = ({target})=>{
    const span = target.previousElementSibling;
    span.classList.add('span-active');
}

const handleFocusOut = ({target})=>{
    if(target.value ==''){
    const span = target.previousElementSibling;
    span.classList.remove('span-active');
    }
}

const handleChange = () =>{
    const [username,passord] = inputs;

    if (username.value && passord.value.length>=5){
        button.removeAttribute('disabled');
    }else{
        button.setAttribute('disabled','')
    }
}

inputs.forEach((input)=> input.addEventListener('focus',handleFocus));
inputs.forEach((input)=> input.addEventListener('focusout',handleFocusOut));
inputs.forEach((input)=> input.addEventListener('input',handleChange));


/////////////////////////// criar conta /////////////////////////////////
const handleFocus1 = ({target})=>{
    const span = target.previousElementSibling;
    span.classList.add('span-active');
}

const handleFocusOut1 = ({target})=>{
    if(target.value ==''){
    const span = target.previousElementSibling;
    span.classList.remove('span-active');
    }
}

const handleChange1 = () =>{
    const [username,passord,passord1] = inputs1;

    if (username.value && passord.value.length>=5 && passord.value==passord1.value){
        button1.removeAttribute('disabled');
    }else{
        button1.setAttribute('disabled','')
        }
    }

inputs1.forEach((input1)=> input1.addEventListener('focus',handleFocus1));
inputs1.forEach((input1)=> input1.addEventListener('focusout',handleFocusOut1));
inputs1.forEach((input1)=> input1.addEventListener('input',handleChange1));


//confirmar a criação de conta//
let username = document.querySelector('#user');
let labelUser = document.querySelector('#labelUser');
let validUser = false;

let senha = document.querySelector('#senha');
let labelSenha = document.querySelector("#labelSenha");
let validSenha = false;

let confirmarSenha = document.querySelector("#cofirmarSenha");
let labelConfirmarSenha = document.querySelector("#labelConfirmarSenha");
let validConfirmarSenha = false;

let message = document.querySelector('.message');



username.addEventListener('keyup', ()=>{
    if(username.value.length <= 2 && username.value.length > 0){
        labelUser.setAttribute('style', 'color:red');
        labelUser.innerHTML='nome do usuário *Insira no minimo 3 caracteres';
        validUser = false;
    }else if(username.value.length >2){
        labelUser.setAttribute('style', 'color:green');
        labelUser.innerHTML='nome do usuário';
        validUser = true;
    }else{
        labelUser.removeAttribute('style');
        labelUser.innerHTML='nome do usuário';
        validUser = false;
    }
})

senha.addEventListener('keyup',()=>{
    if(senha.value.length <= 4 && senha.value.length > 0){
        labelSenha.setAttribute('style', 'color:red');
        labelSenha.innerHTML='senha *Insira no minimo 5 caracteres'
        validSenha = false;
    }else if(senha.value.length >4){
        labelSenha.setAttribute('style', 'color:green');
        labelSenha.innerHTML='senha';
        validSenha = true;
    }else{
        labelSenha.removeAttribute('style');
        labelSenha.innerHTML='senha';
        validSenha = false; 
    }
})

confirmarSenha.addEventListener('keyup',()=>{
    if(confirmarSenha.value != senha.value){
        labelConfirmarSenha.setAttribute('style', 'color:red');
        labelConfirmarSenha.innerHTML='confirmar senha *As senhas diferentes'
        validConfirmarSenha = false;
    }else{
        labelConfirmarSenha.setAttribute('style', 'color:green');
        labelConfirmarSenha.innerHTML='confirmar senha'
        validConfirmarSenha = true;
        
    }
})
    

function criar(){
    //validar password e username///
    if(validUser && validSenha && validConfirmarSenha){
        
        //criar lista JSON///
        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]');

        valor= listaUser.some((item)=>{
            if(username.value == item.Username){
                return true
            }else{
                return false
            }
            })

        if(valor==false){
        listaUser.push(
        {
        Username: username.value,
        Password: senha.value
        }
        )
        localStorage.setItem('listaUser',JSON.stringify(listaUser))

        message.setAttribute('style','display:block');
        message.innerHTML=('Criando conta ...');  
        setTimeout(()=>{
            window.location.href='index.html'},3000)
        }else{
            alert('Username já existe!!')
        }
            
    }else{
        alert('Algo não foi inserido corretamente!!');
    }
}

//autenticar login//

function login(){
    let username1 = document.querySelector('#user1')
    let labeluser1 = document.querySelector('#labeluser1')

    let senha1 = document.querySelector('#senha1')
    let labelsenha1 = document.querySelector('#labelsenha1')

    let lista=[]
    let msgErro = document.querySelector('#msgErro')

    let userValid ={
        Username1: '',
        Password1: ''
    }

    lista= JSON.parse(localStorage.getItem('listaUser'))

    lista.forEach((item)=>{
        if(username1.value == item.Username && senha1.value == item.Password){
            userValid={
                Username1: item.Username,
                Password1: item.Password
            }

        }
    })
    if(username1.value == userValid.Username1 && senha1.value == userValid.Password1){
        window.location.href='./profile.html'
    }else{
        labelsenha1.setAttribute('style', 'color:red')
        labeluser1.setAttribute('style', 'color:red')
        msgErro.setAttribute('style','display: block')
        msgErro.innerHTML="Usuário ou senha incorretos"
        username1.focus()
    }

}