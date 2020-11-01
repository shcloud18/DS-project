<?php
require 'common.php';

$db = DbConnection::getConnection();
$stmt = $db->prepare(
  'DELETE FROM Member
  WHERE memberID = ?');


  $stmt->execute([
    $_POST['memberID']
  ]);

  header('HTTP/1.1 303 See Other');

  header('Location: ../firefighters')
?>
