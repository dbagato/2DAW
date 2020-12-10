var  tiempo="";
var pared=2;
var s=0;
var ms=0;  
function inicio(){
    document.getElementById("salida").onmouseout=comenzar;
    window.setInterval("cronometro()",100);
}


function comprovarTablero() {
   alert("Has salido del tablero" );
}


function comenzar() {
    document.getElementById("tablero").addEventListener("mouseleave",comprovarTablero);
    for (let i = 0; i <= pared; i++) {
        document.getElementById("pared_"+i).onmouseenter=perder;
    }

}

function perder() {
    alert("Fin del Juego chocaste contra una pared.");
    location.reload();
}

function ganar() {
    alert("Fin del Juego Ganaste, tardaste: "+tiempo+" segundos"); 
   location.reload();
}


function cronometro() {
ms++;
 if(ms==10){
    ms=0;
    s++;
 }
tiempo=s+"."+ms;
}
   