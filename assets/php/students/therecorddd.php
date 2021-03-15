<?php
session_start();
include '../functions/connect.php';

 
$span_name = $_GET['span_name'];//db name
$span_name = array($span_name);
$elements =$_GET['elements'];//arabic name ;
$_SESSION['elements']=$elements;
/** get table body data */
for ($data_db = 0; $data_db < count($span_name); $data_db++) {
    echo json_encode([
        'success'  => true,
        'data' => $span_name[$data_db],

    ]);

    $query = "SELECT $span_name[$data_db] FROM std";
    $_SESSION['query_data'] = $query;
    $data = GetDataall($query);

    $resultHTML = '';

    $keys = array_keys($data);
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
        'std_data' => $data
    ]);
/**get the thead name */
    $elements = explode(',', $elements);
    $resultspan = '';

    $resultspan .= '<tr>';
    foreach ($elements as $value) {
        $resultspan .= '<td>' . $value . '</td>';
    }
    $resultspan .= '</tr>';

    $_SESSION['resultspan'] = $resultspan ;
  
 }
