<?php
session_start();
include '../functions/connect.php';

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
	/** update absent data */
	
	if (isset($_GET['id_absent'])) {
		$id_absent = $_GET['id_absent'];
		$std_absent = $_GET['std_absent'];
		$note = $_GET['note'];
		$ex = $_GET['ex'];
		$update_absent = "UPDATE   std_absent set std_absent='$std_absent',note='$note',ex='$ex'  WHERE id_absent='$id_absent' ";

		$data = Run($update_absent);
		echo json_encode($data);
	} else {
		echo "not found";
	}
}
