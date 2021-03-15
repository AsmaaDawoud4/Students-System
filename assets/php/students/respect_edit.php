<?php
session_start();
include '../functions/connect.php';

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    /** update respect data */
    if (isset($_GET['id'])) {
    $id = $_GET['id'];
      
    $rec_remain= $_GET['rec_remain'];
     $rec_total=$_GET['rec_total'];
     $rec_date=$_GET['rec_date'];
     $timestamp = date('Y-m-d H:i:s');
     $update_respect= "UPDATE  receipt set
     rec_remain='$rec_remain',rec_total='$rec_total',rec_date='$rec_date' where id='$id' ";
    
    $data = Run($update_respect);

      
    }
    
    else {
        echo "not found";
    }
}
    