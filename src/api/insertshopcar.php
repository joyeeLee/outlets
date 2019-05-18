<?php
$pro_num=isset($_GET['pro_num'])?$_GET['pro_num']:'';
$size_type=isset($_GET['size_type'])?$_GET['size_type']:'';
$priceget=isset($_GET['priceget'])?$_GET['priceget']:'';
$tittxt=isset($_GET['tittxt'])?$_GET['tittxt']:'';
$getimg2=isset($_GET['getimg2'])?$_GET['getimg2']:'';
$cid2=isset($_GET['cid2'])?$_GET['cid2']:'';
include 'conn.php';
$sql="INSERT INTO shopcar (num,price,title,img,size,cid) VALUES('$pro_num','$priceget','$tittxt','$getimg2','$size_type','$cid2');";
$res=$conn->query($sql);
if ($res) {
   echo 1;
}else {
    echo 0;
}
?>