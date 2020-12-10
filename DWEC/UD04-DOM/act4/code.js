window.onload= function(){

    for (let i = 0; i < 3; i++) {
        document.getElementById("miP"+i).onclick=ocultar;
        document.getElementById("miP"+i).ondblclick=eliminar;
        
    }
}
function ocultar(evento) {
    //.hidden=true
}

function eliminar(evento) {
    //removeChild
}

function reaparecer() {
     //.hidden=false
}