<?php
session_start();
include '../functions/connect.php';

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
	/** update teacher data */

	if (isset($_GET['id_teacher'])) {
		$id_teacher = $_GET['id_teacher'];
		$teacher_absent = $_GET['teacher_absent'];
		$notes = $_GET['notes'];
		$ex = $_GET['ex'];
		$absent_obtion=$_GET['absent_obtion'];
		$execusee=$_GET['execusee'];
		$update_teacher = "UPDATE   tech_absent set teacher_absent='$teacher_absent',notes='$notes',ex='$ex', execusee='$execusee',absent_obtion='$absent_obtion' WHERE id_teacher='$id_teacher' ";

		$data = Run($update_teacher);
		echo json_encode($data);
	} else {
		echo "not found";
	}
}
