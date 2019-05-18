<?php
$cid=isset($_GET['cid'])?$_GET['cid']:'';
include 'conn.php';
$sql="SELECT * FROM goodlist WHERE id=$cid";
$res=$conn->query($sql);
$content=$res->fetch_all(MYSQLI_ASSOC);
echo json_encode($content,JSON_UNESCAPED_UNICODE);
?>