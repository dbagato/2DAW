<!DOCTYPE html>
<html>
<head>
    <title>Ejercicio 9 subida de ficheros</title>
</head>
<body>
<?php
$nombre=$_FILES['fichero']['name'];
if (is_uploaded_file($_FILES['fichero']['tmp_name'])) {
    $partes=explode('.',$nombre);
    $npartes=count($partes);
    if ($npartes>0) {
       $dir="img/";
       if (!is_dir($dir)) {
          crear_Directorio($dir);
       }
       if (is_file($dir.$nombre)) {
           $id_Unico=uniqid();
           $nombre=$partes[0];
           for ($i=1; $i <  $npartes-1; $i++) { 
              $nombre.=".".$partes[$i];
           }
           $nombre.="_".$id_Unico.".".$partes[$npartes-1];
       }
       move_uploaded_file($_FILES['fichero']['tmp_name'],$dir.$nombre);
       echo "el fichero $nombre se ha subido correctamente";
    }else{
        echo "El archivo no tiene extension";
    }
}else{
    echo "No se ha podido subir el fichero";
}
function estado_archivo($nombre,$dir){

}
function crear_Directorio($directorio){
mkadir($directorio);
}
?>
</body>
</html>