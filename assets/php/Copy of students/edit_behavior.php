<?php
session_start();
include '../functions/connect.php';

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
	/** update behavior data */
	
	if (isset($_GET['id_behavior'])) {
		$id_behavior = $_GET['id_behavior'];
		$std_behavior = $_GET['std_behavior'];
		$note = $_GET['note'];
		$execution=$_GET['execution'];
     $violation=$_GET['violation'];
		$update_behavior = "UPDATE   std_behavior set std_behavior='$std_behavior',violation='$violation',execution='$execution',note='$note'  WHERE id_behavior='$id_behavior' ";

		$data = Run($update_behavior);
		echo json_encode($data);
	} else {
		echo "not found";
	}
}
