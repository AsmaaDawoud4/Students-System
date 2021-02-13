<?php

    
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
$moth_name=$_POST['moth_name'];
$moth_id=$_POST['moth_id'];
$moth_tel=$_POST['moth_tel'];	
$reg_N=$_POST['reg_N'];
$std_Cbirth=$_POST['std_Cbirth'];
$std_std_sexn=$_POST['std_std_sexn'];
$moth_job=$_POST['moth_job'];
$imgName = $_FILES['std_imge']['name'];
$tempName = $_FILES['std_imge']['tmp_name'];

if($_FILES['std_imge']['error'] == 0 ){

	$extensions = ['jpg' , 'jpeg' , 'gif' , 'png'];
	$ext = pathinfo($imgName , PATHINFO_EXTENSION);

	if(in_array($ext, $extensions)){

		if($_FILES['std_imge']['size'] < 2000000){
			
			move_uploaded_file($tempName, '../../imgs/'.$imgName);
		} else {
			echo "حجم الصوره اكبر من الازم ";
		}


	} else {

		echo "امتداد الصوره غير مدعوم";
	}



} 


$insert_std = "INSERT INTO std
(std_name,std_id,std_rlgn,std_DOB,std_Adress,std_sex,std_lvl,std_stge,std_class,
std_custody,std_imge,Relationship,fath_name,fath_id,
fath_tel,fath_job,moth_name,moth_id,moth_tel,moth_job,reg_N,std_Cbirth,std_std_sexn,R_Name)
VALUES
('$std_name','$std_id','$std_rlgn','$std_DOB','$std_Adress','$std_sex','$std_lvl','$std_stge',
'$std_class','$std_custody','$imgName','$Relationship','$fath_name','$fath_id',
'$fath_tel','$fath_job','$moth_name','$moth_id','$moth_tel','$moth_job','$reg_N',
'$std_Cbirth','$std_std_sexn','$R_Name' )";

$query_addstd =Run($insert_std);
if ($query_addstd) {
	header("location:../../../add-student.html");

	
}
?>
	


    