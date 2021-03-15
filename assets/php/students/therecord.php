<?php

session_start();

include '../functions/connect.php';
<<<<<<< HEAD
/** select data */
$query = "SELECT std_name,std_id,std_DOB,std_std_sexn,std_sex,std_rlgn,std_Adress,std_Cbirth,reg_N,std_lvl,std_class,std_stge,
    std_custody,R_Name,Relationship,fath_name,fath_id,fath_tel,fath_job,moth_name,moth_id,moth_tel,moth_job FROM std";

$_SESSION['query'] = $query;
$data = GetDataall($query);

$_SESSION['resultHTML'] = $data;

echo json_encode($data);
=======

if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    $query = "SELECT std_name,std_id,std_DOB,std_std_sexn,std_sex,std_rlgn,std_Adress,std_Cbirth,reg_N,std_lvl,std_class,std_stge,std_custody,R_Name,Relationship,fath_name,fath_id,fath_tel,fath_job,moth_name,moth_id,moth_tel,moth_job FROM std";

    $_SESSION['query'] = $query;
    $data = GetDataall($query);

    $_SESSION['resultHTML'] = $data;

    echo '<pre>';
    print_r($data);
    echo json_encode($data);
}
>>>>>>> d8962451298b01b52948e707f2f0e4ab3acef225
