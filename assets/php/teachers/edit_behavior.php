
  <?php
session_start();
include '../functions/connect.php';

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
	/** update teacher data */

	if (isset($_GET['behavior_id'])) {
		$behavior_id = $_GET['behavior_id'];
		$behavior_type=$_GET['behavior_type'];
		$notes =$_GET['notes'];
		$teacher_behavior=$_GET['teacher_behavior'];
		$update_behavior = "UPDATE teacher_behavior set teacher_behavior='$teacher_behavior',notes='$notes',behavior_type='$behavior_type' WHERE behavior_id = '$behavior_id' ";

		$data = Run($update_behavior);
		echo json_encode($data);
	} else {
		echo "not found";
	}
}
