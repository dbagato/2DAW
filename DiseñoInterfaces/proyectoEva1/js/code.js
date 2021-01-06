$(document).ready(function (){
    $("#modal").hide();
    console.log("funciona");
    $.validator.setDefaults({
        submitHandler: function(){
           alert("Se ha enviado correctamente");
        }
    });
   
    $("#formulario").validate({
        rules:{
            nombre:{
                required: true,
                maxlength: 15,
            },
            apellidos:{
                required: true,
                maxlength: 25,
            },
            email:{
                required: true,
            },
            comentario:{
                required: true,
                maxlength: 200,
            },
        },
        messages:{
            nombre:{
                required: "Este campo no puede estar vacio",
                maxlength: "Como maximo 15 caracteres",
            },
            apellidos:{
                required: "Este campo no puede estar vacio",
                maxlength: "Como maximo 25 caracteres",
            },
            email:{
                required: "Este campo no puede estar vacio",
            },
            comentario:{
                required: "Este campo no puede estar vacio",
                maxlength: "Como maximo 200 caracteres"
            },
        }
    });
    
});