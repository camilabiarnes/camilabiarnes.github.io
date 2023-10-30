document.addEventListener("DOMContentLoaded", function () {
    function validarFormulario() {
        let valorName = document.forms["formu"]["nombre"].value;
        let valorPhone = document.forms["formu"]["phone"].value;
        let valorEmail = document.forms["formu"]["email"].value;
        let valorMessage = document.forms["formu"]["message"].value;
        let result = document.getElementById("resultado");

     

        if (valorName === "" || valorPhone === "" || valorEmail === "" || valorMessage === "") {
            result.innerHTML = "<p>Todos los campos son obligatorios.</p>";
            return false;
        }

    

        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!valorEmail.match(emailPattern)) {
            result.innerHTML = "<p>El email no es válido, asegúrese de escribirlo correctamente.</p>";
            return false;
        }

        result.innerHTML = "<p> Genial, ya sos parte de ICE, BIENVENIDO </p>"
        return false;        
    }

    document.forms["formu"].onsubmit = validarFormulario;
});