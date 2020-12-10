<!DOCTYPE html>
<html>
<head>
	<title>php operaciones</title>
	<meta charset="UTF-8">
</head>
<body>
	<?php
	if(isset($_POST['enviar'])){
	/*con los datos pasado por el formulario lo pasaremos a variables loales para poder trabajar con ellas
	en este caso usaremos POST devido a que en el formulario usamos este method
	*/
	$n1 = $_POST['n1'];
	$n2 = $_POST['n2'];
	$n3 = $_POST['n3'];
	$maximo=$n1;
	$minimo=$n1;
	if ($n2<$n1) {
		$minimo=$n2;
	}else{
		$maximo=$n2;
	}if ($n3<$n1) {
		$minimo=$n3;
	}else{
		$maximo=$n3;
	}
	echo "El numero maximo es $maximo y el valor minimo es $minimo</br>";
	
	}else{
	echo "	<form action='' method='post'>
		Inserta el primer numero:
		</br>
		<input type='numero' name='n1'>
		</br>
		Inserta el segundo numero:
		</br>
		<input type='numero' name='n2'>
		</br>
		Inserta el tercer numero:
		</br>
		<input type='numero' name='n3'>
		</br>
		<input type='submit' name='enviar' />



	</form>";}
	?>
</body>
</html>