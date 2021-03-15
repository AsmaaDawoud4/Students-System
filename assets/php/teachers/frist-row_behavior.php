<?php

    session_start();

include '../functions/connect.php';


if ($_SERVER['REQUEST_METHOD'] == 'GET') {
         
         $teacher_name = $_GET['teacher_name'] ;
         $query = "SELECT behavior_id,notes,teacher_behavior,behavior_type FROM teacher_behavior inner JOIN teacher ON teacher.id=teacher_behavior.id WHERE teacher_name='$teacher_name' ORDER BY teacher_behavior.behavior_id ASC LIMIT  1 ";
         $_SESSION['query_behavior_report']=$query;
    
         $data_frist = GetDataall($query);
        
         $_SESSION['skippedRows_behavior']=$data_frist[0][0];
       echo json_encode($data_frist);
       
       
}