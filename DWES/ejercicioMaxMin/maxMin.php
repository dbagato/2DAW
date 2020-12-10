<!DOCTYPE html>
<html>
<head>
	<title>php MaxMin</title>
	<meta charset="UTF-8">
</head>
<body>
	<?php
	/*con los datos pasado por el formulario lo pasaremos a variables loales para poder trabajar con ellas
	en este caso usaremos POST devido a que en el formulario usamos este method
	*/
	$n1 = $_POST['n1'];
	$n2 = $_POST['n2'];
	$n3 = $_POST['n3'];
	/*calcularemos el numero maximo con max seguido de parentesis y dentro pasaremos los valores que recojimos del formulario
	y lo guardaremos dentro de una variable llamada maximo para despues imprimirlo*/
	$maximo=max($n1,$n2,$n3);
	/*calcularemos el numero minimo con min seguido de parentesis y dentro pasaremos los valores que recojimos del formulario
	y lo guardaremos dentro de una variable llamada minimo para despues imprimirlo*/
	$minimo=min($n1,$n2,$n3);
	//imprimiremos el valor maximo y minimo
	echo "El numero maximo es $maximo y el valor minimo es $minimo</br>";
	

	?>
</body>
</html>

