<?php
session_start();
include '../functions/connect.php';

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    /** insert behavior data */
    if (isset($_GET['teacher_name'])) {
        $teacher_name = $_GET['teacher_name'];
      $behavior_type=$_GET['behavior_type'];
     $notes =$_GET['notes'];
     $teacher_behavior=$_GET['teacher_behavior'];
     $behavior_id=$_SESSION['teacher_id'];/** =id in table teacher */
     
     $insert_behavior= "INSERT INTO teacher_behavior
     (id,notes,teacher_behavior,behavior_type)
     VALUES
     ('$behavior_id','$notes','$teacher_behavior','$behavior_type') ";
    
    $data = Run($insert_behavior);
    
      
    } else {
        echo "not found";
    }
}