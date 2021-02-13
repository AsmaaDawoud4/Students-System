<?php
session_start();
include '../functions/connect.php';


if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    
    if (isset($_GET['std_id'])) {

        $std_id = $_GET['std_id'];

        $query = 'SELECT * FROM std WHERE std_id="' . $std_id . '"';
        $data = GetData($query);
        $_SESSION['id']=$data['id'];
        
        if (isset($data)) {
            echo json_encode([
                'success'  => true,
                'value' => $data['std_name'],
                'Dob' => $data['std_DOB'],
                'image' => $data['std_imge'],
                'std_rlgn' => $data['std_rlgn'],
                'std_Adress' => $data['std_Adress'],
                'Relationship' => $data['Relationship'],
                'std_sex' => $data['std_sex'],
                'std_lvl' => $data['std_lvl'],
                'std_stge' => $data['std_stge'],
                'std_class' => $data['std_class'],
                'std_custody' => $data['std_custody'],
                'R_Name' => $data['R_Name'],
                'fath_name' => $data['fath_name'],
                'fath_id' => $data['fath_id'],
                'fath_tel' => $data['fath_tel'],
                'fath_job' => $data['fath_job'],
                'moth_name' => $data['moth_name'],
                'moth_id' => $data['moth_id'],
                'moth_tel' => $data['moth_tel'],
                'reg_N' => $data['reg_N'],
                'std_Cbirth' => $data['std_Cbirth'],
                'std_std_sexn' => $data['std_std_sexn'],
                'moth_job' => $data['moth_job'],
                'moth_certif' => $data['moth_certif'],
                'fath_certif' => $data['fath_certif']
            ]);
          
     }else {
            echo json_encode([
                'success'  => false,
            ]);
        }
    } else {
        echo "not found";
    }
}