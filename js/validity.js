const play = document.getElementById('play');
const inputFooter = document.getElementById('inputFooter');
const burgerButton = document.getElementById('burger-btn');
const aside = document.getElementById('aside');
const closeButton = document.getElementById('closeButton');
const alertBox = document.getElementById('alertBox');
const username = document.getElementById('username');
const email = document.getElementById('email');
const dni = document.getElementById('dni');
const telefono = document.getElementById('telefono');
const password = document.getElementById('password');
const day = document.getElementById('day');
const year = document.getElementById('year');

function hideAlertBox() {
    alertBox.classList.add('hidden');
}

function validarFormulario(event) {
    event.preventDefault();

    let valid = true;
    let errorMessages = [];

    resetValidationIcons();

    if (username.value.length < 4 || username.value.length > 20) {
        showError(username, 'El nombre de usuario debe tener menos de 20 caracteres.');
        errorMessages.push('El nombre de usuario debe tener menos de 20 caracteres.');
        valid = false;
    } else {
        showSuccess(username);
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email.value) || email.value.endsWith('.')) {
        showError(email, 'El correo electrónico no es válido.');
        errorMessages.push('El correo electrónico no es válido.');
        valid = false;
    } else {
        showSuccess(email);
    }

    const dniPattern = /^\d{8}[A-Za-z]$/;
    if (!dniPattern.test(dni.value)) {
        showError(dni, 'El DNI debe tener 8 números y una letra.');
        errorMessages.push('El DNI debe tener 8 números y una letra.');
        valid = false;
    } else {
        showSuccess(dni);
    }

    const telefonoPattern = /^[6-7][0-9]{8}$/;
    if (!telefonoPattern.test(telefono.value)) {
        showError(telefono, 'El teléfono debe tener 9 dígitos y estar entre 600000000 y 799999999.');
        errorMessages.push('El teléfono debe tener 9 dígitos y estar entre 600000000 y 799999999.');
        valid = false;
    } else {
        showSuccess(telefono);
    }

    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordPattern.test(password.value)) {
        showError(password, 'La contraseña debe contener mayúsculas, minúsculas, números y símbolos.');
        errorMessages.push('La contraseña debe contener mayúsculas, minúsculas, números y símbolos.');
        valid = false;
    } else {
        showSuccess(password);
    }

    if (day.value < 1 || day.value > 31) {
        showError(day, 'El día debe ser un número entre 1 y 31.');
        errorMessages.push('El día debe ser un número entre 1 y 31.');
        valid = false;
    } else {
        showSuccess(day);
    }

    if (year.value > 2006) {
        showError(year, 'El año debe ser hasta 2006.');
        errorMessages.push('El año debe ser hasta 2006.');
        valid = false;
    } else {
        showSuccess(year);
    }

    if (valid) {
        const correctBox = document.getElementById('correctBox');
        const correctMessage = document.getElementById('correctMessage');
        
        correctMessage.textContent = 'Formulario enviado correctamente.';
        correctBox.classList.remove('hidden');
        correctBox.classList.add('block');
        
        const incorrectBox = document.getElementById('incorrectBox');
        incorrectBox.classList.add('hidden');
    
        username.defaultValue = username.value;
        email.defaultValue = email.value;
        dni.defaultValue = dni.value;
        telefono.defaultValue = telefono.value;
        password.defaultValue = password.value;
        day.defaultValue = day.value;
        year.defaultValue = year.value;
    } else {
        const incorrectBox = document.getElementById('incorrectBox');
        const incorrectMessage = document.getElementById('incorrectMessage');
        
        incorrectMessage.innerHTML = '';
    
        errorMessages.forEach(error => {
            const errorItem = document.createElement('p');
            errorItem.textContent = `- ${error}`;
            incorrectMessage.appendChild(errorItem);
        });
    
        incorrectBox.classList.remove('hidden'); 
        incorrectBox.classList.add('block');
    
        const correctBox = document.getElementById('correctBox');
        correctBox.classList.add('hidden');
    }

}

function showError(input) {
    const iconSuccess = input.parentElement.querySelector('.ri-check-line');
    const iconError = input.parentElement.querySelector('.ri-spam-2-line');
    if (iconError) iconError.classList.remove('hidden'); 
    if (iconSuccess) iconSuccess.classList.add('hidden');
}

function showSuccess(input) {
    const iconSuccess = input.parentElement.querySelector('.ri-check-line');
    const iconError = input.parentElement.querySelector('.ri-spam-2-line');
    if (iconSuccess) iconSuccess.classList.remove('hidden');
    if (iconError) iconError.classList.add('hidden');
}

function resetValidationIcons() {
    const allIcons = document.querySelectorAll('.ri-check-line, .ri-spam-2-line');
    allIcons.forEach(icon => {
        icon.classList.add('hidden');
    });
}

document.querySelector('button[type="submit"]').addEventListener('click', validarFormulario);
closeButton.addEventListener('click', hideAlertBox);