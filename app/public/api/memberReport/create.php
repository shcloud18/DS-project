<?php

require 'common.php';
// get db connection from helper class
$db = DbConnection::getConnection();
//create and run query
// use peramiterized query to avoid injection
$stmt = $db->prepare(
  'INSERT INTO Comments (commentText)
  VALUES (?)'
);

$stmt->execute([
  $_POST['commentText']
]);

//output
header('HTTP/1.1 303 See Other');
header('Location: ../comments/?commentText=' . $_POST['commentText']);
