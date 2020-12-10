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
        console.log(datos);
        for (let i = 0; i < datos.preguntas.length; i++) {
           console.log(datos.preguntas[i].pregunta);
            $("#preguntas").append("<div>"+datos.preguntas[i].pregunta+"</div>");
            $.each(datos.preguntas[i].respuesta, function (key,value) {
              var radio = "<input type='radio' name='respuesta"+i+"' value='"+key+"'>"+key+" - "+value+"</input>";
              $("#preguntas").append(radio);
            });
        }
    })
    .fail(function( jqXHR, textStatus, errorThrown ) {
        console.log( "La solicitud ha fallado: " +  textStatus + errorThrown);
    })
}