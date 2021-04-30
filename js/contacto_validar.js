var regexEmail = /^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/
/*var regexTelConOSinGuion =/^[0-9]{4}[-]?[0-9]{4}$/*/
var regexTelConGuion =/^[0-9]{4}\-[0-9]{4}$/

const CANTIDAD = 1000
var error = false


function validarDatos(){
    
    var mensajesError = ""
    
    if(document.getElementById("nombreApellido").value == ''){
        error = true
        mensajesError+="<p>Debe ingresar un nombre y apellido</p>"
    }

    if(!regexEmail.test(document.getElementById("correo").value)){
        error = true
        mensajesError += "<p>Ingrese un MAIL valido</p>"
    }


    if(!regexTelConGuion.test(document.getElementById("telefono").value)){
        error = true
        mensajesError += "<p>El telefono ingresado no es valido (xxxx-xxxx) incluya '-' </p>"
    }


    if(error){
        document.getElementById("mensaje").innerHTML = mensajesError
        return false
    }else{
        return true
    }
}

function cantidadCaracteres () {
    
    var mensajesError = ""

    var cantidadCarateresEscritos = document.getElementById("consulta").value.length
    var restantes = CANTIDAD - cantidadCarateresEscritos
    if (restantes < 0){
        document.getElementById("caracteres").style.color="red"
        mensajesError += "<p>Supero la cantidad de caracteres (1000)</p>"
        error = true
    }else{
        document.getElementById("caracteres").style.color = "grey"
        error = false
    }
    document.getElementById("caracteres").innerHTML = restantes

    if(error){
        document.getElementById("mensajeCaracteres").innerHTML = mensajesError
    }else{
        document.getElementById("mensajeCaracteres").innerHTML = mensajesError
    }
}
