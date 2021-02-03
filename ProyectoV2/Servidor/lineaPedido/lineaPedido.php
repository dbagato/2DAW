<?php

include "modelo.php";

$base= new Bd();

/*
  listar todos los posts o solo uno
 */
if ($_SERVER['REQUEST_METHOD'] == 'GET')
{
  if (isset($_GET['idPedido'])&&isset($_GET['nlinea']))
    {
      $lineaPedido= new LineaPedido($_GET['idPedido'],$_GET['nlinea'],'','');
      $dato=$lineaPedido->buscar_nLineaPedido($base->link);
      header("HTTP/1.1 200 OK");
      echo json_encode($dato);
      exit();
    }else{
      if (isset($_GET['idPedido']))
      {
        $lineaPedido= new LineaPedido($_GET['idPedido'],'','','');
        $dato=$lineaPedido->buscarLineaPedido($base->link);
        header("HTTP/1.1 200 OK");
        echo json_encode($dato);
        exit();
      }
      else {
        
        $dato=LineaPedido::getAll($base->link);
        $dato->setFetchMode(PDO::FETCH_ASSOC);
        header("HTTP/1.1 200 OK");
        echo json_encode($dato->fetchAll());
        exit();
    }
    }
   
}

// Crear un nuevo post
if ($_SERVER['REQUEST_METHOD'] == 'POST')
{
    $lineaPedido= new lineaPedido($_POST['idPedido'],'',$_POST['idProducto'],$_POST['cantidad']);
    $lineaPedido->nlinea=$lineaPedido->calcular_nLinea($base->link);
    if(!$lineaPedido->buscar_nLineaPedido($base->link)){
      $lineaPedido->insertarLineaPedido($base->link);
      header("HTTP/1.1 200 OK");
      echo json_encode("$lineaPedido->idPedido,$lineaPedido->nlinea");
      exit();
	 }
}

//Borrar
if ($_SERVER['REQUEST_METHOD'] == 'DELETE')
{
  $lineaPedido= new LineaPedido($_GET['idPedido'],$_GET['nlinea'],'','');
  if($dato=$lineaPedido->borrarLineaPedido($base->link)){
	   header("HTTP/1.1 200 OK");
   	 echo json_encode("$lineaPedido->idPedido,$lineaPedido->nlinea");
	 exit();
  }
}


//En caso de que ninguna de las opciones anteriores se haya ejecutado
header("HTTP/1.1 400 Bad Request");

?>
