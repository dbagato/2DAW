function ajax() {
    var conexion = new XMLHttpRequest();

    conexion.onreadystatechange = function(){
        if(conexion.readyState ==4 && conexion.status ==200 ){
            var respuesta= conexion.responseText;
            var obj_respuesta = JSON.parse(respuesta);
            document.getElementById("respuesta").innerHTML=obj_respuesta.message;
            
        }
    }

    conexion.open('GET','holamundo.json',true);
    conexion.send();

}