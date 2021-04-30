
function validar(){
    var error = false
    var mensajesError = ""
    
    /** VALIDACION NOMBRE / DNI / TEL */
    if(document.getElementById("nombreapellido").value == ''){
        error = true
        mensajesError+="<p>Debe ingrsar un nombre y apellido</p>"
    }
    if(document.getElementById("dni").value == ''){
        error = true
        mensajesError+="<p>Debe ingrsar un DNI</p>"
    }
    if(document.getElementById("tel").value == ''){
        error = true
        mensajesError+="<p>Debe ingrsar un telefono</p>"
    }

    /** VALIDACION TYPE RADIO */
    var opciones = document.getElementsByName("fiebre")
    var seleccionado = false
    for(i in opciones){
        if(opciones[i].checked){
            seleccionado = true
        }
    }
    if(!seleccionado){
        error=true
        mensajesError+="<p>Marque si tuvo fiebre</p>"
    }

    opciones = document.getElementsByName("dolor")
    seleccionado = false
    for(i in opciones){
        if(opciones[i].checked){
            seleccionado=true
        }
    }
    if(!seleccionado){
        error= true
        mensajesError+="<p>Marque si tuvo dolor de cabeza </p>"
    }

    opciones = document.getElementsByName("tos")
    seleccionado = false
    for(i in opciones){
        if(opciones[i].checked){
            seleccionado=true
        }
    }
    if(!seleccionado){
        error= true
        mensajesError+="<p>Marque si tuvo tos </p>"
    }

    opciones = document.getElementsByName("garganta")
    seleccionado = false
    for(i in opciones){
        if(opciones[i].checked){
            seleccionado=true
        }
    }
    if(!seleccionado){
        error= true
        mensajesError+="<p>Marque si tuvo dolor de garganta </p>"
    }

    opciones = document.getElementsByName("respirar")
    seleccionado = false
    for(i in opciones){
        if(opciones[i].checked){
            seleccionado=true
        }
    }
    if(!seleccionado){
        error= true
        mensajesError+="<p>Marque si tuvo problemas para respirar </p>"
    }


    /** HAY ERRORES? */
    if(error){
        document.getElementById("mensaje").innerHTML = mensajesError
        contador=0
        return false
    }else{
        var msjCompleto="El formulario fue completado correctamente. "
        msjCompleto+= contador
        msjCompleto+= " síntomas de COVID-19 fueron registrados"
        alert(msjCompleto)

        return true
    }
}


/** OCULTAR EN CASO DE NO */
function mostrarOcultar() {
    var opcion = document.getElementsByName("exterior")
    for(i in opcion){
        if(opcion[i].value=="No" && opcion[i].checked == true){
            document.getElementById("ocultar").style.display="none"
        }
        if(opcion[i].value=="Si" && opcion[i].checked == true){
            document.getElementById("ocultar").style.display="block"
        }
    }
}
function mostrarOcultarResp() {
    var opcion = document.getElementsByName("respirar")
    for(i in opcion){
        if(opcion[i].value=="No" && opcion[i].checked == true){
            document.getElementById("ocultarDir").style.display="none"
        }
        if(opcion[i].value=="Si" && opcion[i].checked == true){
            document.getElementById("ocultarDir").style.display="block"
        }
    }
}

/** CUANTOS SINTOMAS POSITIVOS AL ENVIAR FORM */
var contador = "0"
function cuantosPositivos (){
        var inputsPositivos = document.getElementsByClassName("checkPositivo")
        for(i in inputsPositivos){
            if (inputsPositivos[i].checked){
                contador++
            }
        }

}
