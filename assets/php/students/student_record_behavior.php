<?php
session_start();
include '../functions/connect.php';

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    /** insert absent data */
    if (isset($_GET['std_id'])) {
        $std_id = $_GET['std_id'];
       $execution=$_GET['execution'];
        $absent= $_GET['std_behavior'];
     $note =$_GET['note'];
     $violation=$_GET['violation'];
     $id_std=$_SESSION['id_db'];
     $insert_absent= "INSERT INTO std_behavior
     (id_std,std_behavior,note,violation,execution)
     VALUES
     ('$id_std','$absent','$note','$violation','$execution') ";
    
    $data = Run($insert_absent);

      
    } else {
        echo "not found";
    }
}