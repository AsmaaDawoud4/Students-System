<?php
session_start();
include '../functions/connect.php';

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
	/** delet absent data */
	
	if (isset($_GET['id_absent'])) {
		$id_absent = $_GET['id_absent'];
		
		$delet_absent = "DELETE FROM std_absent WHERE id_absent='$id_absent' ";

		$data = Run($delet_absent);
		echo json_encode($data);
	} else {
		echo "not found";
	}
}
