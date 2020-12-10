<?php
include "vistas/inicio.html";
session_start();
if (!isset($_SESSION['nombre'])) {
	if (isset($_POST['enviar'])) {
		if (($_POST['nombre']=='1')&&($_POST['pwd']=='1')) {
			$_SESSION['nombre']="paco";
		}
	}else{
		require "vistas/formulario.php";
	}
	
}else{
	$dato="el usuario y esta logueado";
		require"vistas/mensaje.php";
}

include "vistas/fin.html";