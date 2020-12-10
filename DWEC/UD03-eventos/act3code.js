document.onkeydown=calcularDNI;

function calcularDNI(evento){
    console.log(evento.key);
    for(i=0;i<9999;i++){
            if (evento.key.toUpperCase()==letraDNI(i)) {
                document.getElementById("imprimirDnis").innerHTML+=i+" ; ";
            }
    };

}

function letraDNI(numeroDni){
    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
    return letras[numeroDni%23];
}