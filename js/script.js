let nameError = document.getElementById('name-error');
let phoneError = document.getElementById('phone-error');
let emailError = document.getElementById('email-error');
let messageError = document.getElementById('message-error');
let submitError = document.getElementById('subit-error');

function validateName() {
    let name =document.getElementById('contact-name').value;
    
    if (name.length == 0) {
        nameError.innerHTML = 'Nome é obrigatorio';
        return false;
    }
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = 'Escreva nome completo';
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validatePhone(){
    let phone =document.getElementById('contact-phone').value;

    if (phone.length == 0) {
        phoneError.innerHTML = 'Telefone é obrigatorio';
        return false;
    }
    if (phone.length !== 10) {
        phoneError.innerHTML = '10 dígitos';
         return false;
    }
    if (!phone.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = 'Apenas numeros por favor';
        return false;
    }
    phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateEmail(){
    let email =document.getElementById('contact-email').value;

    if (email.length == 0) {
        emailError.innerHTML = 'Email é obrigatorio'
        return false;
    }
    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = 'Email invalido'
        return false;
    }
    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>'
        return true;
}

function validateMessage(){
    let message = document.getElementById('contact-message').value;
    let required = 30;
    let left = required - message.length;

    if (left > 0){
        messageError.innerHTML = 'coloque mais ' + left + ' caracteres';
        return false;
    }

    messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>'
    return true;
}

function validateForm() {
    if (!validateName() || !validatePhone() || !validateEmail() || !validateMessage()) {
        submitError.style.display = 'block';
        submitError.innerHTML = 'Por favor corrija seu erro para enviar';
        setTimeout(function(){submitError.style.display = 'none';},3000); 
            return false        
    }
}