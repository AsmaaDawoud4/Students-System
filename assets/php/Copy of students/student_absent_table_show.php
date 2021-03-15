<?php

include '../functions/connect.php';

 $data_std_absent;
 $data_id;
if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    $data_id = $_GET['std_id'] ;

    $query = "SELECT id_absent,std_absent,ex,note FROM std_absent inner JOIN std ON std.id=std_absent.ID WHERE std_id='$data_id' ORDER BY std_absent.ID DESC";
    $data_std_absent =GetDataall($query);
    
    echo json_encode($data_std_absent);
    
}


     ?>
    
