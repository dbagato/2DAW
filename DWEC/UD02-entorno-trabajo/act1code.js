var letrasDNI=[];
var intervalo=setInterval("pedirNumero();",5000);   
var letDNI;
function pedirNumero(){
        var dni="0";
        dni=prompt("Dime Dni");
        if (dni!="-1"){
            var letDNI=calcularLetraDni(dni);
            letrasDNI.push(letDNI);
        }else{
            clearTimeout(intervalo);
            console.log("acabado");
            var dnisunido= letrasDNI.join(",");
            alert(dnisunido);
        }
}

function calcularLetraDni(nDNI) {// Calcular letraDNI
        
    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
     return letras[nDNI%23];

}
