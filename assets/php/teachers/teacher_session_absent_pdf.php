<?php

    session_start();;
include_once '../functions/connect.php';


$_SESSION['teacher_name_absent']= $_POST['teacher_name'];
$_SESSION['ex_absent']=$_POST['ex'];		
$_SESSION['execusee_absent']=$_POST['execusee'];
$_SESSION['absent_obtion_absent']=$_POST['absent_obtion'];
$_SESSION['notes_absent'] =$_POST['notes'];
$_SESSION['teacher_absent_absent']=$_POST['teacher_absent'];

?>
	


    