const nombre = document.getElementById("name");
const email = document.getElementById("email");
const telefono = document.getElementById("tel");
const formulario = document.getElementById("formulario");
const parrafo = document.getElementById("warnings");

formulario.addEventListener("submit", e => {
    e.preventDefault();
    let warnings = "";
    let regexEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    let entrar = false;

    if (nombre.value.length < 6) {
        warnings += `El nombre no es válido <br>`;
        entrar = true;
    }
    
    if (!regexEmail.test(email.value)) {
        warnings += `El email no es válido <br>`;
        entrar = true;
    }
    
    if (telefono.value.length < 8) {
        warnings += `El teléfono no es válido <br>`;
        entrar = true;
    }

    if (entrar) {
        parrafo.innerHTML = warnings;
    }
});
