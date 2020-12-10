<!DOCTYPE html>
<html>
<head>
	<title>ejericio2</title>
</head>
<body>
	En este caso seleccionaremos tres numeros en variables y los ordenaremos de mayor a menor.
</br>
	<?php
	/*primero de todo iniciaremos las trees variables para poder ordenarlas de mayor a menos en este caso elejiremos
	tres numeros num1:34 num2:15 num3: 48 y tres variables de posicion para que sea mas sencillo modificar el codigo.
	*/
	$num1=34;
	$num2=15;
	$num3=48;
	$primero;
	$segundo;
	$tercero;
	/*en el primer if se comprobara si el mayor numero es el 1, en ese caso pasara a comprobar 
	si el segundo mayor es el numero 2 o el numero 3 y se definiran las posiciones
	*/
	if ($num1>$num2&&$num1>$num3) {
		$primero=$num1;
		if ($num2>$num3) {
			$segundo=$num2;
			$tercero=$num3;
			echo " El orden de mayor a menor : $primero , $segundo , $tercero.";
		}else{
			$segundo=$num3;
			$tercero=$num2;
			echo " El orden de mayor a menor : $primero , $segundo , $tercero.";
		}
	/*en caso que el primer numero no sea el mayor pasara a comprobar que el segundo numero es el mayor
	y si es asi comprobara cual de los siguientes es el mayor si el numero 1 o el numero 3
	*/	
	}else if ($num2>$num1&&$num2>$num3) {
		$primero=$num2;
		if ($num1>$num3) {
			$segundo=$num1;
			$tercero=$num3;
			echo " El orden de mayor a menor : $primero , $segundo , $tercero.";
		} else {
			$segundo=$num3;
			$tercero=$num1;
			echo " El orden de mayor a menor : $primero , $segundo , $tercero.";
		}
	/* por ultimo al haber comprobado los primeros numeros al ser este el restante si llega el 
	programa hasta aqui querra decir que el numero 3 es el matyor y por ende se definira en la primera posicion
	y se comporbara cual de los dos numeros es mayor si el numero 1 o el 2. 
	*/	
	}else{
		$primero=$num3;
		if ($num1>$num2) {
			$segundo=$num1;
			$tercero=$num2;
			echo " El orden de mayor a menor : $primero , $segundo , $tercero.";
		} else {
			$segundo=$num2;
			$tercero=$num1;
			echo " El orden de mayor a menor : $primero , $segundo , $tercero.";
		}
	}
	?>
</body>
</html>