<?php
include "vistas/inicio.html";
require "modelo.php";
$base= new Bd();
$cli=new Cliente($_GET['dni'],'','','','');
$dato=$cli->borrar($base->link);
$datos="El cliente se ha borrado correctamente<br>";
$datos.="<a href='index.php'>Volver</a>";
require "vistas/mensaje.php";

include "vistas/fin.html";