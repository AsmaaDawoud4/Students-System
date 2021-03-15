<?php
// make file name in lower case
$new_file_name = strtolower($img_name);
// make file name in lower case 
$final_file=str_replace(' ','-',$new_file_name);

$img_output = $final_file.''.$img_type;
// Checking post Variables
if($img_size == 0) {
    if(strlen($feed_message) < 3) {
        $message = 'Post Too Short';
        $results = ['success' => false, 'message' => $message];
    }
    else {
        $message = 'Post Successful!';
        $results = ['success' => true, 'message' => $message];
       // $insert = mysql_query("INSERT INTO feed(user,message,img,time) values ('$id','$feed_message','NULL','".time()."')");
    }
}
// Post has an image attached
else {
    if(strlen($feed_message) < 3) {
        $message = 'Post Too Short';
        $results = ['success' => false, 'message' => $message];
    }
    else {
        move_uploaded_file($_FILES['file']['tmp_name'], $folder.'/' . $final_file);
        //$insert = mysql_query("INSERT INTO feed (user,message,img) values ('$id','$feed_message','$img_output','".time()."')");
        $message = 'Image Posted!';
        $results = ['success' => true, 'message' => $message];
    }
}
$data[] = ['results' => $results];
echo json_encode($data);
?>