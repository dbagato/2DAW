var tablero = new Array;
tablero[0] = ["_","_","_"];
tablero[1] = ["_","o","_"];
tablero[2] = ["_","_","_"];
//contador de turnos
var fin_partida=0;
//imagen guardada de las"x"
var imgx ="<img src='img/x.png' width=100 height =100 style=background:#058b8c>";
//imagen guardada de las"o"
var imgo ="<img src='img/o.png' width=100 height =100 style=background:#058b8c>";
//imagen guardada de las casillas vacias
var imgVacia ="<img src='img/_.png' width=100 height =100 style=background:#058b8c>";

function pintoTablero(){

    for( let i=0;i<tablero.length; i++){
        for( let j=0;j<tablero[i].length;j++){
            var id_casilla = "casilla_" + i + j;
           switch (tablero[i][j]) {
                case "x":
                    document.getElementById(id_casilla).innerHTML=imgx;
                    document.getElementById(id_casilla).disabled=true;
                   break;
                case "o":
                    document.getElementById(id_casilla).innerHTML=imgo;
                    document.getElementById(id_casilla).disabled=true;
                    break;
                case "_":
                     document.getElementById(id_casilla).innerHTML=imgVacia;
                   break;
           }
           
        }
    
    }
    //con esto recorro la matriz
}


function tiradaJugador(posicion){
   
    for( let i=0;i<tablero.length; i++){
        for( let j=0;j<tablero[i].length;j++){
            var id_casilla = "casilla_" + i + j;
           if ((posicion==id_casilla)&&(tablero[i][j]=="_")) {
               document.getElementById(id_casilla).innerHTML=imgx;
               document.getElementById(id_casilla).disabled=true;
               tablero[i][j]="x";
           }
           
        }
    
    }        
    compruebaGanador("x");
    leoTablero();
}


//pinto barra baja en todas las casillas
function leoTablero(){
 //leer todos los valores de los inputs y meterlos en tablero
for(let i=0;i<tablero.length;i++){
    for(let j=0;j<tablero[i].length;j++){
        switch (tablero[i][j]) {
            case imgx:
                tablero[i][j]="x";
               break;
            case imgo:
                tablero[i][j]="o";
                break;
            case imgVacia:
                tablero[i][j]="_";
               break;
       }
        if((tablero[i][j] != "o") && (tablero[i][j] != "_")){
            tablero[i][j]="x";
        } 
    }   
}

tiradaMaquina();
compruebaGanador("o");

}

function tiradaMaquina(){
    //aleatorio para añadir 0

    jugada_x = Math.floor(Math.random() * 3);
    jugada_y = Math.floor(Math.random() * 3);

    console.log("jugadax" + jugada_x + "jugaday" + jugada_y) ;
    if(tablero[jugada_x][jugada_y] == "_"){
        tablero[jugada_x][jugada_y] = "o";
        pintoTablero();
        fin_partida++;
    }else{
        
        tiradaMaquina();
       
    }

}

function compruebaGanador(jugador){
    
    

    if((tablero[0][0]==tablero[0][1])&&(tablero[0][1]==tablero[0][2])&&(tablero[0][2]==jugador)){ //filas
        alert (" Ha ganado "+jugador);
        location.reload();
    }
    if((tablero[1][0]==tablero[1][1])&&(tablero[1][1]==tablero[1][2])&&(tablero[1][2]==jugador)){
        alert (" Ha ganado "+jugador);
        location.reload();
    }
    if((tablero[2][0]==tablero[2][1])&&(tablero[2][1]==tablero[2][2])&&(tablero[2][2]==jugador)){
        alert (" Ha ganado "+jugador);
        location.reload();
    }
    if((tablero[0][0]==tablero[1][1])&&(tablero[1][1]==tablero[2][2])&&(tablero[2][2]==jugador)){ //diagonales
        alert (" Ha ganado "+jugador);
        location.reload();
    }
    if((tablero[0][2]==tablero[1][1])&&(tablero[1][1]==tablero[2][0])&&(tablero[2][0]==jugador)){
        alert (" Ha ganado "+jugador);
        location.reload();
    }
    if((tablero[0][0]==tablero[1][0])&&(tablero[1][0]==tablero[2][0])&&(tablero[2][0]==jugador)){ //columnas
        alert (" Ha ganado "+jugador);
        location.reload();
    }
    if((tablero[0][1]==tablero[1][1])&&(tablero[1][1]==tablero[2][1])&&(tablero[2][1]==jugador)){
        alert (" Ha ganado "+jugador);
        location.reload();
    }
    if((tablero[0][2]==tablero[1][2])&&(tablero[1][2]==tablero[2][2])&&(tablero[2][2]==jugador)){
        alert (" Ha ganado "+jugador);
        location.reload();
    }
    if(fin_partida==4){   // si la maquina lleva 4 turnos, se acaba en empate
        alert("EMPATE!!!!");
        location.reload();
    }
    
}
