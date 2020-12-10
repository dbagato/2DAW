$(document).ready(function (){

    $.ajax({
        url : '../servidor/cargaProvinciasJSON.php',
        type : 'POST',
        dataType : 'json',
    
        success : function(respuesta) {
            for (var key in respuesta){
                $("#provincias").append("<option value='"+key+"'>"+respuesta[key]+"</option>");

            }
        },
        error : function(xhr, status) {
            alert('Disculpe, existió un problema');
        },
        complete : function(xhr, status) {
            alert('Petición realizada');
        }
    });

    $("#provincias").change(function () {
          var codigoProvincia = $("#provincias option:selected").val();
          var datoEnviar = {"provincia" : codigoProvincia};
        $.ajax({
            url : '../servidor/cargaMunicipiosJSON.php',
            type : 'POST',
            data : datoEnviar,
            dataType : 'json',
        
            success : function(respuesta) {

               for (var key in respuesta){
                    $("#municipio").append("<option value='"+key+"'>"+respuesta[key]+"</option>");
    
                }
            },
            error : function(xhr, status) {
                alert('Disculpe, existió un problema');
            },
            complete : function(xhr, status) {
                alert('Petición realizada');
            }
        });
      });
      $("#municipio").change(function () {
        var nomProvincia = $("#provincias option:selected").text();
        var nomMunicipio = $("#municipio option:selected").text();
          $("#seleccion").html("Provincia "+nomProvincia+" , Municipio "+nomMunicipio );

    });



});


