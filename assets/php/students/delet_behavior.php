<?php
session_start();
include '../functions/connect.php';

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
	/** delet behavior data */
	
	if (isset($_GET['id_behavior'])) {
		$id_behavior = $_GET['id_behavior'];
		
		$delet_behavior = "DELETE FROM std_behavior WHERE id_behavior='$id_behavior' ";

		$data = Run($delet_behavior);
		echo json_encode($data);
	} else {
		echo "not found";
	}
}
