

<?php  
session_start();
include_once '../functions/connect.php';

 $output = '';
$result=Run($_SESSION['query']);

 if(mysqli_num_rows($result) > 0)
 {
  $output .= '
  
<table>

<thead>
    <tr>
        <th>م</th>
        <th>أسم الطالب</th>
        <th>الفصل</th>
        <th>رقم تليفون الأب</th>
        <th>رقم تليفون الأم </th>
    </tr>    
</thead>
  ';
  while($row = mysqli_fetch_array($result))
  {
   $output .= '
    <tr>  
                         <td >'.$row["std_id"].'</td>  
                         <td >'.$row["std_name"].'</td>  
                         <td >'.$row["std_class"].'</td>  
                         <td >'.$row["fath_tel"].'</td>  
                         <td >'.$row["moth_tel"].'</td>  
     
     
   ';
  }
  $output .= '</table>';
  header('Content-Type: application/xls');
  header('Content-Disposition: attachment; filename=download.xls');
  echo $output;
 }

?>
