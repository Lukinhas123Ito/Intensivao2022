<?php

include('../../../conn/conn.php');

session_start();

$ep_id = $_SESSION['ID'];

$sql = "SELECT * FROM CLIENTE WHERE EMPRESA_ID = ".$ep_id." ORDER BY NOME DESC";

$resultado = $pdo->query($sql);
if($resultado){
    while($row = $resultado -> fetch(PDO::FETCH_ASSOC)){
        $dados[] = array_map('utf8_encode', $row);
}}

echo json_encode($dados);


