<?php
	//后端：接收参数，查询第一页的数据，给前端
	$page = isset($_GET['page']) ? $_GET['page'] : '1';
	$num = isset($_GET['num']) ? $_GET['num'] : '10';
	$type = isset($_GET['type']) ? $_GET['type'] : '';//这个变量用于判断是否排序，根据什么规则排序
	$order = isset($_GET['order']) ? $_GET['order'] : '';//判断是升序还是降序
	
	//连接数据库
	include 'conn.php';
	
	//写查询语句 
	/*
	 	SELECT * FROM datalist LIMIT 0,10;
	 	
	 	page   num   index    求的量：起始下标
	 	1      10     0-9      0 
	 	2      10     10-19    10
	 	3      10     20-29    20
	 	
	 	公式：index = (page-1) * num
	*/
	$index = ($page - 1) * $num;
	//是否排序的判断
	if($type) {
		//不为空：意味已经有值传过来，需要排序
		$sql = "SELECT * FROM goodlist ORDER BY $type $order LIMIT $index,$num";
	}else {
		//空：没有传值过来，不需要排序
		$sql = "SELECT * FROM goodlist LIMIT $index,$num";
	}
	
	
	//执行语句
	$res = $conn->query($sql);//结果集
	
	//需求：要数据
	$content = $res->fetch_all(MYSQLI_ASSOC);
	
	//传给前端
//	echo json_encode($content,JSON_UNESCAPED_UNICODE);
	
	//查询所有的数据，为了得到总条数
	$sql2 = 'SELECT * FROM goodlist';
	
	//执行语句
	$res2 = $conn->query($sql2);
	
	//获取结果集的总条数即可
//	echo $res2->num_rows;
	
	//如果要传输多个数据，可以做成关联数组
	$datalist = array(
		'data' => $content,
		'total' => $res2->num_rows,
		'page' => $page,
		'num' => $num
	);
	
	echo json_encode($datalist,JSON_UNESCAPED_UNICODE);
?>