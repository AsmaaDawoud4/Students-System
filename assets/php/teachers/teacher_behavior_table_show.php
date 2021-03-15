<?php
session_start();
include '../functions/connect.php';

 $data_teacher_report;
if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    $teacher_name = $_GET['teacher_name'] ;

    $query = "SELECT behavior_id,notes,teacher_behavior,behavior_type FROM teacher_behavior inner JOIN teacher ON teacher.id=teacher_behavior.id WHERE teacher_name='$teacher_name' ORDER BY teacher_behavior.behavior_id DESC";
    $data_teacher_behavior =GetDataall($query);
    $_SESSION['query_behavior_report']=$query;
    
    $_SESSION['frist_behavior_id']=$data_teacher_behavior[0][0];
    $_SESSION['last_behavior_id']=$data_teacher_behavior[count($data_teacher_behavior)-1][0];
 
    echo json_encode($data_teacher_behavior);
    
}


     ?>
    
