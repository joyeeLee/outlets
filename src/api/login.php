<?php
include "conn.php";
$userphonenum=isset($_POST['userphonenum'])?$_POST['userphonenum']:'';
$userpwdnum=isset($_POST['userpwdnum'])?$_POST['userpwdnum']:'';

// echo $userphonenum,$userpwdnum;
$sql="SELECT * FROM regtable WHERE phonenum='$userphonenum' AND password='$userpwdnum'";
$res=$conn->query($sql);
if ($res->num_rows) {
    echo 1;
}else {
    echo 0;
}
// $content=$res->fetch_all(MYSQLI_ASSOC);
// echo json_encode($content,JSON_UNESCAPED_UNICODE);
?>