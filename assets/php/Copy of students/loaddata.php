<?php
if(!empty($_POST['q']))
{

    include_once '../functions/connect.php';
    $q=$_POST['q'];
    $query = "select std_name,std_id from std where std_name like '%$q%' or std_id like '%$q%' ;";
    $result=Run($query);
    
    while($output=mysqli_fetch_assoc($result))
    {
        echo '<a id=search>'.$output['std_name'].'</a>'.'</br>';
    }
    
}