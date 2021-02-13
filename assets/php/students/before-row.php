<?php

    session_start();

include '../functions/connect.php';


if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  

       if(isset($_SESSION['id'])){
        $_SESSION['id']=$_SESSION['id']-1;
             $query = 'SELECT * FROM std where id= "' .$_SESSION['id'] . '" ';
             $data = GetData($query);
           
       }
    
         if (isset($data)) {
           
            echo json_encode([
                'success'  => true,

                 'std_id' => $data['std_id'],
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
                
            ]);
        } else {
            echo json_encode([
                'success'  => false,
            ]);
       }}
    else{
        echo json_encode([
            'success'  => false,
            
        ]);}
