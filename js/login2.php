<?php

	$el_usuario=isset($_GET['usuario']) ? $_GET['usuario'] : $_POST['usuario'];

	$el_array = new stdClass();

	if ($el_usuario=="Jorge") {
	
		$el_array->Nombre = "Jorge";
		$el_array->Apellido = "Mendieta";
		$el_array->Edad = "25";
		$json = json_encode($el_array);
		echo $json;
	}else if($el_usuario=="María"){
		$el_array->Nombre = "María";
		$el_array->Apellido = "loayza";
		$el_array->Edad = "65";
		$json = json_encode($el_array);
		echo $json;
	}else if($el_usuario=="Enrique"){
		$el_array->Nombre = "Enrique";
		$el_array->Apellido = "perez";
		$el_array->Edad = "55";
		$json = json_encode($el_array);
		echo $json;
	}

?>