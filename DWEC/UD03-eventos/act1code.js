//llamaramos a la funcion mientras el raton se mueva por la pantalla
document.onmousemove=obtenerPosicion;
//creamos la funcion obtenerPosicion en el que este pasara al parrafo de html las cordenadas del raton 
function obtenerPosicion(evento) {
    //recojera el elemento parrafo del html y metera los alores X e Y del raton
    document.getElementById("valorRaton").innerHTML="Posicion x: " + evento.clientX + " ,Posicion y: " + evento.clientY;
}