<?php

    session_start();

include '../functions/connect.php';


if ($_SERVER['REQUEST_METHOD'] == 'GET') {
         
         $teacher_name = $_GET['teacher_name'] ;
        
         $query = "SELECT id_teacher,absent_obtion,notes,teacher_absent,execusee,ex FROM tech_absent inner JOIN teacher ON teacher.id=tech_absent.id WHERE teacher_name='$teacher_name' ORDER BY tech_absent.id_teacher DESC LIMIT 1";
         $_SESSION['query_teacher_report']=$query; 
         
         $data_last = GetDataall($query);
        
         $_SESSION['last_id_teacher']=$data_last[0][0];
         $_SESSION['skippedRows']=$data_last[0][0];
       echo json_encode($data_last);
       
       
}