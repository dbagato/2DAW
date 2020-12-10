<?php
require "vista/inicio.html";
//conexion a la base de datos
global $link = new mysqli('localhost', 'root', '', 'virtualmarket'); 
//comprobar errores de conexión
if ( $link->connect_errno ){ 
	echo "Fallo al conectar a MySQL: ". $link->connect_error; 
} else
//no hay errores de conexión
{
	// seleccionar charset
	$link->set_charset('utf-8');

	

	if (isset($_POST['enviar'])) {
		$value['dniCliente']=$_POST['dni'];
		$value['nombre']=$_POST['nombre'];
		$value['direccion']=$_POST['direccion'];
		$value['email']=$_POST['email'];
		$value['pwd']=$_POST['pwd'];

		if(existe($value['dni'])){
			require "vistas/error.php";
		}else{
			insertar($value['dniCliente'],$value['nombre'],$value['direccion'],$value['email'],$value['pwd']);
				//crear string de la consulta
				$consulta="SELECT * FROM clientes";
				//ejecutar la consulta
				$result=$link->query($consulta);
				//recorremos el resultado
				require "vista/msgIniTabla.php";
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
						require "vista/msgLinea.php";
						$primera=False;
					}
					require "vista/msgLinea2.php";
					$linea2="<tr>";
		
					}
					require "vista/msgFinTabla.php";
					$result->free();
					$link->close(); 
				}

		}


	}else{
		require "vistas/formulario.php";
	}




require "vista/fin.html"