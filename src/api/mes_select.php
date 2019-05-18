<?php
include 'conn.php';



$select_mes="select * from lessmess";//查询留言板数据
// $select_mes2="select * from zol_mes WHERE xingxing=3 or xingxing=4;";//查询留言板数据
// $select_mes3="select * from zol_mes WHERE xingxing=1 or xingxing=2;";
// $select_mes4="select * from zol_mes WHERE xingxing=5 or xingxing=6;";
$desc_res3 = $conn->query($select_mes);
// $desc_res4 = $conn->query($select_mes2);
// $desc_res5 = $conn->query($select_mes3);
// $desc_res6 = $conn->query($select_mes4);

$content3 = $desc_res3->fetch_all(MYSQLI_ASSOC);//全部数据
// $content4 = $desc_res4->fetch_all(MYSQLI_ASSOC);//中评
// $content5 = $desc_res5->fetch_all(MYSQLI_ASSOC);//差评
// $content6 = $desc_res6->fetch_all(MYSQLI_ASSOC);//好评


$data=array(
    "content3"=>$content3//全部
    // "content4"=>$content4,//中评
    // "content5"=>$content5,//差评
    // "content6"=>$content6,//好评
);



echo json_encode($data,JSON_UNESCAPED_UNICODE)
?>