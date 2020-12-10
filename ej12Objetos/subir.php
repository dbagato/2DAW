
<?php
require "funciones.php";
require "modal.php";
require "vista/inicio.html";
if (isset($_POST['enviaropciones'])){
	require "vista/formulario.php";
}elseif (isset($_POST['enviarfichero'])) {
	$imagen=new Imagen($_FILES['fichero']['name'],$_FILES['fichero']['tmp_name'],$_FILES['fichero']['type']);
	if ($imagen->estaCargado()){
		$dir=$_POST['directorio'];
		crear_directorio($dir);
		if ($imagen->cambiarNombre($dir)){
		$imagen->mover();
		$mensaje="el fichero $nombre se ha subido correctamente";
		require "vista/mensaje.php";
		}
		else {
			$mensaje="el archivo no es de extensión correcta";
			require "vista/mensaje.php";}
	
	}else {
		$mensaje= "no se ha podido subir el fichero";
		require "vista/mensaje.php";
	} 
	$mensaje="<a href='subir.php'> volver a inicio </a>";
	require "vista/mensaje.php";
}else require "vista/opciones.html";	

require "vista/fin.html";