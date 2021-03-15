<?php

   session_start();
 include_once '../functions/connect.php';


$id=$_SESSION['id'];

$std_name = $_POST['std_name'];
$std_id   = $_POST['std_id'];

$query_updatestd =Run($update_std);
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
// $moth_certif=$_POST['moth_certif'];

$moth_name=$_POST['moth_name'];
$moth_id=$_POST['moth_id'];
$moth_tel=$_POST['moth_tel'];
$reg_N=$_POST['reg_N'];

$std_Cbirth=$_POST['std_Cbirth'];
$std_std_sexn=$_POST['std_std_sexn'];
$moth_job=$_POST['moth_job'];

 $imgName = '';
$tempName = $_FILES['std_imge']['tmp_name'];

if(!empty($_FILES['std_imge']['name'])) {
$imgName = $_FILES['std_imge']['name'];
}else {
	$imgName = $_POST['std_imge'];
}

if($_FILES['std_imge']['error'] == 0 and !empty($tempName)){

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
	//}



 } 

}

	$update_std = "UPDATE std SET
	std_name='$std_name',std_id='$std_id',std_rlgn='$std_rlgn',std_DOB='$std_DOB',std_Adress='$std_Adress',std_sex='$std_sex',
	std_lvl='$std_lvl',std_stge='$std_stge',std_class='$std_class',std_custody='$std_custody',std_imge='$imgName',
	Relationship='$Relationship',fath_name='$fath_name',fath_id='$fath_id',
	fath_tel='$fath_tel',fath_job='$fath_job',moth_name='$moth_name',moth_id='$moth_id',moth_tel='$moth_tel',moth_job='$moth_job'
	,reg_N='$reg_N',std_Cbirth='$std_Cbirth',std_std_sexn='$std_std_sexn',R_Name='$R_Name' WHERE 
	id='$id'

  ";





$query_updatestd =Run($update_std);
	header("location:../../../editing-data.html");

