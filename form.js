document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");
    const resultDiv = document.getElementById("result");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const nombre = contactForm.nombre.value;
        const edad = contactForm.edad.value;
        const email = contactForm.email.value;
        const mensaje = contactForm.mensaje.value;

        if (!nombre || !edad || !email || !mensaje) {
            resultDiv.innerHTML = "Por favor, complete todos los campos.";
            resultDiv.className = "error";
            resultDiv.style.display = "block";
        } else if (isNaN(edad) || edad <= 0 || edad > 100) {
            resultDiv.innerHTML = "La edad no es válida.";
            resultDiv.className = "error";
            resultDiv.style.display = "block";
        } else if (!validateEmail(email)) {
            resultDiv.innerHTML = "El correo electrónico no es válido.";
            resultDiv.className = "error";
            resultDiv.style.display = "block";
        } else {
            const mensajeHTML = `
                <p> Su formulario ha sido enviado correctamente Bienvenido a ICE ${nombre}</p>
            `;
            resultDiv.innerHTML = mensajeHTML;
            resultDiv.className = "success";
            resultDiv.style.display = "block";
        }
    });

    function validateEmail(email) {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return email.match(emailRegex);
    }
});