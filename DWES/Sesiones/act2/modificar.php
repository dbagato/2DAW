<?php
include "vistas/inicio.html";
require "modelo.php";
if (isset($_POST['enviarModificar'])) {
	$link=new Bd;
	$cli= new Cliente($_POST['dniCliente'],$_POST['nombre'],$_POST['direccion'],$_POST['email'],$_POST['pwd']);
		if($cli->modificar($link->link)){
			$datos="El cliente se ha modificado correctamente";
			$datos.="<a href='index.php'>Volver</a>";
			require "vistas/mensaje.php";
		} else {
			$datos="ERROR AL MODIFICAR";
			$datos.="<a href='index.php'>Volver</a>";
			require "vistas/mensaje.php";
		}
}else{
	$link=new Bd;
	$cli= new Cliente($_GET['dni'],'','','','');
	$dato=$cli->buscar($link->link);
	require "vistas/formularioModificar.php";
	$link->link->close();
}

include "vistas/fin.html";