  
<?php

/**
 * 
 * Open connection to database
 * @return object
 */
function OpenConnection()
{   
    $conn = new mysqli('localhost', 'root', '', 'myschool');
    $conn -> set_charset('utf-8');
    return $conn;
}

/**
 * 
 * Run query into database
 * @param object
 * @param string
 * @return boolean
 */
function Run($query)
{
    $conn = OpenConnection();
    $result = mysqli_query($conn, $query) or die($conn->error);
    CloseConnection($conn);

    return $result;
}

/**
 * 
 * Get data from database
 * @param object
 * @param string
 * @return array
 */
function GetData($query)
{
    $result = Run($query);
    $data = mysqli_fetch_array($result);

    return $data;
}
function GetDataall($query)
{
    $result = Run($query);
    $data = mysqli_fetch_all($result);

    return $data;
}

/**
 * 
 * Close connection from database
 */
function CloseConnection($conn)
{
    $conn->close();
}