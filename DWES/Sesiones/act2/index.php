<?php
include "vistas/inicio.html";
require "modelo.php";
session_start();
$base= new Bd();
$cli= new Cliente('','','','','');
$dato=Cliente::getAll($base->link);
if (isset($_POST['enviarValidacion'])) {
$datos="";
}else{
	
}
require "vistas/verTabla.php";

include "vistas/fin.html";