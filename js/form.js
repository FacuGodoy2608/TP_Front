// CAPTURA DE INPUT DEL DOM
const formulario = document.getElementById('formulario');
const botonRegistro = document.getElementById('botonRegistro');

formulario.addEventListener('submit', evento =>{
    evento.preventDefault();
    
    if (validarFormulario()){
        formulario.submit();
    }
})

// -------------------- VALIDAR LOS CAMPOR DEL FORMULARIO ---------------------

function validarFormulario(){
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const email = document.getElementById('email').value;

    if(nombre === ''){
        mostrarError('nombre', 'Ingresa tu nombre.')
        return false;
    }
}

// ------------------------------------------

function mostrarError(campo, mensaje){
    const campoError = document.getElementById(`${campo}-error`);
    campoError.innerText = mensaje;
}

/*function validarEmail (email){
    const expresionRegular = //
}*/