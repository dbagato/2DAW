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
	if(isset($_POST['enviar'])){
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
	
	}else{
	echo "
		<form action='' method='post'>
		inserte dos numeros en los huecos y selecione la operacion a realizar.
		</br>
		<input type='numero' name='n1'>
		<select name='operacion'>
				  <option selected='selected' value='+''>+</option>
				  <option value='-''>-</option>
				  <option value='/'>/</option>
				  <option value='*''>*</option>
				</select>
		<input type='numero' name='n2'>
		</br>
		<input type='submit' name='enviar' />



	</form>";}
	?>
</body>
</html>