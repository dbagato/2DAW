
function enviar_peticion(accion) {
    var conexion = new XMLHttpRequest();

    conexion.onreadystatechange = function(){
        if(conexion.readyState ==4 && conexion.status ==200 ){ 
            document.getElementById("respuesta").innerHTML=conexion.responseText;  
        }

    }
    conexion.open("POST","UD09-2AJAX.php",true);
    conexion.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    conexion.send('accion='+accion);

}