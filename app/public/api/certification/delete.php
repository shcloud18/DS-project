<?php


$db = DbConnection::getConnection();
$stmt = $db->prepare(
  'DELETE FROM Certifications
  WHERE certificationID = ?');


  $stmt->execute([
    $_POST['certificationID']
  ]);

  header('HTTP/1.1 303 See Other');
