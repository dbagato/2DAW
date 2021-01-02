$.validator.setDefaults({
    submitHandler: function(){
        alert("formulario OK");
        enviarFormulario();
    },
});
window.onload=function(){

    cargarPeliculas();
    $("#abrir_modal").on("click",function(){
        $("#modal").show();
    });
    $("#cerrar_modal").on("click",function(){
        $("#modal").hide();
    });
    $("#enviar_carta").on("click",function(){
        validarFormulario();
    });
};
function cargarPeliculas(){
    $.ajax({
        url: "php/listo_peliculas.php", // no paso ningun dato, solo recojo
        type: "POST",
        dataType: "json",

        success: function (respuesta) {
           console.log(respuesta);
            for (var key in respuesta) {
                var actores=respuesta[key].actores;
                $("#lista_pelis").append("<div id='"+respuesta[key].id+"'><span>"+respuesta[key].titulo+"</span><span>"+respuesta[key].anyo+"</span><span>"+respuesta[key].director+"</span><span>"+respuesta[key].genero+"</span></div>");
                for (var valor in actores) {
                    $("#"+respuesta[key].id).append("<span>"+actores[valor]+"</span>");
                }
                $("#"+respuesta[key].id).click(borrarPelicula);
            }
           
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log("La solicitud ha fallado: " + textStatus + errorThrown);
        }
    });
}

function borrarPelicula(){
    var idPelicula = $(this).attr("id");
    var objeto={id:idPelicula};
    $.ajax({
        url: "php/borro_pelicula.php", // no paso ningun dato, solo recojo
        type: "POST",
        data: objeto,
        dataType: "json",

        success: function (respuesta) {
            console.log(respuesta);
            if(respuesta==idPelicula){
            alert("La pelicula con el ID:" + idPelicula +" ha sido borrada.");
            $("#"+idPelicula).remove();
            }else{
            alert("Algo a salido mal, no se ha podido borrar la pelicula.");    
            }
           
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log("La solicitud ha fallado: " + textStatus + errorThrown);
        }
    });
}


function enviarFormulario(){
   
    var objeto={titulo:$("#titulo").val(),anyo:$("#anyo").val(),director:$("#director").val(),genero:$("#genero_peli option:selected").val(),actor1:$("#actor1").val(),actor2:$("#actor2").val()};
    $.ajax({
        url: "php/envio_pelicula.php",
        type: "POST",
        data: objeto,
        dataType: "json",

        success: function (respuesta) {
            console.log(respuesta);
            if(respuesta){
                $("#lista_pelis").append("<div id='"+respuesta+"'><span>"+objeto.titulo+"</span><span>"+objeto.anyo+"</span><span>"+objeto.director+"</span><span>"+objeto.genero+"</span><span>"+objeto.actor1+"</span><span>"+objeto.actor2+"</span></div>");
                $("#"+respuesta).click(borrarPelicula);
            }else{
            alert("Algo a salido mal, no se ha podido añadir la nueva pelicula.");    
            }
           
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log("La solicitud ha fallado: " + textStatus + errorThrown);
        }
    });

}

function validarFormulario(){
    $.validator.addMethod("valueNotEquals", function(value, element, arg){
        return arg != value;
       }, "Value must not equal arg.");
         
    $("#peliculas").validate({
		rules: {
            titulo: {
               required: true,
               maxlength:15,
           },
            anyo: {
            required: true,
            digits: true,
            range: [2000,2020],
            },
            director: {
                required: true,
            },
            genero: {
                valueNotEquals: "",
            },
           actor1: {
                required: true,
            },
            actor2: {
                required: true,
            }
            
        },
        messages: {
            
            titulo: {
                required: "rellene el campo",
                maxlength: "maximo 15 caracteres"
            },
            anyo: {
                required: "rellene el campo",
                digits: "escriba numeros",
                range: "tiene que ser un anyo entre 2000 y 2020"
            },
            director: {
                required: "rellene el campo",
            },
            genero:{
                valueNotEquals:"seleccione una opcion que no sea la por defecto",
            }, 
            actor1: {
                required: "rellene el campo",
            },
            actor2: {
                required: "rellene el campo",
            }
        }
            
    });
}