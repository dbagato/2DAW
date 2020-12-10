
var saludo="Hola,Buenas tades.";

function inicio(){
    document.getElementById("comenzarSaludos").onclick=iniciarSaludar;
    document.getElementById("pararSaludos").onclick=pararSaludar;
}
var estado = 0;
function iniciarSaludar() {
    if (estado==0) {
        estado = setInterval("alert(saludo)",5000);
    }else{
        alert("Ya hay un saludo en marcha");
    }
    
}
function pararSaludar(){
    if (estado==0) {
        alert("No hay nada que parar");
    }else{
        clearInterval(estado);
        estado=0;
    }
  
}