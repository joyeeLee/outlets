<?php
$severname="localhost";
$uswrname="root";
$pwd="";
$dbname="outlets";
$conn=new mysqli($severname,$uswrname,$pwd,$dbname);
if($conn->connect_error){
    die("连接失败".$conn->connect_error);
}
?>