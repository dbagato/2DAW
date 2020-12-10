
// Calcular letraDNI
function letraDNI(numeroDni){
    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
    return letras[numeroDni%23];
}


var l=prompt("Dime la letra","A");
// Contaremos cuantos tienen  la letra buscada
var numero=0;
//crearemos un array en el que guardaremos los numeros de dni que coincidan con la letra para mostrarlos
var miArray=[];

for(i=10000000;i<=99999999;i++){
    
    // comprobaremos si tienen la misma letra, si es asi lo guardaremos en el array y pasaremos al siguiente numero
    if(l==letraDNI(i)){
        numero++;
	miArray.push(i);
    }
}
alert("Hay :"+numero+" de dnis hasta 99999999 con la letra: "+l);
for(i=0;i<200;i++){
document.write(miArray[i]);
document.write(" - ");
}