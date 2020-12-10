window.onload=function(){
  $('#total').append("<span id='txt'>Total: </span><span id='total_escanyos'>0</span>");
  $('#limpiar').click(limpiarPactometro);  
  $('#partido').change(cargarPartido);
  $('#escanyos_partido').empty();
  
};

function limpiarPactometro() {
    $('#total').empty();
    $('#panel').empty();
    $('#total').append("<span id='txt'>Total: </span><span id='total_escanyos'>0</span>");
}
function cargarPartido(){
  var escanyos=$('#partido option:selected').attr("escanyos");
  var color=$('#partido').val();
  var partido = $('#partido option:selected').text();
  //console.log(color);
$('#panel').append("<span class='partido_escanyo' escanyo='"+escanyos+"' style='background-color:"+color+"; width:"+(escanyos*2)+"px;display:inline-block;'>"+partido+"</span>");
$('#total_escanyos').html(parseInt($('#total_escanyos').text())+parseInt(escanyos));
$('.partido_escanyo').click(function () {
  $('#total_escanyos').html((parseInt($('#total_escanyos').text()-$(this).attr('escanyo'))));
  console.log($(this).attr('escanyo'))
  $(this).remove();
});
$('.partido_escanyo').mouseover(function () {
  $('#escanyos_partido').html("Total: " + $(this).attr('escanyo'));
});
$('.partido_escanyo').mouseleave(function () {
  $('#escanyos_partido').empty();
});
}