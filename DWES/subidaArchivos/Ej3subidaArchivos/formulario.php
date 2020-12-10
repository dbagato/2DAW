<!DOCTYPE html>
<html>
<head>
    <title>Ejercicio 9 subida de ficheros</title>
</head>
<body>
<?php
$error=false;
$errortxt['nombre']='';
$errortxt['apellidos']='';
$errortxt['cp']='';
$errortxt['color']='';
$valor['nombre']='';
$valor['apellidos']='';
$valor['cp']='';
$valor['color']='';
//comporbara que el formulario anterior es correcto 
if (isset($_POST['enviar'])) {
   if (empty($_POST['nombre'])) {
      $errortxt['nombre']="no se puede dejar en blanco";
      $error=true;
   }else{
       $valor['nombre']=limpiar($_POST['nombre']);
      
   }
   if (empty($_POST['apellidos'])) {
    $errortxt['apellidos']="no se puede dejar en blanco";
    $error=true;
 }else{
     $valor['apellidos']=limpiar($_POST['apellidos']);
 }
 if (empty($_POST['cp'])) {
    $errortxt['cp']="no se puede dejar en blanco";
    $error=true;
 }else{
     $valor['cp']=limpiar($_POST['cp']);
 }
 if (empty($_POST['color'])) {
    $errortxt['color']="no se puede dejar en blanco";
    $error=true;
 }else{
     $valor['color']=limpiar($_POST['color']);
 }

}
//en el caso que el formualrio anterior hubiera algun campo vacio este saldria otra vez para que asi pueda pasar al siguiente formulario
if(!isset($_POST['enviar'])|| $error){
echo"    <form action='formulario.php' method='post'>";
echo"    Nombre: <input type='text' name='nombre' value='".$valor['nombre']."'>".$errortxt['nombre']."</br>";
echo"    Apellidos: <input type='text' name='apellidos' value='".$valor['apellidos']."'>".$errortxt['apellidos']."</br>";
echo"    Codigo postal: <input type='text' name='cp' value='".$valor['cp']."'>".$errortxt['cp']."</br>";
echo"    color favorito: <input type='text' name='color' value='".$valor['color']."'>".$errortxt['color']."</br>";
echo"    <input type='submit' name='enviar'>";
echo"    </form>";
}
//formuoario que cargara los datos del primer formulario y cargara el archivo a subir
if (isset($_POST['enviar'])|| $error==false) {
    echo"    <form action='subir.php' method='post'>";
    echo"    <input type='file' name='fichero'><br/>";
    lista('directorio',$valor);
    echo"    <input type='submit' name='enviar'>";
    echo"    </form>";
}

function limpiar($sinEspacios){
    $sinEspacios=trim($sinEspacios);
    $sinEspacios=htmlspecialchars($sinEspacios);
    return $sinEspacios;
}
function lista($nombre,$arrayOpciones){
    echo "<select name='"$nombre"' >";
    foreach ($arrayOpciones as $opcion) {
        echo "<option>".$opcion."</option>";
    }
    echo "</select>";
}

?>
</body>
</html>