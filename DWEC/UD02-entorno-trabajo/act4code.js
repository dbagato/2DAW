
function esPrimo(numero){

    var primo = true;
    i=2;
    do {
        if (numero%i==0) {
            primo=false;
        }
        i++;
    } while (i<numero);

    return primo;

}

function esPalindromo(numero) {
    var palindromo=true;
    var splitNumero= numero.split("");
    var splitNumeroReverse = numero.split("");
    splitNumeroReverse.reverse();
    for (let i = 0; i < numero.length; i++) {
       if (splitNumero[i]!=splitNumeroReverse[i]) {
           palindromo=false;
       }
        
    }
    
    return palindromo;
}

function calcular(){
    var respuesta =new Array();
    var limite = document.getElementById("limite").value;

    for (let j = 2; j <= limite; j++) {
        if (esPrimo(j)&&esPalindromo(j.toString())) {
        
         respuesta.push(j);
            
        }
        
    }
    console.log(respuesta);
    var confirmacion = confirm("Hay" + respuesta.length + " resultados del 2 al " + limite + "¿Quiere ver el resultado?");
    if (confirmacion==true) {
    document.write(respuesta.join(" , "));
   }

}