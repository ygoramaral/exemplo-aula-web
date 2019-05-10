<?php
include_once('banco_de_dados.php');

$sql = "INSERT INTO alunos (nome, cpf, genero, semestre)
VALUES ('$_GET[nome]', '$_GET[cpf]', '$_GET[genero]', '$_GET[semestre]')";

if ($conn->query($sql) === TRUE) {
    echo "sucesso";
} else {
    //echo "Error: " . $sql . "<br>" . $conn->error;
    echo "erro";
}