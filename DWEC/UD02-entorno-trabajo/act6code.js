

function crear_ventana(x,y){

    var opciones = "width=400 height =400, toolbar=0, scrollbars=0, left="+x+", top="+y;
    var ventana = window.open("http://iesconselleria.edu.gva.es/","", opciones);
    return ventana;
}


for (let i = 0; i < 5; i++) {

    var alea1=Math.floor(Math.random()*600);
    var alea2=Math.floor(Math.random()*400);
    crear_ventana(alea1,alea2);
    
}

var ventana_cerrar = crear_ventana(0,0);
setTimeout("cerrarVentana()", 2000);

function cerrarVentana() {
    ventana_cerrar.close();
}