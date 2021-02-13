<?php
session_start();
include '../functions/connect.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {


    $query = "SELECT std_name,std_id,std_DOB,std_std_sexn,std_sex,std_rlgn,std_Adress,std_Cbirth,reg_N,std_lvl,std_class,std_stge,
    std_custody,R_Name,Relationship,fath_name,fath_id,fath_tel,fath_job,moth_name,moth_id,moth_tel,moth_job FROM std";

    $_SESSION['query'] = $query;
    $data = GetDataall($query);

    $resultHTML = '';

    foreach ($data as $array) {
        $resultHTML .= '<tr>';
        foreach ($array as $value) {
            $resultHTML .= '<td>' . $value . '</td>';
        }
        $resultHTML .= '</tr>';
    }

    $_SESSION['resultHTML'] = $resultHTML;

    echo json_encode([
        'success' => true,
        'std_absent_data' => $resultHTML
    ]);
}
