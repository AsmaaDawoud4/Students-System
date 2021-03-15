<?php

    
include_once '../functions/connect.php';

$imgName = $_FILES['teacher_pic']['name'];
$tempName = $_FILES['teacher_pic']['tmp_name'];

if($_FILES['teacher_pic']['error'] == 0 ){

	$extensions = ['jpg' , 'jpeg' , 'gif' , 'png'];
	$ext = pathinfo($imgName , PATHINFO_EXTENSION);

	if(in_array($ext, $extensions)){

		if($_FILES['teacher_pic']['size'] < 2000000){
			
			move_uploaded_file($tempName, '../../imgs/'.$imgName);
		} else {
			echo "حجم الصوره اكبر من الازم ";
		}


	} else {

		echo "امتداد الصوره غير مدعوم";
	}



} 
 
$teacher_classes =$_POST['teacher_classes'];
$teacher_name = $_POST['teacher_name'];
$teacher_DOB = $_POST['teacher_DOB'];
$teacher_adress = $_POST['teacher_adress'];

$teacher_phone1=$_POST['teacher_phone1'];
$teacher_phone2=$_POST['teacher_phone2'];
$teacher_Social=$_POST['teacher_Social'];
$teacher_job=$_POST['teacher_job'];
$teacher_StartDate=$_POST['teacher_StartDate'];

$teacher_Experince=$_POST['teacher_Experince'];


$insert_teacher = "INSERT INTO teacher
(teacher_name,teacher_DOB,teacher_adress,teacher_classes,teacher_phone1,teacher_phone2,teacher_Social,teacher_job,teacher_StartDate,teacher_Experince,teacher_pic)
VALUES

('$teacher_name','$teacher_DOB','$teacher_adress','$teacher_classes','$teacher_phone1','$teacher_phone2','$teacher_Social'
,'$teacher_job','$teacher_StartDate','$teacher_Experince','$imgName')
";

$query_addteacher =Run($insert_teacher);
if ($query_addteacher) {
	header("location:../../../add-teacher.html");

	
}
?>
	


    