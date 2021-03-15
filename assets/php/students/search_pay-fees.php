<?php
session_start();
include '../functions/connect.php';


if ($_SERVER['REQUEST_METHOD'] == 'GET') {

    if (isset($_GET['std_name'])) {

        $std_name = $_GET['std_name'];

        $query = 'SELECT id, std_name,fath_name,fath_id,moth_name,moth_id,std_lvl,std_class,std_imge FROM std WHERE std_name="' . $std_name . '"';
        $data = GetData($query);

        

        if (isset($data)) {
            echo json_encode([
                'success'  => true,
                'id'=>$data['id'],
                'value' => $data['std_name'],
                'fath_name' => $data['fath_name'],
                'fath_id' => $data['fath_id'],
                'moth_name' => $data['moth_name'],
                'moth_id' => $data['moth_id'],
                'std_lvl' => $data['std_lvl'],
                'std_class' => $data['std_class'],
                'image'=>$data['std_imge']
            ]);
        } else {
            echo json_encode([
                'success'  => false,
            ]);
        }
    } else {
        echo "not found";
    }
}
