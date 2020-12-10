function crearTabla() {
    var numero=1;
    var tabla = document.createElement("table");
    for (let i = 0; i < 100; i++) {
        var fila = document.createElement("tr");
        for (let j = 0; j < 100; j++) {
            var celda = document.createElement("td");
            var texto = document.createTextNode(numero);
            celda.appendChild(texto);
            if (esCasiPrimo(numero)) {
                celda.style.backgroundColor="yellow";
            }
            fila.appendChild(celda);
            numero++;
        }
        tabla.appendChild(fila);
    }
    document.body.appendChild(tabla);
    numero=1;
}

function esCasiPrimo(n){
    
    var oportunidad=0;
    for(i=2;i<n;i++){
        if(n%i==0){
            oportunidad++;
            if(oportunidad>1){
                return false;
            }
        }
    }
    
    if(oportunidad==1)
        return true;
    else
        return false;
}