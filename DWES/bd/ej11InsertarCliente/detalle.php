<?php
include "vistas/inicio.html";
require "modelo.php";
$base= new Bd();
$cli=new Cliente($_GET['dni'],'','','','');
$dato=$cli->buscar($base->link);
require "vistas/verDetalle.php";
$datos = "<a href='index.php'>volver inicio</a>";
require "vistas/mensaje.php";
include "vistas/fin.html";