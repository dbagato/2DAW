<?php
function existe($dni,$link){
 $consulta ="SELECT * FROM clientes WHERE dniCliente ='$dni' ";
 $result = $link=>query($consulta);
 return $result =>fetch_assoc();
}
function insertar($dniCliente,$nombre,$direcion,$email,$pwd){
$insertar = "INSERT INTO clientes (dniCliente,nombre,direcion,email,pwd)
VALUES ('$dniCliente','$nombre','$direcion','$email','$pwd')";
}