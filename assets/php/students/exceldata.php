

<?php  
//export.php  
// $connect = new mysqli('localhost', 'root', '', 'myschool');
// $connect -> set_charset('utf-8');
session_start();
include_once '../functions/connect.php';

 $output = '';
$result=Run($_SESSION['query']);

 if(mysqli_num_rows($result) > 0)
 {
   $span_name=$_SESSION['span_name'];
   
   $span_name=json_decode(json_encode ($span_name,true));
   
   $span_name=str_replace(',', '&nbsp;', $span_name);
  $span_name=explode(',',$span_name);
           $resultspan = '';
               
           
           $resultspan .= '<tr>';
           foreach ($span_name as $value) {
               $resultspan .= '<td>' . $value . '</td>';
           }
           $resultspan .= '</tr>';
       
       $_SESSION['resultspan']=$resultspan;
       
       echo json_encode([
        'success' => true,
        'std_data' => $resultspan
    ]);

  $output .= '
  
<table>

<thead>
   '.
   
   $_SESSION['resultspan'];
  die
   
   .'
</thead>
  ';
  // while($row = mysqli_fetch_array($result))
  // {
  //  $output .= '
  //   <tr>  
  //                        <td >'.$row["std_id"].'</td>  
  //                        <td >'.$row["std_name"].'</td>  
  //                        <td >'.$row["std_class"].'</td>  
  //                        <td >'.$row["fath_tel"].'</td>  
  //                        <td >'.$row["moth_tel"].'</td>  
     
     
  //  ';
  // }
  $output .= '</table>';
  header('Content-Type: application/xls');
  header('Content-Disposition: attachment; filename=download.xls');
  echo $output;
 }

?>
