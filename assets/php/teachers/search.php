<?php
session_start();
include '../functions/connect.php';


if ($_SERVER['REQUEST_METHOD'] == 'GET') {
   
    if (isset($_GET['teacher_name'])) {
        
        $teacher_name = $_GET['teacher_name'];

        $query = "SELECT * FROM teacher   WHERE teacher_name='$teacher_name'";
        $data = GetData($query);
       $_SESSION['teacher_id']=$data['id'];
      
        if (isset($data)) {
            echo json_encode([
                'success'  => true,
                'data' =>$data
            ]);
        } else {
            echo json_encode([
                'success'  => false,
            ]);
        }
    } else {
        echo "not found";
    }
}