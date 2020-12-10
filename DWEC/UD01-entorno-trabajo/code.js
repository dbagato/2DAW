
var tablero = new Array;
tablero[0]= ["_","_","_"];
tablero[1]= ["_","o","_"];
tablero[2]= ["_","_","_"];
var contador=0;
console.log(tablero);

function pintoTablero(){
    

    for (let i = 0; i < tablero.length; i++) {
       for (let j = 0; j < tablero[i].length; j++) {
           var id_casilla="casilla_"+i+j;
           document.getElementById(id_casilla).value=tablero[i][j];
           if(tablero[i][j]=="o"){
            document.getElementById(id_casilla).disabled=true; 
        }
       }
        
    }

}

function jugada(){

    for (let i = 0; i < tablero.length; i++) {
        for (let j = 0; j < tablero[i].length; j++) {
            var valueCasilla="casilla_"+i+j;
            tablero[i][j]=document.getElementById(valueCasilla).value;

            if ((tablero[i][j]!="o")&&(tablero[i][j]=!"_")) {
                tablero[i][j]="x";
            }
        }
         
     }
     compruebaGanador("x");
     tiradaMaquina();
     compruebaGanador("o");
}

function tiradaMaquina(){
    var aleatorioColum=Math.floor(Math.random()*3);
    var aleatorioFila=Math.floor(Math.random()*3);
    if (tablero[aleatorioColum][aleatorioFila]== "_") {
        tablero[aleatorioColum][aleatorioFila]="o";
        contador++;
        pintoTablero();
    }else{
        tiradaMaquina();
    }

     }



function compruebaGanador(jugador) {
    if (tablero[0][0]==tablero[0][1]&&(tablero[0][1]==tablero[0][2])&&(tablero[0][0]==jugador)) {
        alert("Ha ganado " + jugador);
        location.reload();
    }
    if (tablero[1][0]==tablero[1][1]&&(tablero[1][1]==tablero[1][2])&&(tablero[1][0]==jugador)) {
        alert("Ha ganado " + jugador);
        location.reload();
    }
    if (tablero[2][0]==tablero[2][1]&&(tablero[2][1]==tablero[2][2])&&(tablero[2][0]==jugador)) {
        alert("Ha ganado " + jugador);
        location.reload();
    }
    if (tablero[0][0]==tablero[1][0]&&(tablero[1][0]==tablero[2][0])&&(tablero[0][0]==jugador)) {
        alert("Ha ganado " + jugador);
        location.reload();
    }
    if (tablero[0][1]==tablero[1][1]&&(tablero[1][1]==tablero[2][1])&&(tablero[0][1]==jugador)) {
        alert("Ha ganado " + jugador);
        location.reload();
    }
    if (tablero[0][2]==tablero[1][2]&&(tablero[1][2]==tablero[2][2])&&(tablero[0][2]==jugador)) {
        alert("Ha ganado " + jugador);
        location.reload();
    }
    if (tablero[0][0]==tablero[1][1]&&(tablero[1][1]==tablero[2][2])&&(tablero[0][0]==jugador)) {
        alert("Ha ganado " + jugador);
        location.reload();
    }
    if (tablero[0][2]==tablero[1][1]&&(tablero[1][1]==tablero[2][0])&&(tablero[0][2]==jugador)) {
        alert("Ha ganado " + jugador);
        location.reload();
    } 
    if(contador==4){   // si la maquina lleva 4 turnos, se acaba en empate
        alert("EMPATE!!!!");
        location.reload();
    }
}


 

