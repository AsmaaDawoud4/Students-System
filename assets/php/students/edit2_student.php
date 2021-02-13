<?php
session_start();
$id=$_SESSION['id'];

include_once '../functions/connect.php';
$std_name = $_POST['std_name'];
$std_id   = $_POST['std_id'];	
$std_rlgn =$_POST['std_rlgn'];
$std_DOB = $_POST['std_DOB'];
$std_Adress = $_POST['std_Adress'];
$Relationship=$_POST['Relationship'];
$std_sex = $_POST['std_sex'];
$std_lvl =$_POST['std_lvl'];
$std_stge= $_POST['std_stge'];
$std_class =$_POST['std_class'];
$std_custody = $_POST['std_custody'];
$R_Name=$_POST['R_Name'];
$fath_name=$_POST['fath_name'];
$fath_id=$_POST['fath_id'];
$fath_tel=$_POST['fath_tel'];

$fath_job=$_POST['fath_job'];
$fath_job=$_POST['fath_job'];
$fath_certif=$_POST['fath_certif'];
$moth_name=$_POST['moth_name'];
$moth_id=$_POST['moth_id'];
$moth_tel=$_POST['moth_tel'];
$reg_N=$_POST['reg_N'];

$std_Cbirth=$_POST['std_Cbirth'];
$std_std_sexn=$_POST['std_std_sexn'];

$moth_job=$_POST['moth_job'];
$imgName = $_FILES['std_imge']['name'];
$tempName = $_FILES['std_imge']['tmp_name'];
$newName='';
if($_FILES['std_imge']['error'] == 0 ){

	$extensions = ['jpg' , 'jpeg' , 'gif' , 'png'];
	$ext = pathinfo($imgName , PATHINFO_EXTENSION);

	if(in_array($ext, $extensions)){

		if($_FILES['std_imge']['size'] < 2000000){
			$newName = md5(uniqid()) . '.' . $ext;
			move_uploaded_file($tempName, '../../imgs/'.$newName);
		} else {
			echo "حجم الصوره اكبر من الازم ";
		}


	} 


} 

$update_std = "UPDATE std SET
std_name='$std_name',std_id='$std_id',std_rlgn='$std_rlgn',std_DOB='$std_DOB',std_Adress='$std_Adress',std_sex='$std_sex',
std_lvl='$std_lvl',std_stge='$std_stge',std_class='$std_class',std_custody='$std_custody',std_imge='$newName',
Relationship='$Relationship',fath_name='$fath_name',fath_id='$fath_id',
fath_tel='$fath_tel',fath_job='$fath_job',moth_name='$moth_name',moth_id='$moth_id',moth_tel='$moth_tel',moth_job='$moth_job'
,reg_N='$reg_N',std_Cbirth='$std_Cbirth',std_std_sexn='$std_std_sexn',R_Name='$R_Name' WHERE 
id='$id'

  ";



$query_updatestd =Run($update_std);


if ($query_updatestd) 
{
	header("location:../../../student-record.html");


}
 


  