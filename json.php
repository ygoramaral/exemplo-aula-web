<?php
include_once('banco_de_dados.php');
$sql = "SELECT * FROM alunos";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    $alunos = array();
    $i = 0;
    while($row = $result->fetch_assoc()) {
        $alunos[$i]= $row;
        $i++;
    }
    echo json_encode($alunos);
}
?>