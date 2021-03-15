<?php
session_start();
include '../functions/connect.php';

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
	/** delet absent data */
	
	if (isset($_GET['id_teacher'])) {
		$id_teacher = $_GET['id_teacher'];
		
		$delet_absent = "DELETE FROM tech_absent WHERE id_teacher='$id_teacher' ";

		$data = Run($delet_absent);
		echo json_encode($data);
	} else {
		echo "not found";
	}
}
