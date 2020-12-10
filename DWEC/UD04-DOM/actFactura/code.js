function anadoFila(){
    var tabla_body = document.getElementById("cuerpo");
    var nombre = document.getElementById("producto").value;
    var cantidad = document.getElementById("cantidad").value;
    var precio = document.getElementById("precio").value;
    var precio_tot = cantidad*precio

    var fila = document.createElement("tr");

    var col1= document.createElement("td");
    var col2= document.createElement("td");
    var col3= document.createElement("td");
    var col4= document.createElement("td");
    var col5= document.createElement("td");

    col1.innerHTML=nombre;
    col2.innerHTML=cantidad;
    col3.innerHTML=precio;
    col4.innerHTML=precio_tot;
    col4.setAttribute("class","precio_total");
    

    fila.appendChild(col1);
    fila.appendChild(col2);
    fila.appendChild(col3);
    fila.appendChild(col4);
    

    tabla_body.appendChild(fila);

    calculoTotal();
}

function calculoTotal(){
    var preciosTotales = document.getElementsByClassName("precio_total");
    var base=0;
    var iva=0;
    var total=0;
    for (let i = 0; i < preciosTotales.length; i++) {
        base+=parseFloat(preciosTotales[i].innerHTML); 
    }
    iva=base*0.21;
    total=base+iva;
    document.getElementById("base").innerHTML=base;
    document.getElementById("iva").innerHTML=iva;
    document.getElementById("total").innerHTML=total;
}