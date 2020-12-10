<!DOCTYPE html>
<html>
<head>
	<title>php operaciones</title>
	<meta charset="UTF-8">
</head>
<body>
	<?php
	/*con los datos pasado por el formulario lo pasaremos a variables loales para poder trabajar con ellas
	en este caso usaremos POST devido a que en el formulario usamos este method
	*/
	$n1 = $_POST['n1'];
	$n2 = $_POST['n2'];
	$operacion = $_POST['operacion'];
	$resultado;
	if ($operacion=="+"){
		$resultado=$n1+$n2;
	}
	elseif ($operacion=="-"){
		$resultado=$n1-$n2;
	}
	elseif ($operacion=="/"){
		$resultado=$n1/$n2;
	}
	else {
		$resultado=$n1*$n2;
	}

	echo "El resultado de $n1 $operacion $n2 es: $resultado</br>";
	

	?>
</body>
</html>