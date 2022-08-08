<?php
//https://www.w3schools.com/php/func_mysqli_connect.asp
//https://www.php.net/manual/es/mysqli.quickstart.connections.php

$host = "162.241.60.169"; 
$user = "elctrlco_vidalito"; 
$password = "admin"; 
$database = "elctrlco_CRUD"; 

/*Estilo orientado a objetos*/
$conn = new mysqli($host, $user, $password, $database);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
//echo "Conexion exitosa"


//aqui estoy
?>
