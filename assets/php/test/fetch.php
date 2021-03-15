
<?php

//fetch.php

$connect = new PDO("mysql:host=localhost;dbname=myschool", "root", "");

$output = '';

$query = '';

if(isset($_POST["query"]))
{
 $search = str_replace(",", "|", $_POST["query"]);
 $query = "
 SELECT * FROM std
 WHERE std_name REGEXP '".$search."' 
//  OR Address REGEXP '".$search."' 
//  OR City REGEXP '".$search."' 
//  OR PostalCode REGEXP '".$search."' 
//  OR Country REGEXP '".$search."'
 ";
}


$statement = $connect->prepare($query);
$statement->execute();

while($row = $statement->fetch(PDO::FETCH_ASSOC))
{
 $data[] = $row;
 echo json_encode($data);

}
require ('../students/student_absent_table_show.php');


?>

