<?php

session_start();

include '../functions/connect.php';


if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    $teacher_name =$_GET['teacher_name'];
    if ($_SESSION['skippedRows'] <=  $_SESSION['frist_behavior_id']) {
      $_SESSION['skippedRows'] = $_SESSION['frist_behavior_id'];
  
  }
  else{
      $query = "SELECT behavior_id,notes,teacher_behavior,behavior_type FROM teacher_behavior inner JOIN teacher ON 
    teacher.id=teacher_behavior.id WHERE teacher_name='$teacher_name'and behavior_id< ".$_SESSION['skippedRows_behavior']." ORDER BY teacher_behavior.behavior_id DESC LIMIT  1 ";
  
      $_SESSION['query_behavior_report']=$query;
    
      $data = GetDataall($query);
      echo json_encode($data);
      $_SESSION['skippedRows_behavior']=$data[0][0];
  }
}
