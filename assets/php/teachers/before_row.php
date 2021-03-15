<?php

session_start();

include '../functions/connect.php';

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    $teacher_name = $_GET['teacher_name'];

    if ($_SESSION['skippedRows'] <=  $_SESSION['frist_id_teacher']) {
        $_SESSION['skippedRows'] = $_SESSION['frist_id_teacher'];
    
    } 
       
       else
       {
           $query = "SELECT id_teacher,absent_obtion,notes,teacher_absent,execusee,ex FROM tech_absent inner JOIN teacher ON 
        teacher.id=tech_absent.id WHERE teacher_name='$teacher_name' and id_teacher < " . $_SESSION['skippedRows'] . " ORDER BY tech_absent.id_teacher DESC LIMIT 1";
           $_SESSION['query_teacher_report'] = $query;
           $data = GetDataall($query);
           $_SESSION['skippedRows'] = $data[0][0];
           echo json_encode($data);
       }
}
