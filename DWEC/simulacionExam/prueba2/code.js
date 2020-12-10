$(document).ready(function () {
    console.log("jquey OK");
    cargoPreguntas();
    $("#ok").on("click",function () {
        compruebo_preguntas();
        clearTimeout(temporizador);
    });
    $("#borrar").click(function(){
        $("#preguntas").empty();
        $("#acertadas").empty();
        $("#tiempo").empty();
        cargoPreguntas();
    });
    var tmp =0;
    var temporizador = setInterval(function(){
        tmp++;
        $("#tiempo").html("Tiemo : " + tmp);
    },100);
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
            $("#preguntas").append("<div id='pregunta"+i+"'>"+datos.preguntas[i].pregunta+"</div>");
            $.each(datos.preguntas[i].respuesta, function (key,value) {
              var radio = "<input type='radio' class='respuesta"+i+"' name='respuesta"+i+"' value='"+key+"'>"+key+" - "+value+"</input>";
              $("#preguntas").append(radio);
            });
        }
    })
    .fail(function( jqXHR, textStatus, errorThrown ) {
        console.log( "La solicitud ha fallado: " +  textStatus + errorThrown);
    })
}
function compruebo_preguntas() {
    $.ajax({
        url: "preguntas.json",
        type: "POST",
        dataType:"json",
    })
    .done(function (datos){
        console.log(datos);
        var aciertos=0;
        for (let i = 0; i < datos.preguntas.length; i++) {
           var seleccion =$(".respuesta"+i+":checked").val();
           if (seleccion == datos.preguntas[i].correcta) {
               $("#pregunta"+i).css({"background-color" : "green"});
               aciertos++;
           }else{
            $("#pregunta"+i).css({"background-color" : "red"});
            
           }
          
        }
        $("#acertadas").html("Aciertos: " + aciertos);
    })
    .fail(function( jqXHR, textStatus, errorThrown ) {
        console.log( "La solicitud ha fallado: " +  textStatus + errorThrown);
    })
}