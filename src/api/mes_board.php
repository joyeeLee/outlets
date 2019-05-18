<?php
include 'conn.php';


$mes_content=isset($_GET['mes_content']) ? $_GET['mes_content'] : ''; 

$mes_time=isset($_GET['mes_time']) ? $_GET['mes_time'] : ''; 


$insert_sql="INSERT into lessmess (m_content,m_time) VALUES('$mes_content','$mes_time')"; 
$desc_res2 = $conn->query($insert_sql);


?>