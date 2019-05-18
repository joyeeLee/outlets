<?php
$numval=isset($_GET['numval'])?$_GET['numval']:'';
$p_id=isset($_GET['p_id'])?$_GET['p_id']:'';
include 'conn.php';
if($numval){
    $sql="UPDATE shopcar SET num=$numval WHERE sc_id=$p_id";
    $res=$conn->query($sql);
    echo $res;
}else {
    $sql="SELECT * FROM shopcar";
    $res=$conn->query($sql);
    $content=$res->fetch_all(MYSQLI_ASSOC);
    echo json_encode($content,JSON_UNESCAPED_UNICODE);
}



// $content=array(
//     "data"=>$content,
//     "isupdate"=>$res2
// );

?>