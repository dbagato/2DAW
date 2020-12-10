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
if (isset($_POST['enviar'])) {
   if (empty($_POST['nombre'])) {
      $errortxt['nombre']="no se puede dejar en blanco";
      $error=true;
   }else{
       $valor['nombre']=$_POST['nombre'];
   }
   if (empty($_POST['apellidos'])) {
    $errortxt['apellidos']="no se puede dejar en blanco";
    $error=true;
 }else{
     $valor['apellidos']=$_POST['apellidos'];
 }
 if (empty($_POST['cp'])) {
    $errortxt['cp']="no se puede dejar en blanco";
    $error=true;
 }else{
     $valor['cp']=$_POST['cp'];
 }
 if (empty($_POST['color'])) {
    $errortxt['color']="no se puede dejar en blanco";
    $error=true;
 }else{
     $valor['color']=$_POST['color'];
 }



}
if(!isset($_POST['enviar'])|| $error){
echo"    <from action='subir.php' method='post'>";
echo"    Nombre: <input type='text' name='nombre' value='".$valor['nombre']."'>".$errortxt['nombre']."</br>";
echo"    Apellidos: <input type='text' name='apellidos' value='".$valor['apellidos']."'>".$errortxt['apellidos']."</br>";
echo"    Codigo postal: <input type='text' name='cp' value='".$valor['cp']."'>".$errortxt['cp']."</br>";
echo"    color favorito: <input type='text' name='color' value='".$valor['color']."'>".$errortxt['color']."</br>";
echo"    <input type='submit' name='enviar'>";
echo"    </from>";
}

?>
</body>
</html>