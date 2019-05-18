<?php
$goods_id=isset($_GET['goods_id'])?$_GET['goods_id']:'';
include 'conn.php';
$sql="DELETE FROM shopcar WHERE sc_id=$goods_id";
$res=$conn->query($sql);
if($res){
    echo 1;
}else {
    echo 0;
}
?>