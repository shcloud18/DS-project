<?php

require 'common.php';

//get database connection from helper class
$db = DbConnection::getConnection();

//create and run query
$sql = 'SELECT * FROM Comments';
$vars = [];

if (isset($_GET['id'])) {
  //this is a peramiterized query
  $sql = 'SELECT * FROM Comments WHERE id = ?';
  $vars = [ $_GET['id'] ];
}

$stmt = $db->prepare($sql);
$stmt->execute($vars);

$comments = $stmt->fetchAll();

//convert to JSON
$json = json_encode($comments, JSON_PRETTY_PRINT);

//output
header('Content-Type: application/json');
echo $json;
