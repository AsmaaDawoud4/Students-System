<?php
session_start();
include '../functions/connect.php';

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
	/** delet behavior data */
	
	if (isset($_GET['behavior_id'])) {
		$behavior_id = $_GET['behavior_id'];
		
		$delet_behavior = "DELETE FROM teacher_behavior WHERE behavior_id='$behavior_id' ";

		$data = Run($delet_behavior);
		echo json_encode($data);
	} else {
		echo "not found";
	}
}
