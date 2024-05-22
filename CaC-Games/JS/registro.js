
const nombreregistro = document.getElementById("name-registro");
const ape = document.getElementById("apellido");
const password = document.getElementById("pass-registro");

const emailregistro = document.getElementById("email-registro");

const telefonoregistro = document.getElementById("tel-registro");

const formularioregistro = document.getElementById("formulario-registro");

const parraforegistros = document.getElementById("warningsreg");

formularioregistro.addEventListener("submit", ereg => {
    ereg.preventDefault();
    let warningsregistro = "";
    let regexEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    let entrar = false;

    if (nombreregistro.value.length < 6) {
        warningsregistro += `El nombre no es válido <br>`;
        entrar = true;
    }

    if (ape.value.length < 6) {
        warningsregistro += `El apellido no es válido <br>`;
        entrar = true;
    }

    if (telefonoregistro.value.length < 8) {
        warningsregistro += `El teléfono no es válido <br>`;
        entrar = true;
    }

    if (!regexEmail.test(emailregistro.value)) {
        warningsregistro += `El email no es válido <br>`;
        entrar = true;
    }

    if (password.value.length < 8) {
        warningsregistro += `La contraseña no es válida <br>`;
        entrar = true;
    }

    if (entrar) {
        parraforegistros.innerHTML = warningsregistro;
    }
    else{
        parraforegistros.innerHTML = 'Registro éxitoso <br>';
        setTimeout(() => {
            location.reload();
        }, 2000); // 3000 milisegundos = 3 segundos
    }

});





