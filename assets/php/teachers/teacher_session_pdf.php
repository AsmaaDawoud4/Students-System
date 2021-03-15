<?php

    session_start();;
include_once '../functions/connect.php';

$_SESSION['teacher_classes']=$_POST['teacher_classes'];
$_SESSION['teacher_name']= $_POST['teacher_name'];
$_SESSION['teacher_DOB']= $_POST['teacher_DOB'];
$_SESSION['teacher_adress']= $_POST['teacher_adress'];
$_SESSION['teacher_phone1']=$_POST['teacher_phone1'];
$_SESSION['teacher_phone2']=$_POST['teacher_phone2'];
$_SESSION['teacher_Social']=$_POST['teacher_Social'];
$_SESSION['teacher_job']=$_POST['teacher_job'];
$_SESSION['teacher_StartDate']=$_POST['teacher_StartDate'];
$_SESSION['teacher_Experince']=$_POST['teacher_Experince'];
$_SESSION['teacher_pic']= $_POST['teacher_pic'];

$_SESSION['teacher_sexn']=$_POST['teacher_sexn'];
// <th colspan="2">#</th>
        // <th colspan="2"> أسم الطالب</th>
        // <th colspan="2">الفصل</th>
        // <th colspan="2">رقم تليفون الأب</th>
        // <th colspan="2">رقم تليفون الأم </th>

        //  <td>' . $_POST['ex']. '<td>
  //  <td>' . $_POST['execusee']. '<td>
  //  <td>' . $_POST['absent_obtion']. '<td>
  //  <td>' . $_POST['notes']. '<td>
   //<td>' . $_POST['teacher_name']. '<td>
?>
	


    