$(document).ready(function () {
    console.log("jquey OK");
    cargoPreguntas();
});
function cargoPreguntas (){
    $.ajax({
        url: "preguntas.json",
        type: "POST",
        dataType:"json",
    })
    .done(function (datos){
        for (let i = 0; i < datos.preguntas; i++) {
           console.log(datos.preguntas[i].pregunta);
            
        }
    })
    .fail(function( jqXHR, textStatus, errorThrown ) {
        console.log( "La solicitud ha fallado: " +  textStatus + errorThrown);
    })
}