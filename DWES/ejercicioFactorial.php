<!DOCTYPE html>
<html>
<meta http-equiv="Content-Type" content="text/html;charset=ISO-8859-1">
<head>
	<title>Prier programa PHP</title>
</head>
<body>
	Calcularemos el factorial de un numero, en este caso el 6</br></br></br>
<?php
$numero=6;
$b=$numero;
$factorial=1;
while($numero != 0){
	$factorial*=$numero;
	$numero--;
}

echo "
<table border='1'>
	<tr>
 		<th> El factorial de 
 		</th>
 		<th> $b
 		</th>
 		<th> es 
 		</th>
 		<th> $factorial 
 		</th>
	</tr>
</table>";
?>

</body>
</html>