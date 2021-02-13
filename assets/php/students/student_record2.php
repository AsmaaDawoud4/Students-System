<?php
session_start();
include '../functions/connect.php';

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    
    if (isset($_GET['std_id'])) {
        $std_id = $_GET['std_id'];
        $absent= $_GET['std_absent'];
     $note =$_GET['note'];
     $ex=$_GET['ex'];
     $id=$_SESSION['id'];
     $insert_absent= "INSERT INTO std_absent
     (ID,std_absent,note,ex)
     VALUES
     ('$id','$absent','$note','$ex')";
    
    $data = Run($insert_absent);

      
    } else {
        echo "not found";
    }
}