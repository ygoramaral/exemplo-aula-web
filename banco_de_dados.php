<?php

$servidor = "localhost";
$usuario = "root";
$senha = "123456";
$bd = "sistema_web";

// Create connection
$conn = new mysqli($servidor, $usuario, $senha, $bd);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
//echo "Connected successfully<br>";