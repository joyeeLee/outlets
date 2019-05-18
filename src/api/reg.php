<?php
include "conn.php";
$regver=isset($_GET['regver'])?$_GET['regver']:'';

// echo $regver;
$sql="SELECT * FROM regtable WHERE phonenum='$regver'";
$res=$conn->query($sql);
if ($res->num_rows==1) {
   echo 1;//输出1代表有这个用户名存在了不能用这个用户名注册
}
else {
    echo 0;
}
?>