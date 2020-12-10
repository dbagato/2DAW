<!DOCTYPE html>
<html>
<head>
	<title>php operaciones</title>
	<meta charset="UTF-8">
</head>
<body>
<?php
$encabezadoTabla =array ('País','Capital','Extensión','Habitantes');
$alemania =array ('Alemania','Berlin',5570146,78420000);
$austria =array ('Austra','Viena',83849,7614000);
$belgica =array ('Bélgica','Bruselas',30518,9932000);

$datosPaises= array (
	array('País'=>'Alemania','Capital'=>'Berlín','Extensión'=>'557046','Habitantes'=>'78420000'),
 	array('País'=>'Austria','Capital'=>'Viena','Extensión'=>'83849','Habitantes'=>'7614000'),	 
 	array('País'=>'Bélgica','Capital'=>'Bruselas','Extensión'=>'30518','Habitantes'=>'9932000')
 	);

function recorrerArray($array){
	echo "<tr>";
		foreach ($array as $dArray ) {
			echo "<td>$dArray</td>";
		}
		echo"</tr>";
	}
echo "<table border='1'>";
recorrerArray($encabezadoTabla);	
recorrerArray($alemania);
recorrerArray($austria);
recorrerArray($belgica);
echo "</table></br>";


echo "<table border='1'>";
	$linea1="<tr>";
	$linea2="<tr>";
	$nLinea=0;
foreach ($datosPaises as $paises) {
	
	foreach ($paises as $clave => $value) {
		if ($nLinea==0) {
			$linea1.="<td>$clave</td>";
		}
		$linea2.="<td>$value</td>";
	}
	if ($nLinea==0) {
		echo "$linea1</tr>";
		$nLinea++;
	}
	echo "$linea2</tr>";
	$linea2="<tr>";
}
echo "</table></br>";
?>

</body>