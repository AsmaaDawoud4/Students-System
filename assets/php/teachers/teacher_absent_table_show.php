<?php
session_start();
include '../functions/connect.php';

 
if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    $teacher_name = $_GET['teacher_name'] ;

    $query = "SELECT id_teacher,absent_obtion,notes,teacher_absent,execusee,ex FROM tech_absent inner JOIN teacher ON teacher.id=tech_absent.id WHERE teacher_name='$teacher_name' ORDER BY tech_absent.id DESC";
    $data_teacher_absent =GetDataall($query);
    $_SESSION['query_teacher_report']=$query;
    $_SESSION['frist_id_teacher']=$data_teacher_absent[0][0];
    $_SESSION['last_id_teacher']=$data_teacher_absent[count($data_teacher_absent)-1][0];
 
    echo json_encode($data_teacher_absent);
    
}


     ?>
    
