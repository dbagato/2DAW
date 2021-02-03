<?php

class Bd	
{
	private $link;
	function __construct()
	{
		if (!isset ($this->link)) {
			try{
				$this->link= new PDO("mysql:host=localhost;dbname=virtualmarket", "root", "");
				$this->link->exec("set names utf8mb4");
			}
			catch(PDOException $e){
				$dato= "¡Error!: " . $e->getMessage() . "<br/>";
 				return $dato;
 				die();
 			}
 		}
	}
		
	function __get($var){
		return $this->$var;
	}
}
class LineaPedido{
	private $idPedido;
	private $nlinea;
	private $idProducto;
	private $cantidad;
	function __construct($idPedido,$nlinea,$idProducto,$cantidad){
		$this->idPedido=$idPedido;
		$this->nlinea=$nlinea;
		$this->idProducto=$idProducto;
		$this->cantidad=$cantidad;
	}
	static function getAll($link){
		try{
			$consulta="SELECT * FROM lineaspedidos";
			$result=$link->prepare($consulta);
			$result->execute();
			return $result;
		}
		catch(PDOException $e){
			$dato= "¡Error!: " . $e->getMessage() . "<br/>";
			 return $dato;
			 die();
		 }
	}
	function __set($property, $value){
		if(property_exists($this, $property)) {
			$this->$property = $value;
		}
	}
	function __get($var){
		return $this->$var;
		}
	function insertarLineaPedido($link){
		$consulta="INSERT INTO lineaspedidos VALUES ('$this->idPedido','$this->nlinea','$this->idProducto','$this->cantidad')";
		return $link->query($consulta);
		try{
			$consulta="INSERT INTO lineaspedidos VALUES (:idPedido,:nlinea,:idProducto,:cantidad)";
			$result=$link->prepare($consulta);
			$result->bindParam(':idPedido',$idPedido);
			$result->bindParam(':nlinea',$nlinea);
			$result->bindParam(':idProducto',$idProducto);
			$result->bindParam(':cantidad',$cantidad);
			$idPedido=$this->idPedido;
			$nlinea=$this->nlinea;
			$idProducto=$this->idProducto;
			$cantidad=$this->cantidad;
			$result->execute();
			return $result;
		}
		catch(PDOException $e){
			$dato= "¡Error!: " . $e->getMessage() . "<br/>";
			 return $dato;
			 die();
		 }
	}
	function borrarLineaPedido ($link){
		try{
			$consulta="DELETE FROM lineaspedidos where idPedido='$this->idPedido' and nlinea='$this->nlinea'";
			$result=$link->prepare($consulta);
			return $result->execute();
		}
		catch(PDOException $e){
			$dato= "¡Error!: " . $e->getMessage() . "<br/>";
			 return $dato;
			 die();
		 }
	}
	function buscarLineaPedido ($link){
		try{
			$consulta="SELECT * FROM lineaspedidos WHERE idPedido='$this->idPedido'";
			$result=$link->prepare($consulta);
			$result->execute();
			return $result->fetch(PDO::FETCH_ASSOC);
		}
		catch(PDOException $e){
			$dato= "¡Error!: " . $e->getMessage() . "<br/>";
			 return $dato;
			 die();
		 }
	}
	function buscar_nLineaPedido ($link){
		try{
			$consulta="SELECT * FROM lineaspedidos where idPedido='$this->idPedido'and nlinea='$this->nlinea'";
			$result=$link->prepare($consulta);
			$result->execute();
			return $result->fetch(PDO::FETCH_ASSOC);
		}
		catch(PDOException $e){
			$dato= "¡Error!: " . $e->getMessage() . "<br/>";
			 return $dato;
			 die();
		 }
	}
	function calcular_nLinea($link){
		try{
			$consulta="SELECT Max(nlinea) as nlinea FROM lineaspedidos where idPedido='$this->idPedido'";
			$result=$link->prepare($consulta);
			$result->execute(); 
			foreach ($result->fetch(PDO::FETCH_ASSOC) as $key => $value) {
					return $value+1;
			}
		}
		catch(PDOException $e){
			$dato= "¡Error!: " . $e->getMessage() . "<br/>";
			 return $dato;
			 die();
		 }

	}
}
