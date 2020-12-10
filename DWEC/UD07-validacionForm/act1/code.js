window.onload=function(){
    var boton_enviar =document.getElementById("enviar");
    boton_enviar.addEventListener("click",function(event){validarFormulario(event)});
}

function validarFormulario(event){
    event.preventDefault();
    var form_ok=true;

    var nombre = document.getElementById("nombre").value;
    if (nombre=null||nombre.length==0) {
        alert("ERROR: el nombre no puede estar vacio");
        form_ok=false;
    }

    var edad= document.getElementById("edad").value;
    if (isNaN(edad)||edad==null||edad>100 ||edad<0) {
        alert("ERROR: la edad es incorrecta");
        form_ok=false;
    }

    var correo= document.getElementById("correo").value;
    if (!(/\S+@\S+\.\S.+/.test(correo))) {
        alert("ERROR: correo Electronico incorrecto");
        form_ok=false;
    }




    console.log(form_ok);
    if(form_ok){
        alert("datos ok");
        var formulario=document.getElementById("formulario");
        formulario.submit();
    };
}