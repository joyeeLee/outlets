<?php
include 'conn.php';
$phonenum=isset($_POST['phonenum'])?$_POST['phonenum']:'';
$password=isset($_POST['password'])?$_POST['password']:'';
$sql=" INSERT INTO regtable (phonenum,password) VALUES ('$phonenum','$password')";
$res=$conn->query($sql);
if ($res==1) {
   echo "yes";
}else {
    echo "no";
}

?>