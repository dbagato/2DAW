<?php

echo "<br> <table border='1'>";
echo "<tr><th>Id</th><th>Producto</th><th>Precio</th><th>Cantidad</th><th>Coste</th></tr>";
$linea2="<tr>";
foreach ($contenidoCarrito as $values) {
	foreach ($values as $key => $value) {
		$linea2.="<td>$value</td>";
	}
	echo "$linea2</tr>";
	$linea2="<tr>";
}
echo "<tr><td></td><td></td><td></td><td>Total</td><td>".$carrito->calculatTotalCarri()."</td></tr>";
echo "</table>";


echo "<a href='confirmar.php'><button>Confirmar Pedido</button></a>";
echo "<a href='principal.php'><button>Seguir Comprando</button></a>";