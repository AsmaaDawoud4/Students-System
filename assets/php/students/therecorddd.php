<?php
session_start();
include '../functions/connect.php';


$elements = $_POST['elements'];
$elements = array($elements);
$span_name = $_POST['span_name'];
$_SESSION['span_name'] = $span_name;

for ($data_db = 0; $data_db < count($elements); $data_db++) {
    echo json_encode([
        'success'  => true,
        'data' => $elements[$data_db],

    ]);

    $query = "SELECT $elements[$data_db] FROM std";
    $_SESSION['query'] = $query;
    $data = GetDataall($query);

    $resultHTML = '';
    $i = 0;
    $j = 0;

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
        'std_data' => $resultHTML
    ]);

    $span_name = explode(',', $span_name);
    $resultspan = '';

    $resultspan .= '<tr>';
    foreach ($span_name as $value) {
        $resultspan .= '<td>' . $value . '</td>';
    }
    $resultspan .= '</tr>';

    $_SESSION['resultspan'] = $resultspan;
    echo json_encode([
        'success' => true,
        'std_data' => $resultspan
    ]);
}
