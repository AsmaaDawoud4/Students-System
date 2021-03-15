<?php
if(!empty($_POST['q']))
{

    include_once '../functions/connect.php';
    $q=$_POST['q'];
    $query = "select teacher_name from teacher where teacher_name like '%$q%'  ;";
    $result=Run($query);
    
    while($output=mysqli_fetch_assoc($result))
    {
        echo '<a id=search>'.$output['teacher_name'].'</a>'.'</br>';
    }
    
}