// MENÚ RESPONSIVE

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("active");
});

// CERRAR MENÚ AL SELECCIONAR UNA OPCIÓN

const navLinks = document.querySelectorAll("#nav-menu a");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navMenu.classList.remove("active");
    });
});


// FORMULARIO DE CONTACTO

const contactForm = document.getElementById("contact-form");

const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const asunto = document.getElementById("asunto");
const mensaje = document.getElementById("mensaje");

const nombreError = document.getElementById("nombre-error");
const emailError = document.getElementById("email-error");
const asuntoError = document.getElementById("asunto-error");
const mensajeError = document.getElementById("mensaje-error");

const formMessage = document.getElementById("form-message");


// VALIDACIÓN DEL FORMULARIO

contactForm.addEventListener("submit", function (event) {

    // Evita que la página se recargue
    event.preventDefault();

    // Limpiar mensajes anteriores
    nombreError.textContent = "";
    emailError.textContent = "";
    asuntoError.textContent = "";
    mensajeError.textContent = "";
    formMessage.textContent = "";

    let formularioValido = true;


    // Validar nombre
    if (nombre.value.trim() === "") {
        nombreError.textContent = "Por favor, escribe tu nombre.";
        formularioValido = false;
    }


    // Validar correo
    if (email.value.trim() === "") {
        emailError.textContent = "Por favor, escribe tu correo electrónico.";
        formularioValido = false;
    } else if (!email.value.includes("@")) {
        emailError.textContent = "Por favor, escribe un correo válido.";
        formularioValido = false;
    }


    // Validar asunto
    if (asunto.value.trim() === "") {
        asuntoError.textContent = "Por favor, escribe el asunto.";
        formularioValido = false;
    }


    // Validar mensaje
    if (mensaje.value.trim() === "") {
        mensajeError.textContent = "Por favor, escribe un mensaje.";
        formularioValido = false;
    }


    // Resultado
    if (formularioValido) {

        formMessage.textContent = "¡Mensaje enviado correctamente!";

        contactForm.reset();
    }

});