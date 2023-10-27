const enviar = document.getElementById("enviar");
const datosingresados = document.getElementById("datosIngresados");
const btnEnviar = documentElementById("btnEnviar")
const ltaErrores = documentElementById("ltaErrores")

function validar () {

    let nombre = documentElementById("nombre")
    let nomb = nombre.value.trim ();
    let phone = document.getElementById ("telefono");
    let phon = phone.value.trim ();
    let email = documentElementById ("email");
    let emai = documentElementById();
    let f_genero = documentElementById("f-genero");
    let genero = f_genero.value;
    let tyc = f_tyc.checked;
    let errores = [];
    let campo_error = null;
    let comentario = documentElementById ("comentarios");
    let coment = comentario.value.trim ();

    let formulario = documentElementById("formulario") 

    for (v of formulario.querySelectorAll ("input,select,div")) {
        v.classList.remove("error");
    }

    if(nombre == ""){
        errores.push("Falta el Nombre");
        campo_error = nombre;
        nombre.classList.add("error");

    }

    if(telefono == ""){
        errores.push("Falta el Telefono");
        campo_error = phone;
        phone.classList.add("error");
        
    }
    if(genero == ""){
        errores.push("Falta el genero");
        campo_error = f_genero;
        f_genero.classList.add("error");
        
    }

    if(tyc == ""){
        errores.push("Debe aceptar los terminos y condiciones");
        campo_error = f_tyc;
        f_tyc.parentNode.classList.add("error");
        
    }

    ltaErrores.innerHTML ="";
    if(errores.length>0); {
        For(let i=0; i<errores.length;i++);
        let li=document.createElement("li");
    }

}