<?php
session_start();
include '../functions/connect.php';

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    /** insert absent data */
    if (isset($_GET['teacher_name'])) {
        $teacher_name = $_GET['teacher_name'];
      $ex=$_GET['ex'];		
      $execusee=$_GET['execusee'];
$absent_obtion=$_GET['absent_obtion'];
     $notes =$_GET['notes'];
     $teacher_absent=$_GET['teacher_absent'];
     $teacher_id=$_SESSION['teacher_id'];/**= id in table teacher */
     
     $insert_absent= "INSERT INTO tech_absent
     (id,absent_obtion,notes,teacher_absent,execusee,ex)
     VALUES
     ('$teacher_id','$absent_obtion','$notes','$teacher_absent','$execusee','$ex') ";
    
    $data = Run($insert_absent);

      
    } else {
        echo "not found";
    }
}