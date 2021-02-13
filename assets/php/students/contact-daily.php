<?php
session_start();
include '../functions/connect.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    $std_absent = $_POST['std_absent'];

    $query = "SELECT std_id, std_name, std_class,fath_tel,moth_tel FROM std 
         INNER JOIN std_absent ON std.id=std_absent.ID
          WHERE 
          std_absent='$std_absent' ORDER BY std_absent.ID DESC";
           
           $_SESSION['query']=$query;
    $data = GetDataall($query);

    $resultHTML = '';

    $keys = array_keys($data);
    foreach ($data as $array) {
        $resultHTML .= '<tr>';
        foreach ($array as $value) {
            $resultHTML .= '<td colspan="2">' . $value . '</td>';
        }
        $resultHTML .= '</tr>';
    }
    $_SESSION['resultHTML']=$resultHTML;
    echo json_encode([
        'success' => true,
        'std_absent_data' => $resultHTML
    ]);
}
