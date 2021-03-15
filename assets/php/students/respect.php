<?php
session_start();
include '../functions/connect.php';

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    /** insert respect data */
    if (isset($_GET['id'])) {
    $id = $_GET['id'];
      
    $rec_remain= $_GET['rec_remain'];
     $rec_total=$_GET['rec_total'];
     $rec_date=$_GET['rec_date'];
     $timestamp = date('Y-m-d H:i:s');
     $insert_respect= "INSERT INTO receipt
     (rec_remain,rec_total,rec_date,timestamp,id)
     VALUES
     ('$rec_remain','$rec_total','$rec_date','$timestamp','$id') ";
    
    $data = Run($insert_respect);

      
    }
    
    else {
        echo "not found";
    }
}
    