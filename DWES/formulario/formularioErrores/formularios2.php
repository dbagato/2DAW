<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
<?php
$error=False;
$errortxt['nombre']='';
$errortxt['apellidos']='';
$errortxt['domicilio']='';
$valor['nombre']='';
$valor['apellidos']='';
$valor['domicilio']='';
if (isset($_POST['enviar'])) {
	if (empty($_POST['nombre'])){
		$errortxt['nombre']="No se puede dejar en blanco";
		$error=True;
	}else{
		$valor['nombre']=$_POST['nombre'];
	}
		if (empty($_POST['apellidos'])){
		$errortxt['apellidos']="No se puede dejar en blanco";
		$error=True;
	}else{
		$valor['apellidos']=$_POST['apellidos'];
	}
		if (empty($_POST['domicilio'])){
		$errortxt['domicilio']="No se puede dejar en blanco";
		$error=True;
	}else{
		$valor['domicilio']=$_POST['domicilio'];
	}
}
if (!isset($_POST['enviar']) || $error){	
	echo "<form action='' method='post' >";
	echo "Nombre: <input type='text' name='nombre' value='".$valor['nombre']."'>".$errortxt['nombre']."<br>";
	echo "apellidos: <input type='text' name='apellidos' value='".$valor['apellidos']."'>".$errortxt['apellidos']."<br>";
	echo "domicilio: <input type='text' name='domicilio' value='".$valor['domicilio']."'>".$errortxt['domicilio']."<br>";
	echo "<input type='submit' name='enviar'><br>";
	echo "</form>";
		}	
?>
</body>
</html>