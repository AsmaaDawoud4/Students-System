<?php

include '../functions/connect.php';

 $data_std_absent;
 $data_id;
if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    $data_id = $_GET['std_id'] ;

    $query = "SELECT id_behavior,std_behavior,violation,execution,note FROM std_behavior inner JOIN std ON std.id=std_behavior.id_std WHERE std_id='$data_id' ORDER BY std_behavior.id_std DESC";
    $data_std_absent =GetDataall($query);
    
    echo json_encode($data_std_absent);
    die;
}


     ?>
    
