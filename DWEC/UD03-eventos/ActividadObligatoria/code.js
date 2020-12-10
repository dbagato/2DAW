//variable que usaremos para el reloj de tiempo del juego 
var tiempo="";
//limite de tiempo para que el juego acabe, con forme avanze el juego este se ira reduciendose en 20 cada 5 rondas
var limite=300;
//limite de tiemo con el cual si llega a la variable limite se acabara el juego, esta se resetea al clickar en un circulo rojo
var limiteTiempo=0;
//guardara el numero de rondas para aunmentar la dificultad del juego
var rondas=0;
//variable qe guardara el tiempo del juego
var ms=0;
//variable que gardara el numero de la posicion donde se genero el circulo
var posicionAnterior=-1;
/*funcion que creara el numero del circulo aleatorio y 
cargara la clase"objetivo" en el circulo aleatorio indicado por
 el numero generado y las funciones de al hacer "click" llama a la funcion comprovarCirculo. 
 En el caso de que el numero generado ya este pintado este generara de nuevo otro numero aleatorio,
 para ello lo comprobara con la variable posicionAnterior.
*/ 
function pintoCirculoRojo() {
    //se genera el numero random
    var random = Math.floor(Math.random()*9);
    //componemos el id del objeto "circulo" para poder interactuar con el
    var id_circulo="circulo_"+random;
    //condicional para comprobar que no se repita el circulo de la posicion anterior,
    // si se repite llama otra vez al metodo para generar otro numero aleatorio
    if (random!=posicionAnterior) {
        //asignaremos a circulo_(numero random) la clase objetivo
        document.getElementById(id_circulo).className="objetivo";
        //asignaremos a circulo_(numero random) el evento "click" llamar comprovarCirculo
        document.getElementById(id_circulo).addEventListener("click",comprovarCirculo);
    }else{
        pintoCirculoRojo();
    }
}
/*funcion que limpiara el circulo rojo para rellenar el siguiente e iniciara el reloj al inicio del juego.
con un for recorreremos todos los circulos para ver cual es el coloreado ,
comprobaremos si este es el coloreado y si es asi limpiaremos la clase"objetivo",y los eventos "click" llamar comprobarCirculo.
pasaremos el numero de la posicion del circulo pintado para que no se repita en el siguiente circulo
limpiaremos el limite de Tiempo (limiteTiempo=0)
llamaremos a la funcion aumentarDificultad()
llamaremos a la funcion circuloAleatorio() para generar otro circulo;
si rondas = 0 epezara el cronometro.
*/ 
function  comprovarCirculo() {
    //condicional para iniciar el cronometro
    if (rondas==0) {
        window.setInterval("cronometro()",10);
    }
    //recorreremos todos los circulos para saber cual esta pintado
     for (let i = 0; i <= 8; i++) {
         //creamos el nombre prara poder interactuar con los circulos
        var id_circulo="circulo_"+i;
        //condicional que determina que circulo esta pintado
        if (document.getElementById(id_circulo).className=="objetivo") {
            //limpiaremos la clase "objetivo" de circulo_(i)
            document.getElementById(id_circulo).removeAttribute("class");
            //limpiaremos los eventos de circulo_(i)
            document.getElementById(id_circulo).removeEventListener("click",comprovarCirculo);
            //asignaremos a 0 el tiempo limite para poder tener el margen de nuevo
            limiteTiempo=0;
            //asignaremos la posicion del circulo pintado a la variable posicionAnterior
            posicionAnterior=i;
            }
        }
       //llamaremos a aumentar dificultad para que en el caso que se cumpla disminulla el limite
        aumentarDificultad();
        //llamaremos a pintoCirculoRojo para generar otro circulo rojo
        pintoCirculoRojo();
    }
 /*
 funcion que servira para comprovar cuando el tiempo ha llegado el tiempoLimite  y se acaba el juego.
 */   
function comprobarTiempo() {
    //condicional que si el limiteTiempo llega a limite se acaba el juego 
    if(limiteTiempo==limite){
        //envia una alerta en el que se indican el tiempo de juego y las rondas que se ha durado
        alert("Has perdido, has durado: " + tiempo + " segundos y " + rondas + " rondas");
        //recarga la pagina
        location.reload();
    }
}

 /*funcion que se encarga de aumentar la dificultad al juego.
  Esta al hacer click al circulo rojo sumara uno a las rondas jugadas
   y cada vez que sea multiplo de 5 esta bajara el tiempo limite en 20 centesimas*/   
function aumentarDificultad() {
    //aumentara el numero de rondas en 1
    rondas++;
    //condicional que se cumple cuando el numero de rondas es multiplo de 5 y mayor a 1 
    if ((rondas%5)&&(rondas>1)) {
        //baja el limite en 20
        limite-=20;
    }
}



/*funcion de cronometro del juego, esta aumentara la variable de ms y limiteTiempo cada 1 centesima de segundo. 
despues de eso guaradar el tiempo en la variable tiempo. 
esta guardara la variable ms/100 el cual nos mostrara el resultado en segundos y 
lo sacaremos por pantalla por el elemento "cronometro" del html.
*/ 
function cronometro() {
//aumentara los ms en 1
ms++;
//aumenta el limiteTiempo en 1
limiteTiempo++;
//define la variable tiempo con ms/100 para que este se muestre en segundos
tiempo=ms/100;
//imprimira en el elemento "cronometro" el valor de tiempo
document.getElementById("cronometro").innerHTML=tiempo;
//llama a comprobarTiempo
comprobarTiempo();
}