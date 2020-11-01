<?php
require 'common.php';

$db = DbConnection::getConnection();
$stmt = $db->prepare(
  'UPDATE Member
  SET
  position = ?,
  firstName = ?,
  lastName = ?,
  startDate = ?,
  dob = ?,
  gender = ?,
  status = ?,
  phone = ?,
  email = ?,
  stationNumber = ?,
  radioNumber = ?,
  address = ?,
  city = ?,
  state = ?
  WHERE memberID = ?');


  $stmt->execute([
    $_POST['memberID']
  ]);

  header('HTTP/1.1 303 See Other');

  header('Location: ../certification')
?>
