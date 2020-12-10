<?php
//conexion a la base de datos
$link = new mysqli('localhost', 'root', '', 'virtualmarket'); 
//comprobar errores de conexión
if ( $link->connect_errno ){ 
	echo "Fallo al conectar a MySQL: ". $link->connect_error; 
} else
//no hay errores de conexión
{
	// seleccionar charset
	$link->set_charset('utf-8'); 
	//crear string de la consulta
	$consulta="SELECT * FROM productos";
	//ejecutar la consulta
	$result=$link->query($consulta);
	//recorremos el resultado
	echo "<br> <table border='1'>";
	$primera=True;
	$linea1="<tr>";
	$linea2="<tr>";
	while ($fila=$result->fetch_assoc()){
	foreach ($fila as $key => $value) {
		if ($primera){
			$linea1.="<td>$key</td>";			
		}
		$linea2.="<td>$value</td>";
	}
	if ($primera){
			echo "$linea1</tr>";
			$primera=False;
		}
	echo "$linea2</tr>";
	$linea2="<tr>";
		
	}
echo "</table>";
	$result->free();
	$link->close(); 
}