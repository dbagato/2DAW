function funcion_ajax() {
    var conexion = new XMLHttpRequest();

    conexion.onreadystatechange = function(){
        if(conexion.readyState ==4 && conexion.status ==200 ){
           var objeto_respuesta = JSON.parse(conexion.responseText);
            console.log(objeto_respuesta);
            var miSelect =document.createElement("select");
            for(var i in objeto_respuesta.provincias){
                console.log(objeto_respuesta.provincias[i].nom);
                var option_provincias = document.createElement("option");
                option_provincias.setAttribute("value",objeto_respuesta.provincias[i].cp);
                option_provincias.innerText=objeto_respuesta.provincias[i].nom;
                miSelect.appendChild(option_provincias);

            }
            miSelect.addEventListener("change",function(){
                //document.getElementById("cp").innerHTML=miSelect.options[this.selectedIndex].value;
                document.getElementById("cp").innerHTML=this.value;
            });

            document.getElementById("contenido").appendChild(miSelect);
            
        }
    }

    conexion.open('GET','provincias.json',true);
    conexion.send();

}
    

